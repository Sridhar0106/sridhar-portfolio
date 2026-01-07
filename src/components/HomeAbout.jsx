import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { themeStyles } from '../styles/themeStyles';

const HomeAbout = () => {
    const { isDarkMode } = useTheme();
    const t = isDarkMode ? themeStyles.dark : themeStyles.light;
    const stats = [
        { label: 'Years of Virtual Experience', value: '2+' },
        { label: 'Projects Completed', value: '5+' },
        { label: 'Certifications', value: '5+' },
        { label: 'Coffee Cups', value: '∞' },
    ];

    return (
        <section className="py-16 px-4 sm:px-8 md:px-24">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className={`text-4xl sm:text-6xl font-black mb-10 transition-colors uppercase tracking-tighter ${t.textHeading}`}>Hi,</h2>
                    <p className={`text-xl leading-relaxed mb-8 transition-colors font-bold ${t.text}`}>
                        I am a passionate software engineer with a deep love for building scalable and efficient web applications. With 2+ years of virtual experience in the industry, I have honed my skills in both frontend and backend development.
                    </p>
                    <p className={`text-xl leading-relaxed mb-12 transition-colors font-bold ${t.text}`}>
                        My mission is to solve real-world problems through code. Whether it's optimization, accessibility, or creating intuitive user interfaces, I pay attention to every detail.
                    </p>

                    <div className={`border-l-4 pl-8 transition-colors ${isDarkMode ? 'border-white' : 'border-black'}`}>
                        <h3 className={`text-2xl font-bold mb-2 transition-colors tracking-tight ${t.textHeading}`}>My Philosophy</h3>
                        <p className={`italic text-lg font-medium ${t.textMuted}`}>"Every expert was once a beginner."</p>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="grid grid-cols-2 gap-6"
                >
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            whileHover={{
                                scale: 1.05,
                                y: -12,
                                transition: { type: "spring", stiffness: 300 }
                            }}
                            className="p-10 bg-white dark:bg-slate-900/40 backdrop-blur-md border border-black/5 dark:border-white/5 rounded-[32px] flex flex-col items-center justify-center text-center shadow-sm cursor-default hover:shadow-2xl hover:border-blue-500/20 transition-all duration-300"
                        >
                            <span className={`text-5xl font-black mb-3 transition-colors ${t.textHeading}`}>
                                {stat.value}
                            </span>
                            <span className={`text-base font-bold uppercase tracking-widest text-xs ${t.textMuted}`}>
                                {stat.label}
                            </span>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default HomeAbout;
