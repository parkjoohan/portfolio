import Link from 'next/link';
import Animation from './animation';
import Image from 'next/image';

export default function Hero({ theme }: { theme?: string }) {
    return (
        <>
            <div className="">
                <Animation />
            </div>
            <div className="ml-20">
                <h1
                    className={`text-4xl font-bold ${
                        theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}
                >
                    안녕하세요. 박주한입니다.
                </h1>
                <div className="mt-8 space-y-4">
                    <div className="flex items-center space-x-3">
                        <div className="flex-shrink-0 w-6 h-6 bg-indigo-500 rounded-full flex items-center justify-center">
                            <span className="text-white text-sm font-bold">1</span>
                        </div>
                        <p
                            className={`text-lg leading-relaxed ${
                                theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                            }`}
                        >
                            안녕하세요! <b>포기하지 않는 개발자 박주한</b>입니다.
                        </p>
                    </div>

                    <div className="flex items-center space-x-3">
                        <div className="flex-shrink-0 w-6 h-6 bg-indigo-500 rounded-full flex items-center justify-center">
                            <span className="text-white text-sm font-bold">2</span>
                        </div>
                        <p
                            className={`text-lg leading-relaxed ${
                                theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                            }`}
                        >
                            <b>항상 사용자가 편하게 사용</b>하는 플랫폼을 개발하고자 노력합니다.
                        </p>
                    </div>

                    <div className="flex items-center space-x-3">
                        <div className="flex-shrink-0 w-6 h-6 bg-indigo-500 rounded-full flex items-center justify-center">
                            <span className="text-white text-sm font-bold">3</span>
                        </div>
                        <p
                            className={`text-lg leading-relaxed ${
                                theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                            }`}
                        >
                            새로운 것을 기획하고 효율적인 방법을 탐구하여 더 발전된 개발을 할 수
                            있도록 노력합니다.
                        </p>
                    </div>

                    <div className="flex items-center space-x-3">
                        <div className="flex-shrink-0 w-6 h-6 bg-indigo-500 rounded-full flex items-center justify-center">
                            <span className="text-white text-sm font-bold">4</span>
                        </div>
                        <p
                            className={`text-lg leading-relaxed ${
                                theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                            }`}
                        >
                            여러 팀원과 <b>적극적으로 소통하고 협업</b>하며 개발하는 것을
                            좋아합니다.
                        </p>
                    </div>

                    <div className="flex items-center space-x-3">
                        <div className="flex-shrink-0 w-6 h-6 bg-indigo-500 rounded-full flex items-center justify-center">
                            <span className="text-white text-sm font-bold">5</span>
                        </div>
                        <p
                            className={`text-lg leading-relaxed ${
                                theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                            }`}
                        >
                            한번 시작한 일은 끝까지! 해결될 때까지 포기하지 않습니다!
                        </p>
                    </div>
                </div>
                <div className="mt-5">
                    <Link
                        href="/projects"
                        className={`inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg`}
                    >
                        프로젝트 보러가기
                    </Link>
                </div>
            </div>
        </>
    );
}
