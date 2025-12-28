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
          bg-white/80 dark:bg-gray-900/80
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
              drop-shadow-[0_0_4px_rgba(99,102,241,0.35)]
              dark:drop-shadow-[0_0_8px_rgba(236,72,153,0.45)]
            "
            whileHover={{ scale: 1.05 }}
          >
            VANSH
          </motion.a>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex items-center gap-4">
            <NavItem label="Home" href="#home" />
            <NavItem label="About" href="#about" />
            <NavItem label="Projects" href="#projects" />
            <NavItem label="Contact Me" href="#contact" />

            <motion.button
              whileHover={{ scale: 1.15, rotate: 10 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleTheme}
              className="text-xl p-2 rounded-full bg-gray-200 dark:bg-gray-700"
            >
              {theme === "dark" ? <FaSun /> : <FaMoon />}
            </motion.button>
          </div>

          {/* HAMBURGER */}
          <motion.button
            onClick={() => setOpen(true)}
            className="md:hidden text-3xl text-yellow-400"
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
        className="fixed top-0 right-0 h-screen w-64 bg-black/90 text-white p-8 z-50"
      >
        <button
          className="mb-8 text-xl"
          onClick={() => setOpen(false)}
        >
          ✕
        </button>

        <ul className="space-y-6 text-lg">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </motion.div>
    </>
  );
}

export default Navbar;
