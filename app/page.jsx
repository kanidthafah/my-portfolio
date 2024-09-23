"use client";
import { Typewriter } from "react-simple-typewriter";
import Photo from "@/components/Photo";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
export default function Home() {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-16 xl:pb-20">
          <motion.div
            initial={{ x: "-100%", opacity: 0 }}
            animate={{
              x: 0,
              opacity: 1,
              transition: { delay: 2.4, duration: 0.6, ease: "easeIn" },
            }}
            className="text-center xl:text-left text-[#eee9df] order-2 xl:order-none"
          >
            <h1 className="text-5xl xl:text-8xl font-bold mb-2">
              Hello&#44; I&#39;m
              <br />
              <span className="text-[#a35139]">Kanidtha</span>
            </h1>
            <h3 className="text-2xl font-medium mb-6">
              <Typewriter
                words={["Front-End Developer"]}
                loop={5}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </h3>
            <p className="max-w-[500px] text-md font-light xl:text-base mb-8">
              After I graduated from Chiang Mai University with a Bachelor of
              Science in Modern Management and Information Technology. I have
              enhanced my skills in Front End development through various online
              courses. I have also worked as a Front End Developer
              &#10088;Freelance Outsource&#10089; for three months.
            </p>
            <Button>
              <a
                href="/assets/file/Kanidtha CV.pdf"
                download
                className="text-md"
              >
                Download CV
              </a>
            </Button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { delay: 3.2, duration: 0.4, ease: "easeIn" },
            }}
            className="order-1 xl:order-none mb-8 xl:mb-0"
          >
            <Photo />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
