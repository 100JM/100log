"use client";

import { useEffect, useState } from "react"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Skeleton } from "@/components/ui/skeleton"

const ModeButton: React.FC = () => {
    const { setTheme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    
    const handleTheme = () => {
        // resolvedTheme을 사용하여 실제 적용된 테마를 기준으로 전환
        setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
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
            aria-label={`Switch to ${resolvedTheme === 'dark' ? 'light' : 'dark'} mode`}
        >
            {resolvedTheme === 'dark' ? <Sun /> : <Moon />}
        </button>
    );
};

export default ModeButton;