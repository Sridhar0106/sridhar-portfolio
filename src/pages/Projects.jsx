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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className="group relative bg-white/95 dark:bg-[#111827]/40 backdrop-blur-md border border-slate-300 dark:border-gray-800 rounded-[32px] overflow-hidden flex flex-col hover:border-black transition-all duration-500 shadow-md hover:shadow-xl"
                    >
                        {/* Project Image Area */}
                        <div className="h-64 bg-slate-100 dark:bg-[#1e293b]/50 relative flex items-center justify-center transition-colors">
                            <div className="w-full h-full bg-gradient-to-br from-blue-500/5 to-transparent"></div>
                            {/* Optional: Add a subtle placeholder pattern or icon */}
                        </div>

                        {/* Project Info */}
                        <div className="p-10 flex-1 flex flex-col">
                            <h3 className="text-3xl font-bold text-black! dark:text-white mb-4 transition-colors group-hover:text-blue-700 dark:group-hover:text-blue-400">
                                {project.title}
                            </h3>
                            <p className="text-black! dark:text-gray-400 leading-relaxed mb-8 flex-1 transition-colors font-medium">
                                {project.description}
                            </p>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-3 mb-10">
                                {project.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="px-4 py-1.5 bg-slate-100 dark:bg-gray-800/80 text-black! dark:text-gray-400 text-xs font-bold rounded-full border border-slate-300 dark:border-gray-700 uppercase tracking-widest transition-colors"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            {/* Links */}
                            <div className="flex items-center gap-8">
                                <a
                                    href={project.github}
                                    className="flex items-center gap-2 text-slate-800 dark:text-slate-500 hover:text-black dark:hover:text-white transition-colors font-bold text-sm"
                                >
                                    <Github size={20} />
                                    <span>Source Code</span>
                                </a>
                                <a
                                    href={project.demo}
                                    className="flex items-center gap-2 text-slate-800 dark:text-slate-500 hover:text-black dark:hover:text-white transition-colors font-bold text-sm"
                                >
                                    <ExternalLink size={20} />
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
