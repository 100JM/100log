'use client';

import useModal from "@/app/store/useModal";
// import Zoom from 'react-medium-image-zoom'
// import 'react-medium-image-zoom/dist/styles.css';

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"

const ProjectInfo = () => {
    const { modalOpen, setModalOpen, projectInfo } = useModal();

    const handlePointerDownOutside = (e: unknown) => {
        const event = e as PointerEvent;
        if (!(event.target as HTMLElement).closest(".zoom-overlay")) {
            event.preventDefault();
        }
    };
    // dialog: mui로 변경
    return (
        <Dialog open={modalOpen} onOpenChange={setModalOpen}>
            <DialogContent className="project-info-dialog sm:min-w-[600px] max-h-[80vh] overflow-hidden flex flex-col" onPointerDownOutside={(e) => handlePointerDownOutside(e)}>
                <DialogHeader>
                    <DialogTitle>{projectInfo?.title}</DialogTitle>
                    {
                        (projectInfo?.github || projectInfo?.link) &&
                        <div className="flex justify-center items-center gap-x-2 pt-2">
                            {projectInfo.link &&
                                <a className="border border-slate-300 px-2 py-1 rounded-md min-w-40 flex items-center justify-center" href={projectInfo?.link} target="_blank">
                                    <i className="ri-global-line mr-1"></i>
                                    <p>Link to website</p>
                                </a>
                            }
                            {projectInfo.github &&
                                <a className="border border-slate-300 px-2 py-1 rounded-md min-w-40 flex items-center justify-center" href={projectInfo?.github} target="_blank">
                                    <i className="ri-github-fill mr-1"></i>
                                    <p>Git Repository</p>
                                </a>
                            }
                        </div>
                    }
                </DialogHeader>
                <div className="overflow-y-auto">
                    <img
                        src={projectInfo?.titleImg}
                        alt="project_title_img"
                        className="border rounded-md"
                    />
                    {/* <Zoom zoomMargin={140}>
                        <img
                            src={projectInfo?.titleImg}
                            alt="project_title_img"
                            className="border rounded-md"
                        />
                    </Zoom> */}
                </div>
            </DialogContent>
        </Dialog>

    )
};

export default ProjectInfo;