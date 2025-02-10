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
                    '모바일 최적화(반응형 디자인)',
                ]
            },
        ]
    },
];