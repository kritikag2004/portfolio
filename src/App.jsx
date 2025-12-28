import AnimatedBackground from "./components/AnimatedBackground";
import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { fadeUp } from "./animations/scrollVariants";

function App() {
  return (
    <>
      <AnimatedBackground />
      <Navbar />

      {/* HOME */}
      <motion.section
        id="home"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        className="min-h-screen pt-28 bg-white dark:bg-[#0b1f1a] flex items-center justify-center"
      >
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight">
              Hi, I’m{" "}
              <span className="text-emerald-600 dark:text-teal-400">
                Kritika Gaur
              </span>
            </h1>

            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-xl">
              Computer Science Student | Frontend & UI Enthusiast
            </p>

            {/* CTA BUTTONS */}
            <div className="mt-6 flex flex-wrap gap-4">

              <a
                href="#projects"
                className="
                  button-animate px-6 py-2 rounded-lg font-semibold
                  border border-gray-900 text-gray-900
                  hover:bg-gray-900 hover:text-white
                  dark:border-white dark:text-white
                  dark:hover:bg-white dark:hover:text-gray-900
                  transition
                "
              >
                View Projects
              </a>

              <a
                href="/resume.pdf"
                download="Kritika_Gaur_Resume.pdf"
                className="
                  button-animate px-6 py-2 rounded-lg font-semibold text-white
                  bg-gradient-to-r from-emerald-500 to-teal-500
                  hover:from-teal-500 hover:to-emerald-500
                  transition-all duration-300
                "
              >
                Download Resume
              </a>

              <a
                href="#contact"
                className="
                  button-animate px-6 py-2 rounded-lg font-semibold text-white
                  bg-gradient-to-r from-emerald-500 to-teal-500
                  hover:from-teal-500 hover:to-emerald-500
                  transition-all duration-300
                "
              >
                Hire Me
              </a>
            </div>

            {/* INTRO CARD */}
            <motion.div
              className="
                mt-8 w-[320px] rounded-2xl p-6
                bg-gradient-to-br from-emerald-500 to-teal-500
                text-white shadow-xl cursor-pointer
              "
              whileHover={{
                scale: 1.06,
                y: -10,
                boxShadow: "0px 30px 90px rgba(20,184,166,0.5)",
              }}
              whileTap={{ scale: 0.98 }}
            >
              <p className="text-sm leading-relaxed">
                Passionate about crafting clean, user-friendly interfaces
                and bringing ideas to life through thoughtful design and
                smooth interactions.
              </p>

              <div className="flex gap-2 mt-4">
                {[0, 1, 2].map((i) => (
                  <motion.span
                    key={i}
                    className="w-3 h-3 bg-white rounded-full"
                    animate={{ y: [0, -6, 0] }}
                    transition={{
                      duration: 0.6,
                      repeat: Infinity,
                      delay: i * 0.15,
                    }}
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* PHOTO CARD */}
          <div className="hidden md:block perspective">
  <motion.div
    className="relative w-[300px] h-[420px] preserve-3d"
    whileHover={{ rotateY: 180 }}
    transition={{ duration: 0.8, ease: "easeInOut" }}
    style={{ transformStyle: "preserve-3d" }}
  >
    {/* FRONT */}
    <div className="absolute inset-0 backface-hidden rounded-[160px] overflow-hidden">
      <img
        src="/kritika-portfolio-pic.png"
        alt="Kritika"
        className="w-full h-full object-cover"
      />
    </div>

    {/* BACK */}
    <div
      className="absolute inset-0 backface-hidden rounded-[160px] bg-gray-900 text-white flex items-center justify-center"
      style={{ transform: "rotateY(180deg)" }}
    >
      Back Content
    </div>
  </motion.div>
</div>

        </div>
      </motion.section>

      {/* PROJECTS */}
      <motion.section
        id="projects"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        className="min-h-screen flex items-start justify-center pt-32 bg-white dark:bg-[#0b1f1a]"
      >
        <div className="max-w-5xl w-full text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
            Projects
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-gray-100 dark:bg-gray-800 rounded-2xl p-6 shadow-lg text-left"
            >
              <h3 className="text-xl font-bold mb-2">
                Personal Portfolio Website
              </h3>

              <p className="text-gray-600 dark:text-gray-400 mb-4">
                A modern animated portfolio built using React, Tailwind CSS,
                and Framer Motion with smooth UI interactions.
              </p>

              <div className="flex gap-4">
                <a
                  href="https://kritika2004-portfolio.netlify.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg bg-emerald-500 text-white font-semibold hover:bg-emerald-400"
                >
                  Live
                </a>

                <a
                  href="https://github.com/kritikag2004/portfolio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg border border-emerald-500 text-emerald-500 hover:bg-emerald-500 hover:text-white"
                >
                  Code
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* CONTACT */}
      <motion.section
        id="contact"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        className="min-h-screen flex items-start justify-center pt-32 bg-gray-100 dark:bg-[#0b1f1a]"
      >
        <div className="max-w-lg w-full">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Contact Me
          </h2>

          <div className="flex justify-center gap-6 mb-6">
            <a href="https://github.com/kritikag2004" target="_blank"><FaGithub /></a>
            <a href="https://linkedin.com/in/kritika-gaur" target="_blank"><FaLinkedin /></a>
            <a href="https://instagram.com/kritikagaur19.__" target="_blank"><FaInstagram /></a>
          </div>

          <motion.form
            action="https://formspree.io/f/mdangyol"
            method="POST"
            className="space-y-4"
          >
            <input required name="name" placeholder="Your Name" className="w-full p-3 rounded-lg" />
            <input required name="email" placeholder="Your Email" className="w-full p-3 rounded-lg" />
            <textarea required name="message" rows="4" placeholder="Your Message" className="w-full p-3 rounded-lg" />

            <button
              type="submit"
              className="w-full py-3 rounded-lg text-white font-semibold
              bg-gradient-to-r from-emerald-500 to-teal-500
              hover:from-teal-500 hover:to-emerald-500"
            >
              Send Message 🚀
            </button>
          </motion.form>
        </div>
      </motion.section>

      <footer className="bg-white dark:bg-[#0b1f1a] text-center py-6 text-gray-500">
        © {new Date().getFullYear()} Kritika. All rights reserved.
      </footer>
    </>
  );
}

export default App;
