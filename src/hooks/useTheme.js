import React, { useEffect } from "react";

export const useTheme = (isDark) => {
    useEffect(() => {
        if (isDark !== null) {
            if (isDark) {
                document.querySelector('html').classList.add('dark');
                localStorage.setItem('theme', 'dark');
            }

            if (!isDark) {
                document.querySelector('html').classList.remove('dark');
                localStorage.setItem('theme', 'light');
            }
        }
    }, [isDark]);
}