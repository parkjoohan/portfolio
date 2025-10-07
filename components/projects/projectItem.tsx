import { ProjectData } from '@/pages/projects';
import Image from 'next/image';

export default function ProjectItem({ data }: { data: ProjectData }) {
    const title = data.name;
    const github = data.githubUrl;
    const description = data.description;
    const skills = data.skills;
    const start = data.workPeriod.split('~')[0];
    const end = data.workPeriod.split('~')[1];
    const imageUrl = data.imageUrl;

    const calculatedPeriod = (start: string, end: string) => {
        // var startDate = new Date(
        //     startDateStringArray[0],
        //     startDateStringArray[1],
        //     startDateStringArray[2]
        // );
        // var endDate = new Date(endDateStringArray[0], endDateStringArray[1], endDateStringArray[2]);

        // const diffInMs = Math.abs(endDate - startDate);
        const diffInMs = 0;
        const result = diffInMs / (1000 * 60 * 60 * 24);

        return result;
    };

    return (
        <div className="project-card flex justify-between">
            <Image
                className="rounded-t-xl"
                src={imageUrl || ''}
                alt="cover image"
                width={400}
                height={150}
                style={{ objectFit: 'cover', width: '100%', height: '70%' }}
                quality={100}
                priority={false}
            />

            <div className="p-4 flex flex-col">
                <h1 className="text-2xl font-bold">{title}</h1>
                <h3 className="mt-4 text-xl">{description}</h3>
                <a href={github || '#'}>깃허브 바로가기</a>
                <p className="my-1 ">
                    작업기간 : {start} ~ {end} ({calculatedPeriod(start || '', end || '')}일)
                </p>
                <div className="flex items-start mt-2">
                    {skills.map((aSkill: string) => (
                        <h1
                            className="px-2 py-1 mr-2 rounded-md bg-sky-200 dark:bg-sky-700 w-30"
                            key={aSkill}
                        >
                            {aSkill}
                        </h1>
                    ))}
                </div>
            </div>
        </div>
    );
}
