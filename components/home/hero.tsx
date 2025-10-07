import Link from 'next/link';
import Animation from './animation';

export default function Hero() {
    return (
        <>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                <Animation />
            </div>
            <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                    안녕하세요. 박주한입니다.
                </h1>
                <p className="mb-8 leading-relaxed">
                    대법원장은 국회의 동의를 얻어 대통령이 임명한다. 헌법에 의하여 체결·공포된
                    조약과 일반적으로 승인된 국제법규는 국내법과 같은 효력을 가진다. 국회의원은
                    국회에서 직무상 행한 발언과 표결에 관하여 국회외에서 책임을 지지 아니한다.
                    국회의원의 선거구와 비례대표제 기타 선거에 관한 사항은 법률로 정한다. 선거운동은
                    각급 선거관리위원회의 관리하에 법률이 정하는 범위안에서 하되, 균등한 기회가
                    보장되어야 한다.
                </p>
                <div className="flex justify-center">
                    <Link href="/projects" className="btn-project">
                        프로젝트 보러가기
                    </Link>
                </div>
            </div>
        </>
    );
}
