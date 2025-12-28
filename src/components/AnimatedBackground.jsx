import { motion } from "framer-motion";

function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      
      {/* TOP LEFT GLOW */}
      <motion.div
        className="
          absolute -top-40 -left-40 w-[420px] h-[420px]
          bg-emerald-400/30 dark:bg-emerald-500/20
          rounded-full blur-[140px]
        "
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 12, repeat: Infinity }}
      />

      {/* BOTTOM RIGHT GLOW */}
      <motion.div
        className="
          absolute bottom-[-160px] right-[-160px] w-[420px] h-[420px]
          bg-teal-400/30 dark:bg-teal-500/20
          rounded-full blur-[140px]
        "
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 14, repeat: Infinity }}
      />

      {/* CENTER SOFT GLOW */}
      <motion.div
        className="
          absolute top-1/2 left-1/2 w-[360px] h-[360px]
          bg-emerald-300/20 dark:bg-teal-400/10
          rounded-full blur-[160px]
          -translate-x-1/2 -translate-y-1/2
        "
        animate={{ opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 10, repeat: Infinity }}
      />
    </div>
  );
}

export default AnimatedBackground;
