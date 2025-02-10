export interface ProjectInfoInterface {
    id: string;
    title: string;
    owner: string;
    description: string;
    skill: Array<string>;
    link: string;
    github: string;
    titleImg: string;
    contents:Array<ProjectContents>;
}

interface ProjectContents {
    subject: string;
    content: Array<string | Array<string>>;
}