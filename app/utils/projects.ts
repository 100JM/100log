export const projects = [
    {
        id: 'P001',
        title: '100LOG: 개발 블로그',
        owner: '개인 프로젝트',
        description: 'Next.js로 직접 만든 블로그',
        skill: ['Next.js', 'MDX', 'Tailwind css', 'Giscus', 'Axios', 'SWR', 'Zustand'],
        link: 'https://100-log.vercel.app',
        github: 'https://github.com/100JM/100log',
        titleImg: '/project_images/100log_title.png',
        contents: [
            {
                subject: '개요',
                content: [
                    'Next.js를 이용한 나만의 블로그 개발',
                    '모바일 최적화(반응형 디자인)',
                ]
            },
            {
                subject: 'Stack',
                content: ['Next.js(14)', 'Tailwind css', 'MUI', 'MDX', 'SWR', 'Zustand', 'Giscus']
            },
            {
                subject: '기능',
                content: [
                    '전체 & 카테고리별 게시글 목록',
                    'image-/project_images/100log_img.png',
                    '게시글 상세 페이지',
                    '목차(사이드 바)',
                    '현 위치 날씨 정보',
                    '라이트 & 다크 모드',
                    ['image-/project_images/100log_img_2.png', 'image-/project_images/100log_img_3.png',],
                ]
            },
        ]
    },
    {
        id: 'P002',
        title: '@100jm/image-resizer',
        owner: 'NPM 라이브러리',
        description: '심플한 이미지 리사이징 라이브러리',
        skill: ['JavaScript', 'TypeScript', 'canvas', 'Node.js'],
        link: 'https://www.npmjs.com/package/@100jm/image-resizer',
        github: 'https://github.com/100JM/image-resizer',
        titleImg: '/project_images/img_resizer_title.png',
        contents: [
            {
                subject: '개요',
                content: [
                    '심플한 이미지 리사이징 라이브러리',
                    'TypeScript 지원',
                    'CJS & ESM 모듈 모두 지원',
                    '브라우저 & Node.js 환경 자동 감지, 모두 지원',
                    '가벼운 의존성',
                ]
            },
            {
                subject: 'Stack',
                content: ['JavaScript', 'TypeScript', 'canvas', 'Node.js']
            },
            {
                subject: '기능',
                content: [
                    '업로드 한 이미지(File | Buffer) 크기 리사이징',
                    'max width, max height, 퀄리티, 이미지 스무딩 옵션',
                    'blob 타입으로 반환',
                    'image-/project_images/img_resizer_1.png',
                    'image-/project_images/img_resizer_2.png',
                    // ['image-/project_images/img_resizer_1.png', 'image-/project_images/img_resizer_2.png',],
                ]
            },
        ]
    },
    {
        id: 'P003',
        title: 'TO-DO CALENDAR: 일정 관리 캘린더',
        owner: '개인 프로젝트',
        description: '개인 일정 관리 캘린더 웹 애플리케이션',
        skill: ['Next.js', 'MUI', 'Tailwind css', 'Fullcalendar', 'SWR', 'Zustand'],
        link: 'https://100jm-to-do-calendar.vercel.app',
        github: 'https://github.com/100JM/to-do-calendar',
        titleImg: '/project_images/todocalendar_title.png',
        contents: [
            {
                subject: '개요',
                content: [
                    '개인 일정 관리 캘린더 웹 애플리케이션',
                    '카카오 & 구글 로그인 지원',
                    '카카오 & open street map 주소 검색',
                    'Mock API를 사용해 모의 데이터 흐름 구현',
                    '모바일 최적화(반응형 디자인)',
                ]
            },
            {
                subject: 'Stack',
                content: ['Next.js(14)', 'Tailwind css', 'MUI', 'SWR', 'Zustand', 'NextAuth.js', 'FullCalendar']
            },
            {
                subject: '기능',
                content: [
                    '카카오 or 구글 계정으로 로그인',
                    '캘린더 기반 화면, 사용자 별 등록된 일정 정보',
                    ['image-/project_images/todocalendar_img.gif', 'image-/project_images/todocalendar_img_2.gif',],
                    '일정 등록, 수정, 삭제',
                    '전체 일정 & 중요 일정 목록',
                    '일정 검색',
                    ['image-/project_images/todocalendar_img_3.gif', 'image-/project_images/todocalendar_img_4.gif',],
                ]
            },
        ]
    },
];