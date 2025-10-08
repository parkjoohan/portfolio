import Link from 'next/link';
import DarkModeToggleButton from './darkModeToggleButton';
import { useTheme } from 'next-themes';

export default function Header() {
    const { theme } = useTheme();

    return (
        <>
            <header className="text-gray-600 dark:text-gray-300 body-font">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <Link
                        href="/"
                        className={`flex title-font text-gray-900 font-bold items-center mb-4 md:mb-0 ${
                            theme === 'dark' ? 'text-white' : 'hover:text-gray-900'
                        }`}
                    >
                        <p className="ml-3 text-xl">박주한 포트폴리오</p>
                    </Link>

                    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                        <Link
                            href="/"
                            className={`mr-5  ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}
                        >
                            홈
                        </Link>

                        <Link
                            href="/introduces"
                            className={`mr-5  ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}
                        >
                            소개
                        </Link>

                        <Link
                            href="/projects"
                            className={`mr-5 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}
                        >
                            프로젝트
                        </Link>

                        <a
                            href="https://open.kakao.com/o/sUkZgJVh"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`mr-5 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}
                        >
                            연락하기
                        </a>
                    </nav>
                    {/* 다크모드 토글 버튼 작업해야함 */}
                    <DarkModeToggleButton />
                </div>
            </header>
        </>
    );
}
