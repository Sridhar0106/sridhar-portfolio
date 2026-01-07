import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';
import profileAvatar from '../assets/profile-avatar.png';
import { useTheme } from '../context/ThemeContext';
import { themeStyles } from '../styles/themeStyles';

const About = () => {
    const { isDarkMode } = useTheme();
    const t = isDarkMode ? themeStyles.dark : themeStyles.light;
    const experiences = [
        {
            title: 'Web Developer Intern',
            company: 'Infoyieldx Coperation Pvt. Ltd',
            location: 'Erode, Tamil Nadu',
            date: 'June 2025 - July 2025',
            description: 'Improved R&D documentation for web applications using HTML, CSS, and Bootstrap. Engineered a fully responsive food order application from scratch.',
        },
        {
            title: 'Web Developer Intern',
            company: 'Smaaple Info Solutions',
            location: 'Coimbatore, Tamil Nadu',
            date: 'Feb 2024 (1 Week)',
            description: 'One-week intensive internship focused on front-end fundamentals. Contributed to designing and implementing web pages using basic front-end tools.',
        },
    ];

    return (
        <div className="pt-32 pb-24 px-8 md:px-24 max-w-7xl mx-auto">
            {/* About Me Section */}
            <section className="mb-32">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
                    {/* Left Column: Profile & education */}
                    <div className="flex flex-col gap-12">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            className="relative flex justify-center items-center"
                        >
                            {/* Blue + Purple Glow Outline Ring (Emissive) */}
                            <motion.div
                                animate={{
                                    opacity: [0.6, 1, 0.6],
                                    scale: [1, 1.02, 1],
                                    borderColor: ['#3b82f6', '#a855f7', '#3b82f6'],
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                                className="absolute w-[345px] h-[345px] rounded-full border-2 shadow-[0_0_30px_rgba(59,130,246,0.6),0_0_60px_rgba(168,85,247,0.4),inset_0_0_20px_rgba(168,85,247,0.2)] z-0"
                            ></motion.div>

                            <div className="w-80 h-80 rounded-full border-[10px] border-white dark:border-gray-800 shadow-2xl relative overflow-hidden bg-[#1e2330] z-10">
                                <img
                                    src={profileAvatar}
                                    alt="Profile"
                                    className="w-full h-full object-cover scale-110"
                                />
                            </div>
                            {/* Soft glow behind profile */}
                            <div className="absolute -z-10 w-96 h-96 bg-blue-500/10 blur-[100px] rounded-full"></div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="bg-white! dark:bg-[#111827]/60 backdrop-blur-md border border-slate-200 dark:border-gray-800 rounded-[32px] p-8 flex items-start gap-6 shadow-xl shadow-black/5"
                        >
                            <div className="p-4 bg-slate-50 dark:bg-gray-900 rounded-2xl">
                                <GraduationCap className="text-blue-700 dark:text-blue-500" size={32} />
                            </div>
                            <div>
                                <h3 className={`text-xl font-bold mb-1 transition-colors ${t.textHeading}`}>B.E - Computer Science and Engineering</h3>
                                <p className={`mb-4 transition-colors font-medium ${t.textContrast}`}>Jansons Institute of Technology</p>
                                <div className="flex flex-wrap gap-6 text-sm text-gray-600 dark:text-gray-500 font-bold">
                                    <div className="flex items-center gap-2">
                                        <Calendar size={18} className="text-blue-600" />
                                        <span>2022 - 2026</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <MapPin size={18} className="text-red-500" />
                                        <span>Coimbatore, India</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Column: About text */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="pt-8"
                    >
                        <h1 className={`text-7xl font-extrabold mb-12 tracking-tighter transition-colors ${t.textHeading}`}>About Me</h1>
                        <p className={`text-xl leading-relaxed mb-8 transition-colors font-medium max-w-2xl ${t.text}`}>
                            Hello! I'm a passionate Software Engineer based in Coimbatore, Tamil Nadu, India. I have a specialized focus on building exceptional digital experiences that are fast, accessible, and visually appealing.
                        </p>
                        <p className={`text-xl leading-relaxed mb-12 transition-colors font-medium max-w-2xl ${t.text}`}>
                            My journey in web development began 2+ years ago, and since then, I've had the privilege of working with diverse projects. I love solving complex problems and turning ideas into reality through code.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Experience Section */}
            <section>
                <h2 className={`text-3xl font-black text-center mb-24 tracking-wide transition-colors uppercase ${t.textHeading}`}>Experience</h2>
                <div className="max-w-4xl mx-auto flex flex-col gap-12 border-l-2 border-slate-200 dark:border-gray-800 pl-12 transition-colors">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative"
                        >
                            {/* Timeline Dot */}
                            <div className="absolute -left-[57px] top-2 w-5 h-5 bg-blue-600 dark:bg-blue-500 rounded-full border-4 border-white dark:border-[#0a0a0c] shadow-lg transition-colors"></div>

                            <h3 className={`text-2xl font-black mb-2 transition-colors uppercase tracking-tight ${t.textHeading}`}>{exp.title}</h3>
                            <div className="flex flex-wrap gap-4 items-center mb-4 transition-colors">
                                <span className={`text-lg font-bold ${t.textContrast}`}>{exp.company}</span>
                                <span className="text-slate-400 dark:text-gray-500 font-bold">•</span>
                                <span className={`font-semibold uppercase tracking-wider text-sm ${t.textHeading}`}>{exp.location}</span>
                            </div>
                            <p className="text-blue-600 dark:text-blue-400 font-bold mb-4 uppercase tracking-widest text-xs">{exp.date}</p>
                            <p className={`leading-relaxed max-w-2xl transition-colors font-medium ${t.text}`}>
                                {exp.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default About;
