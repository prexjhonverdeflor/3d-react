import {motion} from "framer-motion";

export const transition = { type: "spring", duration: 0.8 };

export const slideAnimation = (direction) => {
  return {
    initial: {
      x: direction === "left" ? -100 : direction === "right" ? 100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      opacity: 0,
      transition: { ...transition, delay: 0.5 },
    },
    animate: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: { ...transition, delay: 0 },
    },
    exit: {
      x: direction === "left" ? -100 : direction === "right" ? 100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      transition: { ...transition, delay: 0 },
    },
  };
};



export const fadeAnimation = {
  initial: {
    opacity: 0,
    transition: { ...transition, delay: 0.5 },
  },
  animate: {
    opacity: 1,
    transition: { ...transition, delay: 0 },
  },
  exit: {
    opacity: 0,
    transition: { ...transition, delay: 0 },
  },
};


export const headContentAnimation = {
  initial: { x: -100, opacity: 0 }, // Changed y: 100 to x: -100
  animate: { x: 0, opacity: 1 }, // Changed y: 0 to x: 0
  transition: {
    type: "spring",
    damping: 7,
    stiffness: 30,
    restDelta: 0.001,
    duration: 0.6,
    delayChildren: 0.2,
    delay: 6,
  },
};

export const headContentAnimationRight = {
  initial: { x: 100, opacity: 0 }, // Move from the right, initial position is off-screen to the right
  animate: { x: 0, opacity: 1 }, // Animate to the center
  transition: {
    type: "spring",
    damping: 7,
    stiffness: 30,
    restDelta: 0.001,
    duration: 0.6,
    delayChildren: 0.2,
    delay: 6,
  },
};

export const headContentAnimationTop = {
  initial: { y: -100, opacity: 0 }, // Move from the top, initial position is off-screen above
  animate: { y: 0, opacity: 1 }, // Animate to its original position
  transition: {
    type: "spring",
    damping: 7,
    stiffness: 30,
    restDelta: 0.001,
    duration: 0.6,
    delayChildren: 0.2,
    delay: 5.5,
  },
};


