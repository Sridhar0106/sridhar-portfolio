import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            title: 'E-Commerce Dashboard',
            description: 'A comprehensive analytics dashboard for online retailers, featuring real-time data visualization and inventory management.',
            tags: ['React', 'TypeScript', 'Recharts', 'Tailwind'],
            image: '', // Placeholder color in images
            github: '#',
            demo: '#',
        },
        {
            title: 'Social Media App',
            description: 'A full-featured social platform with real-time chat, media sharing, and user profiles.',
            tags: ['Next.js', 'Prisma', 'Socket.io', 'PostgreSQL'],
            image: '',
            github: '#',
            demo: '#',
        },
        {
            title: 'Task Management Tool',
            description: 'A collaborative project management tool inspired by Linear, focusing on speed and keyboard accessibility.',
            tags: ['Remix', 'Framer Motion', 'Radix UI'],
            image: '',
            github: '#',
            demo: '#',
        },
        {
            title: 'AI Content Generator',
            description: 'An AI-powered application that generates marketing copy and blog posts using GPT-3.',
            tags: ['OpenAI API', 'React', 'Node.js'],
            image: '',
            github: '#',
            demo: '#',
        },
    ];

    return (
        <div className="pt-32 pb-24 px-8 md:px-24 max-w-7xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-20"
            >
                <h1 className="text-6xl font-extrabold text-black! dark:text-white mb-6 tracking-tighter transition-colors uppercase">My Projects</h1>
                <p className="text-black! dark:text-gray-400 text-xl font-bold tracking-wide transition-colors">
                    A showcase of my recent work and side projects.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-7xl mx-auto">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className="group bg-white dark:bg-[#111827]/60 backdrop-blur-xl border border-slate-200 dark:border-gray-800 rounded-[40px] p-10 flex flex-col hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-500 hover:-translate-y-2"
                    >
                        {/* Project Image Placeholder */}
                        <div className="w-full h-64 bg-slate-50 dark:bg-gray-900 rounded-[24px] mb-10 overflow-hidden relative border border-slate-100 dark:border-gray-800/50 flex items-center justify-center group-hover:bg-slate-100 dark:group-hover:bg-gray-800 transition-colors duration-500">
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent"></div>
                            <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-slate-100 dark:border-gray-700 opacity-40 group-hover:scale-110 transition-transform duration-700">
                                <ExternalLink size={48} className="text-blue-500" />
                            </div>
                        </div>

                        {/* Content Area */}
                        <div className="flex-1 flex flex-col">
                            <h3 className="text-3xl font-bold text-black! dark:text-white mb-4 tracking-tight transition-colors group-hover:text-blue-600">
                                {project.title}
                            </h3>

                            <p className="text-[#FAF9F6] leading-relaxed mb-8 font-medium">
                                {project.description}
                            </p>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2 mb-10">
                                {project.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="px-4 py-1.5 bg-slate-50 dark:bg-gray-800/50 text-gray-500 dark:text-gray-400 text-xs font-bold rounded-full border border-slate-200 dark:border-gray-700 uppercase tracking-widest"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            {/* Links */}
                            <div className="flex items-center gap-6 border-t border-slate-100 dark:border-gray-800 pt-8 mt-auto">
                                <a
                                    href={project.github}
                                    className="flex items-center gap-3 px-6 py-3 bg-black dark:bg-blue-600 text-white! rounded-full hover:bg-gray-800 dark:hover:bg-blue-700 transition-all duration-300 font-bold text-sm shadow-md hover:shadow-lg group/link"
                                >
                                    <Github size={18} className="group-hover/link:rotate-12 transition-transform" />
                                    <span>Source Code</span>
                                </a>
                                <a
                                    href={project.demo}
                                    className="flex items-center gap-3 px-6 py-3 bg-slate-100 dark:bg-gray-800 text-black dark:text-white rounded-full hover:bg-slate-200 dark:hover:bg-gray-700 transition-all duration-300 font-bold text-sm group/link"
                                >
                                    <ExternalLink size={18} className="group-hover/link:scale-110 transition-transform" />
                                    <span>Live Demo</span>
                                </a>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
