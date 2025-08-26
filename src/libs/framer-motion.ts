import { Variants } from "framer-motion";

export const scrollAnimationVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 60,
    scale: 1,
    rotate: 0,
    skewX: 0,
    skewY: 0,
    x: 0,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotate: 0,
    skewX: 0,
    skewY: 0,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeInOut",
      delay: 0,
    },
  },
};

export const appearAnimationVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 1,
    rotate: 0,
    skewX: 0,
    skewY: 0,
    x: 0,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotate: 0,
    skewX: 0,
    skewY: 0,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.19, 0.39, 0.4, 0.99],
      delay: 0,
    },
  },
  exit: {
    opacity: 0,
    y: 60,
    scale: 1,
    rotate: 0,
    skewX: 0,
    skewY: 0,
    x: 0,
    transition: {
      type: "spring",
      duration: 0.6,
      bounce: 0.2,
      delay: 0,
    },
  },
};

export const headerScrollVariants: Variants = {
  default: {
    position: "absolute",
    top: "24px",
    left: "50%",
    x: "-50%",
    width: "100%",
    maxWidth: "1280px",
    padding: "0px 20px 0px 20px",
    backgroundColor: "rgba(255, 255, 255, 0)",
    boxShadow: "none",
    backdropFilter: "blur(0px)",
    borderRadius: "16px",
    transition: {
      duration: 0.5,
      ease: [0.19, 0.39, 0.4, 0.99],
    },
  },
  desktop_scroll: {
    position: "fixed",
    top: "24px",
    left: "50%",
    x: "-50%",
    width: "86%",
    maxWidth: "1024px",
    padding: "10px",
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.05)",
    backdropFilter: "blur(10px)",
    borderRadius: "16px",
    transition: {
      duration: 0.5,
      ease: [0.19, 0.39, 0.4, 0.99],
    },
  },
};

export const infiniteCarouselVariants = {
  animate: {
    x: [0, -1000],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 30,
        ease: "linear",
      },
    },
  },
};

export const scrollAnimation2Variants: Variants = {
  hidden: {
    opacity: 0,
    y: 0,
    scale: 0.9,
    rotate: 0,
    skewX: 0,
    skewY: 0,
    x: 0,
    transition: {
      duration: 1,
      ease: [0.22, 0.61, 0.56, 1],
      delay: 0.1,
    },
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotate: 0,
    skewX: 0,
    skewY: 0,
    x: 0,
    transition: {
      duration: 1,
      ease: [0.22, 0.61, 0.56, 1],
      delay: 0.1,
    },
  },
  exit: {
    opacity: 0,
    y: 0,
    scale: 0.9,
    rotate: 0,
    skewX: 0,
    skewY: 0,
    x: 0,
    transition: {
      duration: 1,
      ease: [0.22, 0.61, 0.56, 1],
      delay: 0.1,
    },
  },
};
