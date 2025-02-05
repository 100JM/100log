const WorkExperience = () => {
    return (
        <div className="w-full text-start flex flex-col gap-y-2 mb-12">
            <p className="text-3xl font-bold">Work Experience</p>
            <div className="border border-slate-300 p-4 rounded-md flex flex-col gap-y-4">
                <div className="sm:flex sm:justify-between sm:items-center">
                    <p className="text-lg font-semibold">RSOne soft</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">2023.04 ~ Present</p>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">공공기관 및 민간부분의 GIS 서비스 플랫폼 구축 기업</p>
            </div>
            <div className="border border-slate-300 p-4 rounded-md flex flex-col gap-y-4">
                <div className="sm:flex sm:justify-between sm:items-center">
                    <p className="text-lg font-semibold">지오투정보기술</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">2021.09 ~ 2022.08</p>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">O2LIVE, O2Map Web 등의 서비스를 제공하는 GIS 솔루션 기업</p>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                    <p>지방세 시가표준액 정보시스템(1,2차)</p>
                    <ul className="work-experience-ul">
                        <li>카카오, VWORLD API 지도에 건물 마커 표출 및 ON/OFF 기능</li>
                        <li>건물 마커 클릭 시 상세 정보 조회</li>
                        <li>현장조사자 로그인시 담당 현장조사건물 목록 조회 및 현장조사 제출</li>
                        <li>현장조사 설문지 관리</li>
                        <li>건물 정보 관리 및 건물 데이터 일괄 업로드</li>
                    </ul>
                </div>
            </div>
        </div>
    )
};

export default WorkExperience;