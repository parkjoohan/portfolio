export default function Work({ theme }: { theme?: string }) {
    return (
        <>
            {/* 직장 경력 섹션 */}
            <div className="flex items-center mb-8">
                <div className="w-8 h-8 bg-red-400 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white text-lg mb-2">💼</span>
                </div>
                <h1
                    className={`text-4xl font-bold ${
                        theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}
                >
                    Work Experience
                </h1>
            </div>

            {/* 구분선 */}
            <div
                className={`w-full h-px ${theme === 'dark' ? 'bg-gray-600' : 'bg-gray-300'} mb-8`}
            />

            {/* 직장 경력 목록 */}
            <div className="space-y-8 mb-16">
                {/* 인젠트 */}
                <div
                    className={`p-6 rounded-lg border-l-4 border-indigo-500 ${
                        theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'
                    }`}
                >
                    <h2
                        className={`text-2xl font-bold mb-2 ${
                            theme === 'dark' ? 'text-white' : 'text-gray-900'
                        }`}
                    >
                        인젠트
                    </h2>
                    <p
                        className={`text-sm mb-4 ${
                            theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                        }`}
                    >
                        2023.04.03 ~
                    </p>
                    <ul className="space-y-2">
                        <li
                            className={`flex items-start ${
                                theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                            }`}
                        >
                            <span className="w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            eCross R&D / 매니저
                        </li>
                        <li
                            className={`flex items-start ${
                                theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                            }`}
                        >
                            <span className="w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            자사 EAI 프로그램(eCross) 개발 및 설치
                        </li>
                        <li
                            className={`flex items-start ${
                                theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                            }`}
                        >
                            <span className="w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            감사원 프로젝트 진행 (차세대 내부 EAI 프로젝트)
                        </li>
                        <li
                            className={`flex items-start ${
                                theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                            }`}
                        >
                            <span className="w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            자사 산출물 프로젝트 관리 시스템 개발
                        </li>
                    </ul>
                </div>

                {/* 감사원 프로젝트 */}
                <div
                    className={`p-6 rounded-lg border-l-4 border-indigo-500 ${
                        theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'
                    }`}
                >
                    <p
                        className={`text-lg font-semibold mb-4 ${
                            theme === 'dark' ? 'text-indigo-400' : 'text-indigo-600'
                        }`}
                    >
                        [감사원 프로젝트 - 차세대 내부 EAI 프로젝트]
                    </p>
                    <p
                        className={`text-sm mb-4 ${
                            theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                        }`}
                    >
                        2023.07 ~ 2023.12 (약 6개월)
                    </p>
                    <p
                        className={`text-sm mb-4 ${
                            theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                        }`}
                    >
                        주요 역할: 감사원 시스템 내 자사 EAI 프로그램 설치 및 개발
                    </p>
                    <p
                        className={`text-sm mb-4 ${
                            theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                        }`}
                    >
                        기술스택: JAVA, SpringBoot, JSP, HTML, Oracle
                    </p>
                    <ul className="space-y-2">
                        <li
                            className={`flex items-start ${
                                theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                            }`}
                        >
                            <span className="w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            감사원 차세대 시스템 기획 방향에 맞춰 자사 EAI 솔루션의 기능을 요구사항
                            기반으로 커스터마이징 및 신규 모듈 개발 수행
                        </li>
                        <li
                            className={`flex items-start ${
                                theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                            }`}
                        >
                            <span className="w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            감사원의 공공감사시스템과 행정공공데이터센터 간의 이기종 시스템 간
                            데이터 연계 구조 설계 및 구현
                        </li>
                        <li
                            className={`flex items-start ${
                                theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                            }`}
                        >
                            <span className="w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            수백만 건 규모의 대용량 감사 데이터를 실시간/예약 통신 구조로 처리할 수
                            있도록 스케줄러 및 트리거 기반 연동 체계 구축
                        </li>
                        <li
                            className={`flex items-start ${
                                theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                            }`}
                        >
                            <span className="w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            데이터 무결성과 안정성을 고려한 DB 연계, 전송 로직, 에러 핸들링
                        </li>
                    </ul>
                </div>

                {/* eCross V5 개발 */}
                <div
                    className={`p-6 rounded-lg border-l-4 border-indigo-500 ${
                        theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'
                    }`}
                >
                    <p
                        className={`text-lg font-semibold mb-4 ${
                            theme === 'dark' ? 'text-indigo-400' : 'text-indigo-600'
                        }`}
                    >
                        [자사 EAI 프로그램 (eCross) 차세대 (V5) 개발]
                    </p>
                    <p
                        className={`text-sm mb-4 ${
                            theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                        }`}
                    >
                        2024.04 ~ (진행중)
                    </p>
                    <p
                        className={`text-sm mb-4 ${
                            theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                        }`}
                    >
                        주요 역할: 프론트엔드&백엔드 담당
                    </p>
                    <p
                        className={`text-sm mb-4 ${
                            theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                        }`}
                    >
                        기술스택: Typescript, React, JAVA, SpringBoot, JPA, Oracle, Git
                    </p>
                    <ul className="space-y-2">
                        <li
                            className={`flex items-start ${
                                theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                            }`}
                        >
                            <span className="w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            레거시 프론트엔드(JSP+JavaScript)기반 화면을 React+TypeScript로 전환
                        </li>
                        <li
                            className={`flex items-start ${
                                theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                            }`}
                        >
                            <span className="w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            컴포넌트 기반 아키텍처 설계 및 상태 관리 구조 구축 (Zustand 사용)
                        </li>
                        <li
                            className={`flex items-start ${
                                theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                            }`}
                        >
                            <span className="w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            재사용 가능한 UI 컴포넌트 및 Form 관리 모듈 개발로 개발 효율성 향상
                        </li>
                        <li
                            className={`flex items-start ${
                                theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                            }`}
                        >
                            <span className="w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            React 및 Zustand 적용을 통해 기존 시스템 대비 페이지 렌더링 속도 약 30%
                            개선
                        </li>
                        <li
                            className={`flex items-start ${
                                theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                            }`}
                        >
                            <span className="w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            UX 개선 제안 및 적용: 모바일 반응형 레이아웃 적용, 사용자 피드백 기반
                            개선
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}
