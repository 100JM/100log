import { ReactNode } from "react";

interface ItemDivInterface {
    title: string;
    contents: ReactNode;
}

const ItemDiv: React.FC<ItemDivInterface> = ({title, contents}) => {
    return (
        <div className="w-full text-start flex flex-col gap-y-2 mb-12">
            <p className="text-2xl font-bold sm:text-3xl">{title}</p>
            {contents}
        </div>
    )
}

export default ItemDiv;