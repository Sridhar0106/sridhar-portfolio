import React from 'react';
import { motion } from 'framer-motion';

const skills = [
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
    { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    { name: 'Tailwind', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
    { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
    { name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
    { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
    { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'Blender', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/blender/blender-original.svg' },
];

const Skills = () => {
    return (
        <section className="py-24 px-4 bg-transparent">
            <div className="max-w-6xl mx-auto bg-white dark:bg-slate-900/40 backdrop-blur-md border border-black/5 dark:border-white/5 rounded-[40px] p-12 md:p-20 shadow-xl transition-all duration-300">
                <h2 className="text-5xl font-black text-black dark:text-white text-center mb-24 transition-colors uppercase tracking-tight">Technical Arsenal</h2>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-x-8 gap-y-16 justify-items-center">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.1, y: -5 }}
                            className="flex flex-col items-center gap-4 group"
                        >
                            <div className="w-20 h-20 flex items-center justify-center p-4 rounded-2xl transition-all duration-300">
                                <img
                                    src={skill.icon}
                                    alt={skill.name}
                                    className={`w-14 h-14 object-contain transition-all duration-300 ${skill.name === 'GitHub' ? 'dark:invert' : ''}`}
                                />
                            </div>
                            <span className="text-sm font-bold text-black! dark:text-gray-400 group-hover:text-black dark:group-hover:text-white transition-colors">
                                {skill.name}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
