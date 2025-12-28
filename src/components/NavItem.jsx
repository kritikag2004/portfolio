import { motion } from "framer-motion";
import { FaCog } from "react-icons/fa";

function NavItem({ label, href }) {
  return (
    <motion.a
      href={href}
      className="
        flex items-center gap-2 px-5 py-2 rounded-xl
        bg-emerald-500/90 text-white font-semibold
        shadow-md
        hover:bg-emerald-400 transition
      "
      whileHover="hover"
    >
      <motion.span
        variants={{ hover: { rotate: 180 } }}
        transition={{ duration: 0.4 }}
        className="text-teal-200"
      >
        <FaCog />
      </motion.span>
      {label}
    </motion.a>
  );
}

export default NavItem;
