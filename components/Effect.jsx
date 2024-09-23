"use client";
import { animate, motion } from "framer-motion";

const EffectAnimation = {
  initial: {
    top: "0%",
  },
  animate: {
    top: "100%",
  },
  exit: {
    top: ["100%", "0%"],
  },
};

const Effect = () => {
  return (
    <>
      <motion.div
        variants={EffectAnimation}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{
          duration: 0.4,
          ease: "easeInOut",
          delay: 0.2,
        }}
        className="h-full w-full bg-[#eee9df] relative"
      />
    </>
  );
};

export default Effect;
