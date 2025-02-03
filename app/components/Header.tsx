import HeaderPageButton from "./HeaderPageButton";
import ModeButton from "./ModeButton";
import WeatherWidget from "./WeatherWidget";

const Header: React.FC = () => {
    return (
        <header className="w-full h-[70px] flex items-center justify-between px-8 border-b-slate-100 shadow-sm bg-background sticky top-0 z-50">
            <HeaderPageButton />
            <div className="flex items-center">
                <div className="flex items-center gap-3">
                    <WeatherWidget />
                    <ModeButton />
                </div>
            </div>
        </header>
    );
};

export default Header;