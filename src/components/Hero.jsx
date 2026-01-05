import React from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';

const Hero = () => {
    return (
        <section className="min-h-screen flex flex-col items-center justify-start pt-28 md:pt-36 px-4 text-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <h2 className="text-2xl font-bold text-black! dark:text-slate-500 mb-4 transition-colors">Hi, I'm</h2>
                <h1 className="text-[3.5rem] md:text-[9rem] leading-none font-black text-black! dark:text-slate-100 tracking-tight mb-8 transition-colors uppercase">
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
                    <button className="px-14 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-full transition-all duration-300 shadow-xl shadow-blue-600/20 active:scale-95 text-xl tracking-tight">
                        View Work
                    </button>
                    <button className="px-14 py-4 bg-white dark:bg-slate-900 border-2 border-black dark:border-slate-100 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black text-black dark:text-slate-100 font-bold rounded-full transition-all duration-300 shadow-sm active:scale-95 text-xl tracking-tight">
                        Download Resume
                    </button>
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
