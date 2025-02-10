'use client';

import useModal from "@/app/store/useModal";
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css';

import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';

const ProjectInfo = () => {
    const { modalOpen, setModalOpen, projectInfo } = useModal();

    return (
        <Dialog
            open={modalOpen}
            onClose={() => setModalOpen(false)}
            className="project-info-dialog"
            sx={{
                "& .MuiDialog-paper": {
                    maxHeight: "90vh",
                    overflow: "hidden",
                },
            }}
        >
            <DialogTitle className="project-info-dialog-title">
                <div className="text-center text-base font-semibold tracking-tight sm:text-lg">
                    {projectInfo?.title}
                </div>
                <button className="absolute top-1 right-1 w-6 h-6 flex items-center justify-center" onClick={() => setModalOpen(false)}>
                    <i className="ri-close-fill"></i>
                </button>
                {
                    (projectInfo?.github || projectInfo?.link) &&
                    <div className="flex flex-col justify-center items-center gap-2 pt-2 text-sm sm:text-base sm:flex-row">
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
            </DialogTitle>
            <DialogContent dividers className="project-info-dialog-content">
                <div className="mb-4">
                    <Zoom zoomMargin={40}>
                        <img
                            src={projectInfo?.titleImg}
                            alt="project_title_img"
                            className="border-2 rounded-md"
                        />
                    </Zoom>
                </div>
                {
                    projectInfo?.contents.map((c, i) => {
                        return (
                            <div className="mb-4" key={`${i}_${c.subject}`}>
                                <p className="text-lg font-semibold">{c.subject}</p>
                                {c.subject !== 'Stack' ?
                                    <ul className="work-experience-ul text-sm">
                                        {
                                            c.content.map((l, i) => {
                                                if (!l.includes('image-') && typeof (l) === 'string') {
                                                    return (
                                                        <li key={`${i}_${l as string}`}>{l}</li>
                                                    )
                                                } else {
                                                    if (typeof (l) === 'string') {
                                                        return (
                                                            <div className="mb-4" key={`${i}_${l as string}`}>
                                                                <Zoom zoomMargin={40}>
                                                                    <img
                                                                        src={(l as string).replace('image-', '')}
                                                                        alt={l as string}
                                                                        className="rounded-md"
                                                                    />
                                                                </Zoom>
                                                            </div>
                                                        )
                                                    } else {
                                                        return (
                                                            <div className="flex gap-x-1 mb-4" key={l.toString()}>
                                                                {
                                                                    l.map((img) =>
                                                                        <Zoom zoomMargin={40} key={img}>
                                                                            <img
                                                                                src={img.replace('image-', '')}
                                                                                alt={img}
                                                                                className="rounded-md"
                                                                            />
                                                                        </Zoom>
                                                                    )
                                                                }
                                                            </div>
                                                        )
                                                    }
                                                }
                                            })
                                        }
                                    </ul>
                                    :
                                    <div className="bg-gray-200 p-2 rounded-md dark:bg-gray-500">
                                        {
                                            c.content.map((l, i) => {
                                                return (
                                                    <span key={`${i}_${l as string}`}>{i + 1 !== c.content.length ? `${l}, ` : l}</span>
                                                )
                                            })
                                        }
                                    </div>
                                }
                            </div>
                        )
                    })
                }
            </DialogContent>
        </Dialog>
    )
};

export default ProjectInfo;