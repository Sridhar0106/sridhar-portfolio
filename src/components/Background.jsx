import React from 'react';
import { useTheme } from '../context/ThemeContext';
import darkBg from '../assets/dark-bg.png';
import lightBg from '../assets/light-bg.png';

const Background = () => {
    const { isDarkMode } = useTheme();

    return (
        <div
            className={`fixed inset-0 -z-10 overflow-hidden transition-all duration-500 ${isDarkMode ? 'bg-[#0a0a0c]' : 'bg-[#ffffff]'
                }`}
        >
            {/* Background Image Container */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-700"
                style={{
                    backgroundImage: `url(${isDarkMode ? darkBg : lightBg})`,
                    opacity: 1
                }}
            >
                {/* Specific overlay for Light Mode to make it feel airy and clean */}
                {!isDarkMode && (
                    <div className="absolute inset-0 bg-white/50 backdrop-blur-[2px]"></div>
                )}

                {/* Specific overlay for Dark Mode to make it feel deep and premium */}
                {isDarkMode && (
                    <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]"></div>
                )}
            </div>
        </div>
    );
};

export default Background;
