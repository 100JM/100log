import ModeButton from "./ModeButton";

const Header: React.FC = () => {

    return (
        <header className="w-full h-[70px] flex items-center justify-between px-8 border-b-slate-100 shadow-sm bg-background sticky top-0 z-50">
            <div>
                <a className="text-2xl hover:underline" href="http://localhost:3000/">
                    <p>100log</p>
                </a>
            </div>
            <div className="flex items-center">
                <div className="flex items-center gap-3">
                    <a className="hover:underline" href="#">
                        <p>About</p>
                    </a>
                    <ModeButton />
                </div>
            </div>
        </header>
    );
};

export default Header;