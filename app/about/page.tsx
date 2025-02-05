import Profile from "../components/about/Profile";
import WorkExperience from "../components/about/WorkExperience";

export default function AboutPage() {

    return (
        <main className="max-w-[600px] px-6 m-auto flex justify-center items-center flex-col break-keep break-words sm:px-0 post-contents">
            <Profile />
            <div className="w-full text-start flex flex-col gap-y-2 mb-12">
                <p className="text-3xl font-bold">About</p>
                <p className="whitespace-normal sm:whitespace-pre-wrap text-gray-600 dark:text-gray-400 text-sm">
                {`최신 트렌드에 대해 빠르게 이해하고 적응할 수 있습니다.\n무엇이든 본인이 사용하는 서비스라는 마음으로 임합니다.\nJavascript 테크닉에 관심을 갖고 공부하고 있습니다.`}
                </p>
            </div>
            <div className="w-full text-start flex flex-col gap-y-2 mb-12">
                <p className="text-3xl font-bold">Skill</p>
                <div className="flex items-center justify-start flex-wrap gap-2 text-sm text-white">
                    <p className="bg-slate-400 p-1 rounded-md">Javascript</p>
                    <p className="bg-slate-400 p-1 rounded-md">Typescript</p>
                    <p className="bg-slate-400 p-1 rounded-md">Next.js</p>
                    <p className="bg-slate-400 p-1 rounded-md">React.js</p>
                    <p className="bg-slate-400 p-1 rounded-md">jQuery</p>
                </div>
            </div>
            <WorkExperience />
        </main>
    );
}
