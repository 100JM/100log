const WorkExperience = () => {
    return (
        <div className="w-full text-start flex flex-col gap-y-2 mb-12">
            <p className="text-2xl font-bold sm:text-3xl">Work Experience</p>
            <div className="border border-slate-300 p-4 rounded-md flex flex-col gap-y-3">
                <div className="sm:flex sm:justify-between sm:items-center">
                    <p className="text-lg font-semibold">RSOne soft</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">2023.04 ~ Present</p>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">공공기관 및 민간부분의 GIS 서비스 플랫폼 구축 기업</p>
                <div className="text-sm">
                    <p className="font-semibold leading-6">환경공단 유역하수도 통합정보플랫폼</p>
                    <ul className="work-experience-ul text-gray-600 dark:text-gray-400">
                        <li>관제시스템 초기모델(프로토타입) 개발</li>
                    </ul>
                </div>
                <div className="text-sm">
                    <p className="font-semibold leading-6">충남 공간정보플랫폼</p>
                    <ul className="work-experience-ul text-gray-600 dark:text-gray-400">
                        <li>전체적인 로직 개선</li>
                        <li>VWORLD API를 활용한 지도(레이어) 서비스 제공</li>
                        <li>부동산 실거래가 데이터 조회</li>
                        <li>TAGO API를 활용한 실시간 버스 정보 조회</li>
                        <li>파일 데이터를 읽어 지도에 시각화(레이어) & 시각화된 레이어 스타일 변경</li>
                    </ul>
                </div>
            </div>
            <div className="border border-slate-300 p-4 rounded-md flex flex-col gap-y-3">
                <div className="sm:flex sm:justify-between sm:items-center">
                    <p className="text-lg font-semibold">지오투정보기술</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">2021.09 ~ 2022.08</p>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">O2LIVE, O2Map Web 등의 서비스를 제공하는 GIS 솔루션 기업</p>
                <div className="text-sm">
                    <p className="font-semibold leading-6">지방세 시가표준액 정보시스템(1,2차)</p>
                    <ul className="work-experience-ul text-gray-600 dark:text-gray-400">
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