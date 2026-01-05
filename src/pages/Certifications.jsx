import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Certifications = () => {
    const certifications = [
        {
            title: 'AWS Certified Solutions Architect',
            issuer: 'Amazon Web Services',
            date: 'Issued 2023',
            link: '#',
        },
        {
            title: 'Meta Frontend Developer Profesional Certificate',
            issuer: 'Meta',
            date: 'Issued 2023',
            link: '#',
        },
        {
            title: 'Certified Kubernetes Administrator',
            issuer: 'The Linux Foundation',
            date: 'Issued 2022',
            link: '#',
        },
        {
            title: 'Professional Scrum Master I',
            issuer: 'Scrum.org',
            date: 'Issued 2022',
            link: '#',
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
                <p className="mt-4 text-xl text-gray-600 dark:text-gray-400 tracking-wide transition-colors">
                    Continuous learning and professional verification.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {certifications.map((cert, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className={`bg-white border-t-4 ${index % 2 === 0 ? 'border-slate-300' : 'border-blue-500'} rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col min-h-[220px]`}
                    >
                        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                            {cert.title}
                        </h3>
                        <p className="text-gray-600 font-medium mb-auto">
                            {cert.issuer}
                        </p>
                        <div className="flex items-center justify-between mt-auto pt-4">
                            <p className="text-gray-500 text-sm font-medium">
                                {cert.date}
                            </p>
                            <a
                                href={cert.link}
                                className="flex items-center gap-1.5 text-gray-900 hover:text-blue-600 transition-colors font-bold text-sm"
                            >
                                <span>View Certificate</span>
                                <ArrowRight size={16} />
                            </a>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Certifications;
