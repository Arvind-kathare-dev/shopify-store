import { Variants } from "framer-motion";

// lib/motion.ts
export const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export const slideVariants = (dir: number): Variants => ({
  initial: { x: dir * 32, opacity: 0 },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.32,
      ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
    },
  },
  exit: {
    x: dir * -32,
    opacity: 0,
    transition: { duration: 0.2 },
  },
});