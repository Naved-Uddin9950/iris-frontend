import React, { useEffect, useState } from 'react';
import { MenuOutlined, MoonFilled, SunFilled } from '@ant-design/icons';
import { Button } from 'antd';
import { useTheme } from '../hooks/useTheme';

const ChatHeader = ({ onMenuClick }) => {

    const [isDarkTheme, setIsDarkTheme] = useState(null);
    useTheme(isDarkTheme);

    useEffect(() => {
        const storedTheme = localStorage.getItem('theme');
        console.log(storedTheme);

        if (storedTheme && storedTheme === 'dark') {
            setIsDarkTheme(true);
        } else if (storedTheme && storedTheme === 'light') {
            setIsDarkTheme(false);
        }
    }, []);

    return (
        <header className="w-full px-12 bg-blue-600 dark:bg-[#0b132b] text-white p-4 shadow-md flex items-center justify-between">
            <div className="flex items-center w-full">
                <Button
                    type="text"
                    icon={<MenuOutlined />}
                    onClick={onMenuClick}
                    className="text-white"
                />
                <h1 className="text-xl font-bold ml-4">IRIS - Intelligent Responsive Interactive System</h1>
            </div>
            <div className='flex items-center'>
                <button onClick={() => setIsDarkTheme((prev) => !prev)}>
                    {
                        isDarkTheme ? <SunFilled /> : <MoonFilled className='text-black' />
                    }
                </button>
            </div>
        </header>
    );
};

export default ChatHeader;
