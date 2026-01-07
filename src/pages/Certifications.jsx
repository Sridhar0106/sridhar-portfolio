import React from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { themeStyles } from '../styles/themeStyles';

const TiltCard = ({ children, index }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x, { stiffness: 500, damping: 100 });
    const mouseYSpring = useSpring(y, { stiffness: 500, damping: 100 });

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);
    const brightness = useTransform(mouseYSpring, [-0.5, 0.5], [1.1, 0.9]);

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;

        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateY,
                rotateX,
                filter: useTransform(brightness, (b) => `brightness(${b})`),
                transformStyle: "preserve-3d",
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`bg-white border-t-4 ${index % 2 === 0 ? 'border-slate-300' : 'border-blue-500'} rounded-2xl p-8 shadow-sm hover:shadow-2xl transition-shadow duration-300 group flex flex-col min-h-[220px] cursor-pointer`}
        >
            {children}
        </motion.div>
    );
};

const Certifications = () => {
    const { isDarkMode } = useTheme();
    const t = isDarkMode ? themeStyles.dark : themeStyles.light;
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
        <div className="pt-32 pb-24 px-8 md:px-24 max-w-7xl mx-auto" style={{ perspective: "1000px" }}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-20"
            >
                <h1 className={`text-6xl font-extrabold mb-6 tracking-tighter uppercase transition-colors ${t.textHeading}`}>Certifications</h1>
                <p className={`mt-4 text-xl tracking-wide transition-colors ${t.textMuted}`}>
                    Continuous learning and professional verification.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {certifications.map((cert, index) => (
                    <TiltCard key={index} index={index}>
                        <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 transition-colors text-black!">
                            {cert.title}
                        </h3>
                        <p className={`font-medium mb-auto ${t.textMuted}`}>
                            {cert.issuer}
                        </p>
                        <div className="flex items-center justify-between mt-auto pt-4">
                            <p className="text-gray-500 text-sm font-medium">
                                {cert.date}
                            </p>
                            <a
                                href={cert.link}
                                className="flex items-center gap-1.5 text-blue-600 dark:text-blue-400 font-bold text-sm opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-300 pointer-events-none group-hover:pointer-events-auto"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <span>View Certificate</span>
                                <ArrowRight size={16} />
                            </a>
                        </div>
                    </TiltCard>
                ))}
            </div>
        </div>
    );
};

export default Certifications;
