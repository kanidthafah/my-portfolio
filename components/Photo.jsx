import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="w-full h-full relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 3.3, duration: 0.4, ease: "easeIn" },
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 3.8, duration: 0.4, ease: "easeInOut" },
          }}
          className="absolute w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] mix-blend-lighten"
        >
          <Image
            src="/assets/Me.png"
            priority
            quality={100}
            fill
            alt=""
            className="object-contain pb-12 ps-2 pt-3 xl:pb-16 "
          />
        </motion.div>
        <motion.svg
          className="w-[300px] xl:w-[506px] h-[300px] xl:h-[506px] "
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="253"
            cy="253"
            r="250"
            stroke="#ffb162"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: "0 0 0 0" }}
            animate={{
              strokeDasharray: ["70 28 70 28", "70 28 70 28", "70 28 70 28"],
              rotate: [160, 360],
            }}
            transition={{
              duration: "20",
              repeat: Infinity,
              repeatType: "loop",
            }}
          />
          <motion.circle
            cx="253"
            cy="253"
            r="235"
            stroke="#a35139"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={{
              strokeDasharray: ["15 80 25 25", "16 25 92 72", "4 80 22 22"],
              rotate: [120, 360],
            }}
            transition={{
              duration: "12",
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
};

export default Photo;
