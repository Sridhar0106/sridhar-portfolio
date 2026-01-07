import React from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { useTheme } from '../context/ThemeContext';
import { themeStyles } from '../styles/themeStyles';

const Hero = () => {
    const { isDarkMode } = useTheme();
    const t = isDarkMode ? themeStyles.dark : themeStyles.light;

    return (
        <section className="min-h-screen flex flex-col items-center justify-start pt-28 md:pt-36 px-4 text-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <h2 className={`text-2xl font-bold mb-4 transition-colors ${t.textHeading}`}>Hi, I'm</h2>
                <h1 className={`text-[3.5rem] md:text-[9rem] leading-none font-black tracking-tight mb-8 transition-colors uppercase ${t.textHeading}`}>
                    SRIDHAR
                </h1>
                <h3 className="text-3xl md:text-5xl font-black text-blue-600 dark:text-blue-400 mb-16 tracking-wide uppercase transition-colors min-h-[60px] md:min-h-[72px]">
                    <Typewriter
                        words={['Java Developer', 'Software Engineer', 'Full Stack Developer']}
                        loop={0}
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}
                    />
                </h3>

                <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
                    <button className={`px-14 py-4 font-bold rounded-full transition-all duration-300 shadow-xl active:scale-95 text-xl tracking-tight ${t.buttonPrimary} shadow-blue-600/20`}>
                        View Work
                    </button>
                    <button className={`px-14 py-4 font-bold rounded-full transition-all duration-300 shadow-sm active:scale-95 text-xl tracking-tight ${t.buttonSecondary}`}>
                        Download Resume
                    </button>
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
