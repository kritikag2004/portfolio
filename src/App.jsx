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
              Computer Science Student · Frontend Development & UI Design
            </p>

            {/* CTA BUTTONS */}
            <div className="mt-6 flex flex-wrap gap-4">

              <a
                href="#projects"
                className="
                  button-animate px-6 py-2 rounded-lg font-semibold text-white
                  bg-gradient-to-r from-emerald-500 to-teal-500
                  hover:from-teal-500 hover:to-emerald-500
                  transition-all duration-300
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
    mt-8 w-[340px] rounded-2xl p-6
    bg-gradient-to-br from-emerald-500/90 to-teal-500/90
    text-white shadow-xl cursor-pointer
    relative overflow-hidden
  "
  animate={{ scale: [1, 1.02, 1] }}
  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
  whileHover={{ y: -8 }}
>
  {/* Shimmer overlay */}
  <motion.div
    className="
      absolute inset-0
      bg-gradient-to-r from-transparent via-white/20 to-transparent
      skew-x-[-20deg]
    "
    animate={{ x: ["-120%", "120%"] }}
    transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
  />

  <p className="relative text-sm leading-relaxed">
    Focused on designing intuitive interfaces that feel effortless to use,
with an eye for detail and smooth interaction.
  </p>

  {/* Animated underline */}
<motion.div
  className="h-[2px] w-24 bg-white/70 mt-5 rounded-full"
  animate={{ width: ["40%", "100%", "40%"] }}
  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
/>

</motion.div>
          </motion.div>

          {/* FLOATING PROFILE CARD */}
<div className="hidden md:flex justify-center relative">
  
  {/* Orbiting dots */}
  {[0, 1, 2].map((i) => (
    <motion.span
      key={i}
      className="absolute w-3 h-3 rounded-full bg-emerald-400"
      style={{
        top: "50%",
        left: "50%",
      }}
      animate={{
        rotate: 360,
        x: Math.cos((i * 2 * Math.PI) / 3) * 140,
        y: Math.sin((i * 2 * Math.PI) / 3) * 140,
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "linear",
        delay: i * 0.3,
      }}
    />
  ))}

  {/* Glass Card */}
  <motion.div
    animate={{ y: [0, -12, 0] }}
    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
    className="
      relative w-[300px] h-[420px]
      rounded-3xl overflow-hidden
      bg-white/30 dark:bg-white/10
      backdrop-blur-xl
      border border-white/30
      shadow-2xl
    "
  >
    <img
      src="/kritika-portfolio-pi.jpeg"
      alt="Kritika"
      className="w-full h-full object-cover"
    />

  
  </motion.div>
</div>
{/* ABOUT */}
{/* ABOUT */}
<motion.section
  id="about"
  variants={fadeUp}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: false, amount: 0.3 }}
  className="
    min-h-screen flex items-center justify-center px-6
    bg-gray-100 text-gray-900
    dark:bg-[#0b1f1a] dark:text-white
  "
>
  <div className="max-w-5xl w-full grid md:grid-cols-2 gap-12 items-center">

    {/* LEFT – TEXT */}
    <div>
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        About Me
      </h2>

      <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed max-w-xl">
        I’m a Computer Science student focused on frontend development and
        interface design. I enjoy building calm, intuitive user experiences
        where clarity, structure, and smooth interaction come together.
      </p>
    </div>

    {/* RIGHT – COMPACT CARDS */}
    <div className="grid grid-cols-2 gap-4">

      <motion.div
        whileHover={{ y: -6 }}
        className="
          rounded-xl p-4
          bg-gradient-to-br from-emerald-500 to-teal-500
          text-white shadow-lg
        "
      >
        <p className="text-sm font-semibold">Frontend</p>
        <p className="text-xs opacity-90 mt-1">
          React · Tailwind · UI structure
        </p>
      </motion.div>

      <motion.div
        whileHover={{ y: -6 }}
        className="
          rounded-xl p-4
          bg-gradient-to-br from-emerald-500 to-teal-500
          text-white shadow-lg
        "
      >
        <p className="text-sm font-semibold">Design</p>
        <p className="text-xs opacity-90 mt-1">
          Layout · Spacing · Visual clarity
        </p>
      </motion.div>

      <motion.div
        whileHover={{ y: -6 }}
        className="
          rounded-xl p-4
          bg-gradient-to-br from-emerald-500 to-teal-500
          text-white shadow-lg
        "
      >
        <p className="text-sm font-semibold">Motion</p>
        <p className="text-xs opacity-90 mt-1">
          Framer Motion · Micro-interactions
        </p>
      </motion.div>

      <motion.div
        whileHover={{ y: -6 }}
        className="
          rounded-xl p-4
          bg-gradient-to-br from-emerald-500 to-teal-500
          text-white shadow-lg
        "
      >
        <p className="text-sm font-semibold">Mindset</p>
        <p className="text-xs opacity-90 mt-1">
          Calm · Consistent · User-first
        </p>
      </motion.div>

    </div>
  </div>
</motion.section>


        </div>
      </motion.section>

      {/* PROJECTS */} 
      
      <motion.section id="projects" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.3 }} className="min-h-screen flex items-start justify-center pt-32
bg-gray-100 text-gray-900 dark:bg-[#0b1f1a] dark:text-white" > <div className="max-w-5xl w-full text-center"> <h2 className="text-3xl md:text-4xl font-bold mb-6"> Projects </h2> <p className="text-gray-600 dark:text-gray-400 text-lg mb-10"> A selection of projects showcasing my skills in frontend development, animations, and modern UI design. </p> 

      {/* PROJECT CARDS */}
      
       <div className="grid md:grid-cols-2 gap-8"> 

        {/* PORTFOLIO PROJECT */} 

        <motion.div whileHover={{ y: -8, scale: 1.02 }} transition={{ type: "spring", stiffness: 200 }} className=" bg-gray-100 dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 shadow-lg text-left " > <h3 className="text-xl font-bold mb-2"> Personal Portfolio Website </h3> <p className="text-gray-700 dark:text-gray-400 mb-4"> A modern, animated portfolio built with React, Tailwind CSS, and Framer Motion. Features dark/light mode, scroll animations, and responsive design. </p>
      
       {/* TECH STACK */} 
       
       <div className="flex flex-wrap gap-2 mb-4"> <span className="px-3 py-1 text-sm rounded-full bg-emerald-500/10 text-emerald-600 dark:text-teal-400"> React </span> <span className="px-3 py-1 text-sm rounded-full bg-emerald-500/10 text-emerald-600 dark:text-teal-400"> Tailwind CSS </span> <span className="px-3 py-1 text-sm rounded-full bg-emerald-500/10 text-emerald-600 dark:text-teal-400"> Framer Motion </span> <span className="px-3 py-1 text-sm rounded-full bg-emerald-500/10 text-emerald-600 dark:text-teal-400"> Netlify </span> </div>

      {/* ACTION BUTTONS */}
      
       <div className="flex gap-4"> <a
  href="https://kritika2004-portfolio.netlify.app"
  target="_blank"
  rel="noopener noreferrer"
  className="
    px-4 py-2 rounded-lg
    bg-emerald-500 text-white font-semibold
    hover:bg-emerald-400
    transition
  "
> Live </a>

 <a
  href="https://github.com/kritikag2004/portfolio"
  target="_blank"
  rel="noopener noreferrer"
  className="
    px-4 py-2 rounded-lg
    border border-emerald-500 text-emerald-600
    hover:bg-emerald-500 hover:text-white
    transition
  "
> Code </a> </div>
       </motion.div>
       {/* PLACEHOLDER FOR NEXT PROJECT */}
      <motion.div
        whileHover={{ y: -8, scale: 1.02 }}
        transition={{ type: "spring", stiffness: 200 }}
        className="
          bg-gray-100 dark:bg-gray-800
          rounded-2xl p-6
          border border-dashed border-gray-300 dark:border-gray-700
          text-left flex items-center justify-center
        "
      >
        <p className="text-gray-500 dark:text-gray-400">
          🚧 Next project coming soon
        </p>
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
  className="min-h-screen flex items-start justify-center pt-32
  bg-gray-100 dark:bg-[#0b1f1a]"
>
  <div className="max-w-lg w-full">
    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
      Contact Me
    </h2>

    <div className="flex justify-center gap-6 mb-6 text-2xl">
      <a href="https://github.com/kritikag2004" target="_blank" rel="noreferrer"><FaGithub /></a>
      <a href="https://www.linkedin.com/in/kritika-gaur-b7a844284" target="_blank" rel="noreferrer"><FaLinkedin /></a>
      <a href="https://instagram.com/kritikagaur19.__" target="_blank" rel="noreferrer"><FaInstagram /></a>
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
