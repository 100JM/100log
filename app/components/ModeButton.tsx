"use client";

import { useEffect, useState } from "react"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Skeleton } from "@/components/ui/skeleton"

const ModeButton: React.FC = () => {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    const handleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return <Skeleton className="h-10 w-10 rounded-full" />;
    }

    return (
        <button
            onClick={handleTheme}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full"
        >
            {theme === 'dark' ? <Sun /> : <Moon />}
        </button>
    );
};

export default ModeButton;