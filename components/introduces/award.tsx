export default function Award({ theme }: { theme?: string }) {
    return (
        <>
            {/* Awards 섹션 */}
            <div className="mt-16">
                {/* Awards 제목 */}
                <div className="flex items-center mb-8">
                    <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center mr-4">
                        <span className="text-white text-lg mb-1">🏆</span>
                    </div>
                    <h1
                        className={`text-4xl font-bold ${
                            theme === 'dark' ? 'text-white' : 'text-gray-900'
                        }`}
                    >
                        Awards
                    </h1>
                </div>

                {/* 구분선 */}
                <div
                    className={`w-full h-px ${
                        theme === 'dark' ? 'bg-gray-600' : 'bg-gray-300'
                    } mb-8`}
                ></div>

                {/* 수상 목록 */}
                <div className="space-y-6">
                    {/* 첫 번째 수상 */}
                    <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                            <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2"></div>
                        </div>
                        <div className="flex-1">
                            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4">
                                <span
                                    className={`text-sm font-medium ${
                                        theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                                    }`}
                                >
                                    2022.04.08
                                </span>
                                <span
                                    className={`font-bold ${
                                        theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
                                    }`}
                                >
                                    삼성청년SW아카데미 특화 프로젝트 우수팀 (빅데이터 추천 / 지역
                                    1등)
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* 두 번째 수상 */}
                    <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                            <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2"></div>
                        </div>
                        <div className="flex-1">
                            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4">
                                <span
                                    className={`text-sm font-medium ${
                                        theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                                    }`}
                                >
                                    2018.05.31
                                </span>
                                <span
                                    className={`${
                                        theme === 'dark' ? 'text-gray-300' : 'text-gray-800'
                                    }`}
                                >
                                    2018년 IT융합학부 졸업작품 경진대회 (최우수)
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
