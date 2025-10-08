import { ProjectData } from '@/pages/projects';
import Image from 'next/image';

export default function ProjectItem({ data, theme }: { data: ProjectData; theme?: string }) {
    const title = data.name;
    const github = data.githubUrl;
    const description = data.description;
    const skills = data.skills;
    const start = data.workPeriod.split('~')[0];
    const end = data.workPeriod.split('~')[1];
    const imageUrl = data.imageUrl;

    const calculatedPeriod = (start: string, end: string) => {
        const startDateStringArray = start.split('-');
        const endDateStringArray = end.split('-');

        const startDate = new Date(
            Number(startDateStringArray[0]),
            Number(startDateStringArray[1]),
            Number(startDateStringArray[2])
        );
        const endDate = new Date(
            Number(endDateStringArray[0]),
            Number(endDateStringArray[1]),
            Number(endDateStringArray[2])
        );
        const diffInMs = Math.abs(endDate.getTime() - startDate.getTime());
        const result = diffInMs / (1000 * 60 * 60 * 24);
        return result;
    };

    const tagColorClasses = [
        'bg-sky-200 dark:bg-sky-300/80',
        'bg-rose-200 dark:bg-rose-300/80',
        'bg-emerald-200 dark:bg-emerald-300/80',
        'bg-amber-200 dark:bg-amber-300/80',
        'bg-indigo-200 dark:bg-indigo-300/80',
        'bg-fuchsia-200 dark:bg-fuchsia-300/80',
        'bg-cyan-200 dark:bg-cyan-300/80',
        'bg-lime-200 dark:bg-lime-300/80',
        'bg-violet-200 dark:bg-violet-300/80',
        'bg-orange-200 dark:bg-orange-300/80',
    ];

    const getTagColorClass = (text: string) => {
        let hash = 0;
        for (let i = 0; i < text.length; i++) {
            hash = (hash << 5) - hash + text.charCodeAt(i);
            hash |= 0;
        }
        const idx = Math.abs(hash) % tagColorClasses.length;
        return tagColorClasses[idx];
    };
    return (
        <div
            className={`flex m-3 rounded-xl w-full
          transition duration-300 transform border ${
              theme === 'dark'
                  ? 'border-gray-200/50 hover:shadow-gray-400/40 hover:scale-105 hover:shadow-lg'
                  : 'border-gray-300 hover:scale-105 hover:shadow-lg'
          }`}
        >
            <Image
                className="rounded-xl"
                src={imageUrl || ''}
                alt="cover image"
                width={200}
                height={200}
                style={{ objectFit: 'cover', width: '400px', height: '250px' }}
                quality={100}
                priority={false}
            />

            <div className="p-4 flex flex-col justify-center">
                <h1 className="text-3xl font-bold">{title}</h1>
                <h3 className="mt-4 text-xl">{description}</h3>
                <p className="my-1 ">
                    작업기간 : {start} ~ {end} ({calculatedPeriod(start || '', end || '')}일)
                </p>
                <div className="flex flex-wrap items-start mt-2">
                    {skills.map((aSkill: string) => (
                        <h1
                            className={`px-2 py-1 mr-2 rounded-md w-auto [min-inline-size:fit-content] mb-1 ${getTagColorClass(
                                aSkill
                            )}`}
                            key={aSkill}
                        >
                            {aSkill}
                        </h1>
                    ))}
                </div>
            </div>
            <div className="p-4 flex flex-col ml-auto">
                <Image
                    src={`${theme === 'dark' ? '/github-mark-white.png' : '/github-mark.png'}`}
                    onClick={() => window.open(github || '#', '_blank')}
                    alt="github icon"
                    width={40}
                    height={40}
                    className="cursor-pointer"
                />
            </div>
        </div>
    );
}
