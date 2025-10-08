export default function Experience({ theme }: { theme?: string }) {
    return (
        <>
            {/* Experience 섹션 */}
            <div className="flex items-center mb-8">
                <div className="w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white text-lg mb-1">💪</span>
                </div>
                <h1
                    className={`text-4xl font-bold ${
                        theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}
                >
                    Experience
                </h1>
            </div>

            {/* 구분선 */}
            <div
                className={`w-full h-px ${theme === 'dark' ? 'bg-gray-600' : 'bg-gray-300'} mb-8`}
            />

            {/* 경력 목록 */}
            <div className="space-y-8">
                {/* 삼성청년SW아카데미 */}
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
                        삼성청년SW아카데미 (SSAFY)
                    </h2>
                    <p
                        className={`text-sm mb-4 ${
                            theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                        }`}
                    >
                        2021.07.08 ~ 2022.05.27
                    </p>
                    <ul className="space-y-2">
                        <li
                            className={`flex items-start ${
                                theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                            }`}
                        >
                            <span className="w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            SSAFY 6기 활동
                        </li>
                        <li
                            className={`flex items-start ${
                                theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                            }`}
                        >
                            <span className="w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            삼성전자에서 진행하는 Web 개발자 양성 교육 과정 (BackEnd/FrontEnd)
                        </li>
                        <li
                            className={`flex items-start ${
                                theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                            }`}
                        >
                            <span className="w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            1년 과정 / 교육 진행, 총 4개의 프로젝트 진행
                        </li>
                        <li
                            className={`flex items-start ${
                                theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                            }`}
                        >
                            <span className="w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            웹 교육과 동시에 자기 주도형 프로젝트 과정
                        </li>
                        <li
                            className={`flex items-start ml-6 ${
                                theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                            }`}
                        >
                            <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            페어 프로그래밍, 팀 프로젝트를 통한 협업 경험
                        </li>
                        <li
                            className={`flex items-start ${
                                theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                            }`}
                        >
                            <span className="w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            Java, Javascript, Typescript, Spring, JPA, React.js, Next.js, JIRA 등
                        </li>
                    </ul>
                </div>

                {/* 육군 장교 */}
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
                        육군 장교
                    </h2>
                    <p
                        className={`text-sm mb-4 ${
                            theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                        }`}
                    >
                        2019.03.01 ~ 2021.06.30
                    </p>
                    <ul className="space-y-2">
                        <li
                            className={`flex items-start ${
                                theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                            }`}
                        >
                            <span className="w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            철원 GOP 통신소대장 근무
                        </li>
                        <li
                            className={`flex items-start ${
                                theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                            }`}
                        >
                            <span className="w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            유,무선 / 체계 (Linux) 업무 수행
                        </li>
                        <li
                            className={`flex items-start ${
                                theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                            }`}
                        >
                            <span className="w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            병력 관리 및 임무 지시 등을 통한 리더십 함양
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}
