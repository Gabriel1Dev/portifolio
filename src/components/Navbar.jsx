import { useState } from "react";

import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import {
  FaHome,
  FaUser,
  FaCode,
  FaProjectDiagram,
  FaEnvelope,
} from "react-icons/fa";

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [activeTab, setActiveTab] = useState("home");

  const navItems = [
    { name: "Home", href: "#home", icon: FaHome },
    { name: "About", href: "#about", icon: FaUser },
    { name: "Skills", href: "#skills", icon: FaCode },
    { name: "Projects", href: "#projects", icon: FaProjectDiagram },
    { name: "Contact", href: "#contact", icon: FaEnvelope },
  ];

  return (
    <div className="fixed z-50 bottom-0 left-0 right-0 flex justify-center">
      <motion.nav
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative w-[95%] max-w-4xl mb-4"
      >
        <div
          className="
            relative 
            bg-linear-to-r from-blue-600 to-blue-800 
            backdrop-blur-xl 
            rounded-2xl 
            shadow-2xl 
            border border-white/20 
            px-3 py-2
          "
        >
          <div className="absolute -top-5 right-3">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-gray-900
                dark:bg-gray-100 transition-colors backdrop-blur-sm"
            >
              {darkMode ? (
                <Sun className="w-4 lg:w-5 h-4 lg:h-5 text-gray-600 " />
              ) : (
                <Moon className="w-4 lg:w-5 h-4 lg:h-5 text-white" />
              )}
            </motion.button>
          </div>
          <div className="flex justify-around items-center gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.name;
              return (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={() => setActiveTab(item.name)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="flex flex-col items-center gap-0.5 p-2 py-1.5 px-2 relative group flex-1"
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute -top-2 left-1/2 -translate-x-1/2 w-6 h-1 bg-white rounded-full"
                      transition={{ duration: 0.3 }}
                    ></motion.div>
                  )}
                  <Icon
                    className={`w-5 h-5 transition-all duration-300 ${
                      isActive
                        ? "text-white"
                        : "text-white/70 group-hover:text-white"
                    }`}
                  />
                  <span
                    className={`text-[10px] font-medium transition-all duration-300 ${
                      isActive
                        ? "text-white"
                        : "text-white/60 group-hover:text-white"
                    }`}
                  >
                    {item.name}
                  </span>
                </motion.a>
              );
            })}
          </div>
        </div>
      </motion.nav>
    </div>
  );
};
export default Navbar;
