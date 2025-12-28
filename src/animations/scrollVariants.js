export const fadeUp = {
  hidden: {
    opacity: 0,
    transform: "translate3d(0, 40px, 0)",
  },
  visible: {
    opacity: 1,
    transform: "translate3d(0, 0, 0)",
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};
