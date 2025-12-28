import { motion } from "framer-motion";

function NavItem({ label, href }) {
  return (
    <motion.a
      href={href}
      className="
        relative px-6 py-2 rounded-full
        font-semibold text-sm
        text-gray-700 dark:text-gray-300
        backdrop-blur-md
        overflow-hidden
      "
      whileHover="hover"
      initial="initial"
    >
      {/* Background glow */}
      <motion.span
        className="
          absolute inset-0 rounded-full
          bg-gradient-to-r from-emerald-400/30 to-teal-400/30
        "
        variants={{
          initial: { opacity: 0 },
          hover: { opacity: 1 },
        }}
        transition={{ duration: 0.4 }}
      />

      {/* Moving highlight */}
      <motion.span
        className="
          absolute inset-0
          bg-gradient-to-r from-transparent via-white/40 to-transparent
          skew-x-[-20deg]
        "
        variants={{
          initial: { x: "-120%" },
          hover: { x: "120%" },
        }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      />

      {/* Text */}
      <span className="relative z-10">
        {label}
      </span>
    </motion.a>
  );
}

export default NavItem;
