import React from 'react';
import { motion } from 'framer-motion';

const Certifications = () => {
    const certifications = [
        {
            title: 'AWS Certified Solutions Architect',
            issuer: 'Amazon Web Services',
            date: 'Issued 2023',
        },
        {
            title: 'Meta Frontend Developer Profesional Certificate',
            issuer: 'Meta',
            date: 'Issued 2023',
        },
        {
            title: 'Certified Kubernetes Administrator',
            issuer: 'The Linux Foundation',
            date: 'Issued 2022',
        },
        {
            title: 'Professional Scrum Master I',
            issuer: 'Scrum.org',
            date: 'Issued 2022',
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
                <h1 className="text-6xl font-extrabold text-black! dark:text-white mb-6 tracking-tighter uppercase transition-colors">Certifications</h1>
                <p className="text-black! dark:text-gray-400 text-xl font-bold tracking-wide transition-colors">
                    Continuous learning and professional verification.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {certifications.map((cert, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="p-10 bg-white/95 dark:bg-[#111827]/40 backdrop-blur-md border border-slate-300 dark:border-gray-800 rounded-[24px] hover:border-black transition-all duration-500 group shadow-md hover:shadow-xl"
                    >
                        <h3 className="text-2xl font-bold text-black! dark:text-white mb-4 group-hover:text-blue-700 dark:group-hover:text-blue-400 transition-colors uppercase tracking-tight">
                            {cert.title}
                        </h3>
                        <p className="text-black! dark:text-gray-400 font-bold mb-10 transition-colors">{cert.issuer}</p>
                        <p className="text-slate-800 dark:text-gray-500 text-sm font-extrabold uppercase tracking-widest transition-colors">
                            {cert.date}
                        </p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Certifications;
