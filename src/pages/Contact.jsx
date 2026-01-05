import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail, MapPin } from 'lucide-react';

const Contact = () => {
    return (
        <div className="pt-32 pb-24 px-8 md:px-24 max-w-7xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-24"
            >
                <h1 className="text-6xl font-extrabold text-black! dark:text-white mb-6 tracking-tighter uppercase transition-colors">Get in Touch</h1>
                <p className="text-black! dark:text-gray-400 text-xl font-bold tracking-wide transition-colors">
                    Have a project in mind? Let's build something amazing together.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                {/* Left Column: Info & Connect */}
                <div className="lg:col-span-5 space-y-8">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="p-10 bg-white/95 dark:bg-[#111827]/40 backdrop-blur-md border border-slate-300 dark:border-gray-800 rounded-[32px] hover:border-black transition-all duration-500 shadow-md"
                    >
                        <h3 className="text-3xl font-bold text-black dark:text-white mb-10 transition-colors">Contact Info</h3>
                        <div className="space-y-8">
                            <div className="flex items-center gap-6 group">
                                <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-2xl group-hover:bg-blue-500/10 transition-colors">
                                    <Mail className="text-slate-800 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400" size={24} />
                                </div>
                                <div>
                                    <p className="text-sm font-extrabold text-slate-800! dark:text-gray-500 uppercase tracking-widest mb-1">Email</p>
                                    <p className="text-lg text-black! dark:text-white font-bold transition-colors">sridhar0106a@gmail.com</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-6 group">
                                <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-2xl group-hover:bg-blue-500/10 transition-colors">
                                    <MapPin className="text-slate-800 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400" size={24} />
                                </div>
                                <div>
                                    <p className="text-sm font-extrabold text-slate-800! dark:text-gray-500 uppercase tracking-widest mb-1">Location</p>
                                    <p className="text-lg text-black! dark:text-white font-bold transition-colors">Coimbatore, Tamil Nadu, India</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="p-10 bg-white/95 dark:bg-[#111827]/40 backdrop-blur-md border border-slate-300 dark:border-gray-800 rounded-[32px] hover:border-black transition-all duration-500 shadow-md"
                    >
                        <h3 className="text-3xl font-bold text-black dark:text-white mb-10 transition-colors">Connect</h3>
                        <div className="flex gap-6">
                            {[
                                { icon: Github, link: '#' },
                                { icon: Linkedin, link: '#' },
                                { icon: Twitter, link: '#' }
                            ].map((item, idx) => (
                                <a
                                    key={idx}
                                    href={item.link}
                                    className="p-4 bg-slate-100 dark:bg-slate-900 rounded-2xl text-slate-500 hover:text-white hover:bg-blue-700 transition-all duration-300"
                                >
                                    <item.icon size={28} />
                                </a>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Right Column: Contact Form */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="lg:col-span-7 p-10 bg-white/95 dark:bg-[#111827]/40 backdrop-blur-md border border-slate-300 dark:border-gray-800 rounded-[32px] flex flex-col shadow-md"
                >
                    <form className="space-y-6 flex-1 flex flex-col">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-extrabold text-slate-800! dark:text-gray-500 tracking-wider uppercase">Name</label>
                                <input
                                    type="text"
                                    className="w-full bg-slate-50 dark:bg-gray-900/50 border border-slate-300 dark:border-gray-800 rounded-2xl p-4 text-black! dark:text-white focus:outline-none focus:border-black transition-colors font-bold"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-extrabold text-slate-800! dark:text-gray-500 tracking-wider uppercase">Email</label>
                                <input
                                    type="email"
                                    className="w-full bg-slate-50 dark:bg-gray-900/50 border border-slate-300 dark:border-gray-800 rounded-2xl p-4 text-black! dark:text-white focus:outline-none focus:border-black transition-colors font-bold"
                                />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-extrabold text-slate-800! dark:text-gray-500 tracking-wider uppercase">Subject</label>
                            <input
                                type="text"
                                className="w-full bg-slate-50 dark:bg-gray-900/50 border border-slate-300 dark:border-gray-800 rounded-2xl p-4 text-black! dark:text-white focus:outline-none focus:border-black transition-colors font-bold"
                            />
                        </div>
                        <div className="space-y-2 flex-1 flex flex-col">
                            <label className="text-sm font-extrabold text-slate-800! dark:text-gray-500 tracking-wider uppercase">Message</label>
                            <textarea
                                className="w-full bg-slate-50 dark:bg-gray-900/50 border border-slate-300 dark:border-gray-800 rounded-2xl p-4 text-black! dark:text-white focus:outline-none focus:border-black transition-colors flex-1 resize-none font-bold"
                                rows="6"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full py-4 bg-blue-700 hover:bg-blue-800 text-white font-bold rounded-2xl transition-all duration-300 shadow-xl shadow-blue-700/20 uppercase tracking-widest mt-4"
                        >
                            Send Message
                        </button>
                    </form>
                </motion.div>
            </div>
        </div>
    );
};

export default Contact;
