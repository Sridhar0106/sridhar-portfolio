import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Lightbulb, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { themeStyles } from '../styles/themeStyles';
import { useState } from 'react';

const Navbar = () => {
    const { isDarkMode, toggleTheme } = useTheme();
    const t = isDarkMode ? themeStyles.dark : themeStyles.light;
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Projects', path: '/projects' },
        { name: 'Certifications', path: '/certifications' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-lg border-b border-black/10 dark:border-white/10 transition-all duration-300">
            <nav className="container mx-auto flex h-14 items-center justify-between px-6 md:px-20">
                {/* Logo */}
                <NavLink to="/" className={`text-xl md:text-2xl font-bold tracking-tight transition-all hover:opacity-70 ${t.textHeading}`}>
                    Portfolio
                </NavLink>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-10">
                    <ul className="flex items-center gap-8">
                        {navItems.map((item) => (
                            <li key={item.name} className="relative group">
                                <NavLink
                                    to={item.path}
                                    className={({ isActive }) =>
                                        `text-sm font-bold tracking-wide transition-all duration-300 py-1 ${isActive
                                            ? t.textHeading
                                            : t.textMuted + ' hover:text-blue-600'
                                        }`
                                    }
                                >
                                    {({ isActive }) => (
                                        <>
                                            {item.name}
                                        </>
                                    )}
                                </NavLink>
                            </li>
                        ))}
                    </ul>

                    {/* Theme Toggle Component Logic Integrated */}
                    <button
                        onClick={toggleTheme}
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors border border-gray-200 dark:border-gray-700 shadow-sm overflow-hidden"
                        title={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
                    >
                        <AnimatePresence mode="wait" initial={false}>
                            <motion.div
                                key={isDarkMode ? 'dark' : 'light'}
                                initial={{ y: -20, opacity: 0, rotate: -90 }}
                                animate={{ y: 0, opacity: 1, rotate: 0 }}
                                exit={{ y: 20, opacity: 0, rotate: 90 }}
                                transition={{ duration: 0.2 }}
                            >
                                {isDarkMode ? (
                                    <Moon size={20} className="text-blue-400 drop-shadow-[0_0_8px_rgba(96,165,250,0.5)]" />
                                ) : (
                                    <Lightbulb size={20} className="text-yellow-500" />
                                )}
                            </motion.div>
                        </AnimatePresence>
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2 text-black/60 dark:text-gray-400 hover:text-black dark:hover:text-white"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <span className="sr-only">Open menu</span>
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        {isOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>
            </nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden border-t border-blue-500/20 bg-white/95 dark:bg-black/95 backdrop-blur-lg"
                    >
                        <div className="flex flex-col p-4 gap-4">
                            {navItems.map((item) => (
                                <NavLink
                                    key={item.path}
                                    to={item.path}
                                    className={({ isActive }) =>
                                        `text-base font-bold transition-colors ${isActive ? 'text-blue-600' : 'text-black/60 dark:text-gray-400'}`
                                    }
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item.name}
                                </NavLink>
                            ))}
                            <div className="flex justify-between items-center border-t border-gray-200 dark:border-gray-800 pt-4 mt-2">
                                <span className="text-sm font-bold text-black/60 dark:text-gray-400">Appearance</span>
                                <button
                                    onClick={toggleTheme}
                                    className="p-2 rounded-full bg-gray-100 dark:bg-gray-800"
                                >
                                    {isDarkMode ? <Moon size={18} className="text-blue-400" /> : <Lightbulb size={18} className="text-yellow-500" />}
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Navbar;
