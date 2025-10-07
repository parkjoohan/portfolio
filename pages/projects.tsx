import Layout from '@/components/layout';
import { DATABASE_ID, TOKEN } from '@/config';
import Head from 'next/head';
import { GetServerSideProps } from 'next';
import ProjectItem from '@/components/projects/projectItem';

// Notion API의 실제 응답 구조에 맞는 타입 정의
interface NotionRichText {
    type: 'text';
    text: {
        content: string;
        link: string | null;
    };
    annotations: {
        bold: boolean;
        italic: boolean;
        strikethrough: boolean;
        underline: boolean;
        code: boolean;
        color: string;
    };
    plain_text: string;
    href: string | null;
}

interface NotionTitle {
    id: string;
    type: 'title';
    title: NotionRichText[];
}

interface NotionRichTextProperty {
    id: string;
    type: 'rich_text';
    rich_text: NotionRichText[];
}

export interface NotionMultiSelect {
    id: string;
    name: string;
    color: string;
}

interface NotionMultiSelectProperty {
    id: string;
    type: 'multi_select';
    multi_select: NotionMultiSelect[];
}

interface NotionUrlProperty {
    id: string;
    type: 'url';
    url: string | null;
}

interface NotionCoverProperty {
    type: 'external' | 'file';
    external?: {
        url: string;
    };
    file?: {
        url: string;
        expiry_time: string;
    };
}

interface NotionDate {
    start: string;
    end: string | null;
    time_zone: string | null;
}

interface NotionDateProperty {
    id: string;
    type: 'date';
    date: NotionDate | null;
}

export interface NotionProjectProperties {
    Name: NotionTitle;
    Skills: NotionMultiSelectProperty;
    WorkPeriod: NotionDateProperty;
    Description: NotionRichTextProperty;
    Github: NotionUrlProperty;
    ImageUrl: NotionCoverProperty;
}

interface NotionProject {
    id: string;
    cover: NotionCoverProperty | null;
    properties: NotionProjectProperties;
}

interface NotionResponse {
    results: NotionProject[];
    has_more: boolean;
    next_cursor: string | null;
}

// Notion 데이터를 사용하기 쉬운 형태로 변환하는 함수들
const extractTitle = (title: NotionTitle): string => {
    return title.title[0]?.plain_text || '';
};

const extractRichText = (richText: NotionRichTextProperty): string => {
    return richText.rich_text[0]?.plain_text || '';
};

const extractSkills = (skills: NotionMultiSelectProperty): string[] => {
    return skills.multi_select.map((skill) => skill.name);
};

const extractGithubUrl = (github: NotionUrlProperty): string => {
    return github.url || '';
};

const extractWorkPeriod = (workPeriod: NotionDateProperty): string => {
    if (!workPeriod.date) return '';
    const start = workPeriod.date.start;
    const end = workPeriod.date.end || '진행중';
    return `${start} ~ ${end}`;
};

const extractImageUrl = (cover: NotionCoverProperty | null): string => {
    if (!cover) return '';
    if (cover.type === 'external' && cover.external) {
        return cover.external.url;
    }
    if (cover.type === 'file' && cover.file) {
        return cover.file.url;
    }
    return '';
};

// 변환된 프로젝트 데이터 타입
export interface ProjectData {
    id: string;
    name: string;
    description: string;
    skills: string[];
    githubUrl: string;
    workPeriod: string;
    imageUrl: string;
}

export default function Projects({ projects }: { projects: NotionResponse }) {
    const databaseList: ProjectData[] = projects.results.map((project) => ({
        id: project.id,
        name: extractTitle(project.properties.Name),
        description: extractRichText(project.properties.Description),
        skills: extractSkills(project.properties.Skills),
        githubUrl: extractGithubUrl(project.properties.Github),
        workPeriod: extractWorkPeriod(project.properties.WorkPeriod),
        imageUrl: extractImageUrl(project.cover),
    }));

    return (
        <Layout>
            <Head>
                <title>홈 - 내 포트폴리오</title>
                <meta name="description" content="개발자 포트폴리오 홈페이지" />
            </Head>

            <div className="grid grid-cols-1 gap-8 p-12 m-4 md:grid-cols-2">
                {databaseList.map((aProject) => (
                    <ProjectItem key={aProject.id} data={aProject} />
                ))}
            </div>
        </Layout>
    );
}

// 각 요청 때마다 호출
export const getServerSideProps: GetServerSideProps = async () => {
    const options = {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Notion-Version': '2022-02-22',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${TOKEN}`,
        },
        body: JSON.stringify({
            sorts: [
                {
                    property: 'Name',
                    direction: 'ascending',
                },
                {
                    property: 'Skills',
                    direction: 'ascending',
                },
                {
                    property: 'WorkPeriod',
                    direction: 'ascending',
                },
                {
                    property: 'Description',
                    direction: 'ascending',
                },
                {
                    property: 'Github',
                    direction: 'ascending',
                },
            ],
            page_size: 100,
        }),
    };

    const res = await fetch(`https://api.notion.com/v1/databases/${DATABASE_ID}/query`, options);

    const projects: NotionResponse = await res.json();

    return {
        props: { projects }, // will be passed to the page component as props
        // getStaticProps() 메소드를 사용한다면 revalidate 로 데이터 변경시 갱신가능!
        // revalidate: 1 // 데이터 변경이 있으면 갱신 1초 마다
    };
};
