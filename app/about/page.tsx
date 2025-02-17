import Profile from "../components/about/Profile";
import WorkExperience from "../components/about/WorkExperience";
import ProjectList from "../components/about/ProjectList";
import ItemDiv from "../components/about/ItemDiv";
import ProjectInfo from "../components/about/ProjectInfo";

export default function AboutPage() {

    return (
        <main className="max-w-[670px] px-6 m-auto flex justify-center items-center flex-col break-keep break-words post-contents md:px-0 animate-fadeIn">
                <Profile />
                <ItemDiv
                    title='About'
                    contents={<p className="whitespace-normal xs:whitespace-pre-wrap text-gray-600 dark:text-gray-400 text-sm">{`최신 트렌드에 대해 빠르게 이해하고 적응할 수 있습니다.\n무엇이든 본인이 사용하는 서비스라는 마음으로 임합니다.\nJavascript 테크닉에 관심을 갖고 공부하고 있습니다.`}</p>}
                />
                <ItemDiv
                    title='Skill'
                    contents={
                        <div className="flex items-center justify-start flex-wrap gap-2 text-sm text-white">
                            <p className="bg-slate-400 p-1 rounded-md">Javascript</p>
                            <p className="bg-slate-400 p-1 rounded-md">Typescript</p>
                            <p className="bg-slate-400 p-1 rounded-md">Next.js</p>
                            <p className="bg-slate-400 p-1 rounded-md">React.js</p>
                            <p className="bg-slate-400 p-1 rounded-md">jQuery</p>
                            <p className="bg-slate-400 p-1 rounded-md">SQL(PostgreSQL, MySQL)</p>
                        </div>
                    }
                />
                <WorkExperience />
                <ItemDiv
                    title='Education'
                    contents={
                        <div className="border border-slate-300 p-4 rounded-md flex flex-col gap-y-3">
                            <div className="sm:flex sm:justify-between sm:items-center">
                                <p className="text-lg font-semibold">원광대학교</p>
                                <p className="text-sm text-gray-600 dark:text-gray-400">2011 ~ 2019</p>
                            </div>
                            <p className="text-sm text-gray-600 dark:text-gray-400">경영학 학사</p>
                        </div>
                    }
                />
                <ProjectList />
                <ProjectInfo />
            </main>
    );
}
