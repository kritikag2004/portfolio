import { motion } from "framer-motion";
import { FaMoon, FaSun } from "react-icons/fa";
import { useState } from "react";
import useTheme from "../hooks/useTheme";
import NavItem from "./NavItem";

function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav
        className="
          fixed top-0 w-full z-50
          bg-white/80 dark:bg-[#0b1f1a]/80
          backdrop-blur-md
          border-b border-gray-200 dark:border-gray-800
        "
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          
          {/* LOGO */}
          <motion.a
            href="#home"
            className="
              text-2xl md:text-3xl font-extrabold tracking-widest uppercase
              text-gray-900 dark:text-white
              drop-shadow-[0_0_6px_rgba(16,185,129,0.45)]
              dark:drop-shadow-[0_0_10px_rgba(20,184,166,0.6)]
              cursor-pointer
            "
            whileHover={{ scale: 1.08 }}
          >
            KRITIKA
          </motion.a>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex items-center gap-4">
            <NavItem label="Home" href="#home" />
            <NavItem label="About" href="#about" />
            <NavItem label="Projects" href="#projects" />
            <NavItem label="Contact" href="#contact" />

            {/* THEME TOGGLE */}
            <motion.button
              whileHover={{ scale: 1.15, rotate: 10 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleTheme}
              className="
                text-xl p-2 rounded-full
                bg-gray-200 text-gray-900
                dark:bg-gray-700 dark:text-white
              "
            >
              {theme === "dark" ? <FaSun /> : <FaMoon />}
            </motion.button>
          </div>

          {/* HAMBURGER */}
          <motion.button
            onClick={() => setOpen(true)}
            className="md:hidden text-3xl text-emerald-500"
            whileTap={{ scale: 0.9 }}
          >
            ☰
          </motion.button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: open ? 0 : "100%" }}
        transition={{ type: "spring", stiffness: 120 }}
        className="
          fixed top-0 right-0 h-screen w-64
          bg-[#0b1f1a]/95 text-white
          p-8 z-50
        "
      >
        <button
          className="mb-10 text-2xl text-emerald-400"
          onClick={() => setOpen(false)}
        >
          ✕
        </button>

        <ul className="space-y-6 text-lg">
          <li><a href="#home" onClick={() => setOpen(false)}>Home</a></li>
          <li><a href="#about" onClick={() => setOpen(false)}>About</a></li>
          <li><a href="#projects" onClick={() => setOpen(false)}>Projects</a></li>
          <li><a href="#contact" onClick={() => setOpen(false)}>Contact</a></li>
        </ul>
      </motion.div>
    </>
  );
}

export default Navbar;
