import { create } from "zustand";
import { ProjectInfoInterface } from "@/type/ProjectInfoType";

interface useModalInterface {
    modalOpen: boolean;
    setModalOpen: (isOpen: boolean) => void;
    projectInfo: ProjectInfoInterface | null;
    setProjectInfo: (info: ProjectInfoInterface) => void;
}

const useModal = create<useModalInterface>((set) => ({
    modalOpen: false,
    setModalOpen: (isOpen: boolean) => set({ modalOpen: isOpen }),
    projectInfo: null,
    setProjectInfo: (info: ProjectInfoInterface) => set({ projectInfo: info }),

}));

export default useModal;