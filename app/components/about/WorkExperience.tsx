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
                        <li>관제시스템 초기모델(React 기반 UI 설계 및 컴포넌트) 개발</li>
                        <li>관리자 시스템 연계모듈 관리 기능 개발</li>
                        <li>Spring boot batch, 스케줄러를 이용해 DB to DB, 공공API to DB 데이터 연계</li>
                        <li>연계 데이터 정보 관리 페이지 & 연계 결과 통계 데이터 시각화 작업</li>
                    </ul>
                    <p className="my-4 ml-2 text-gray-600 dark:text-gray-400">
                        관제 시스템 초기 모델을 설계 및 구현하여 개발 초기 단계 시스템 구축.<br />
                        데이터 연계 모듈 및 관리자 시스템 개발을 통해 외부 데이터와의 실시간 연동 기능 구축 및 관리 효율 향상.<br />
                        데이터 연 성공 및 오류 현황을 Chart.js 기반으로 시각화하여 비기술 담당자의 이해도 제고.<br />
                    </p>
                    <p className="ml-2 mb-4">사용 기술 : Next.js, Zustand, TypeScript, Tailwind CSS, Chart.js, zod, React Query</p>
                </div>
                <div className="text-sm">
                    <p className="font-semibold leading-6">충남 공간정보플랫폼</p>
                    <ul className="work-experience-ul text-gray-600 dark:text-gray-400">
                        <li>전체적인 로직 개선</li>
                        <li>VWORLD API & 공공데이터포털 API를 활용한 지도(레이어) 서비스 제공</li>
                        <li>부동산 실거래가 데이터 조회</li>
                        <li>TAGO API를 활용한 실시간 버스 정보 조회</li>
                        <li>파일 데이터를 읽어 지도에 시각화(레이어) & 시각화된 레이어 스타일 변경</li>
                    </ul>
                    <p className="my-4 ml-2 text-gray-600 dark:text-gray-400">
                        기존 레이어 렌더링 방식 개선(레이어 전체 발행 후 필요시에 따라 visible on/off ➡️ 항목 on/off 시 해당 레이어 발행 및 삭제)으로 초기 렌더링 단축.
                    </p>
                    <p className="ml-2">사용 기술 : JavaScript, jQuery, Spring boot, PostgreSQL</p>
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
                        <li>오피스텔 가격 산정 기준 데이터를 시각화 및 관리</li>
                        <li>지도 기반 정보 탐색 기능 구현 (OpenLayers 활용)</li>
                        <li>GIS 기반 시세 데이터 관리 시스템 구축</li>
                        <li>상업용 건물, 옥외 시설 등 신규 항목 통합</li>
                        <li>Spring Boot와 PostgreSQL 연동을 통한 대용량 데이터 처리</li>
                    </ul>
                    <p className="mt-4 ml-2">사용 기술 : JavaScript, jQuery, Spring boot, PostgreSQL</p>
                </div>
            </div>
        </div>
    )
};

export default WorkExperience;