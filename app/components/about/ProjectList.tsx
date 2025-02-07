'use client';

import ItemDiv from "./ItemDiv"
import { projects } from "@/app/utils/projects"
import { ProjectInfoInterface } from "@/type/ProjectInfoType";
import useModal from "@/app/store/useModal";


const ProjectList = () => {
    const { setModalOpen, setProjectInfo } = useModal();

    const handleClickProject = (info: ProjectInfoInterface) => {
        setProjectInfo(info);
        setModalOpen(true);
    };

    return (
        <ItemDiv
                title='Projects'
                contents={
                    <div className="grid grid-flow-row gap-2 md:grid-cols-2">
                        {
                            projects.map((p) =>
                                <button key={p.id} className="border border-slate-300 p-4 rounded-md flex flex-col min-h-36 md:min-h-44 justify-between" onClick={() => handleClickProject(p)}>
                                    <div className="flex flex-col items-start justify-center space-y-1 w-full">
                                        <div className="w-full flex items-center justify-between"><p className="font-semibold">{p.title}</p><i className="ri-external-link-line"></i></div>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">{p.owner}</p>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">{p.description}</p>
                                    </div>
                                    <div className="flex items-center justify-start flex-wrap gap-1.5 text-sm text-white mt-2">
                                        {p.skill.map((s) =>
                                            <p key={s} className="bg-slate-400 px-1 rounded-md">{s}</p>
                                        )}
                                    </div>
                                </button>
                            )
                        }
                    </div>
                }
            />
    )
};

export default ProjectList;