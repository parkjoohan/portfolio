export default function Certification({ theme }: { theme?: string }) {
    return (
        <>
            {/* Certification 섹션 */}
            <div className="mt-16">
                {/* Certification 제목 */}
                <div className="flex items-center mb-8">
                    <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center mr-4">
                        <span className="text-white text-lg mb-1">🎓</span>
                    </div>
                    <h1
                        className={`text-4xl font-bold ${
                            theme === 'dark' ? 'text-white' : 'text-gray-900'
                        }`}
                    >
                        Certification
                    </h1>
                </div>

                {/* 구분선 */}
                <div
                    className={`w-full h-px ${
                        theme === 'dark' ? 'bg-gray-600' : 'bg-gray-300'
                    } mb-8`}
                />

                {/* 자격증 목록 */}
                <div className="space-y-6">
                    {/* 정보처리기사 */}
                    <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                            <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2" />
                        </div>
                        <div className="flex-1">
                            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4">
                                <span
                                    className={`text-sm font-medium ${
                                        theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                                    }`}
                                >
                                    2025.09
                                </span>
                                <span
                                    className={`${
                                        theme === 'dark' ? 'text-gray-300' : 'text-gray-800'
                                    }`}
                                >
                                    <span>정보처리기사사 / 25202240323S / 2025.09.12</span>
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* 리눅스마스터 2급 */}
                    <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                            <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2" />
                        </div>
                        <div className="flex-1">
                            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4">
                                <span
                                    className={`text-sm font-medium ${
                                        theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                                    }`}
                                >
                                    2024.06
                                </span>
                                <span
                                    className={`${
                                        theme === 'dark' ? 'text-gray-300' : 'text-gray-800'
                                    }`}
                                >
                                    <span>리눅스마스터 2급 / LMS-2402-008080 / 2024.06.28</span>
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* SQLP */}
                    <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                            <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2" />
                        </div>
                        <div className="flex-1">
                            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4">
                                <span
                                    className={`text-sm font-medium ${
                                        theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                                    }`}
                                >
                                    2024.04
                                </span>
                                <span
                                    className={`${
                                        theme === 'dark' ? 'text-gray-300' : 'text-gray-800'
                                    }`}
                                >
                                    <span>SQLP/ SQLD-052011934 / 2024.04.05</span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
