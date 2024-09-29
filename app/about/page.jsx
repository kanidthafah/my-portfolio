"use client";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaBootstrap,
  FaBook,
} from "react-icons/fa";
import {
  RiJavascriptFill,
  RiNextjsFill,
  RiTailwindCssFill,
} from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import { MdWork } from "react-icons/md";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const about = {
  title: "About me",
  description:
    "My name is Kanidtha. After I graduated from Chiang Mai University with a Bachelor of Science in Modern Management and Information Technology. I have enhanced my skills in Front End development through various online courses. I have also worked as a Front End Developer (Freelance Outsource) at Aquila Studio Company for three months.",
  info: [
    { fieldName: "Full Name", fieldValue: "Kanidtha Khamngam" },
    { fieldName: "Date of Birth", fieldValue: "January 14, 2000" },
    { fieldName: "Age", fieldValue: "24 years" },
    { fieldName: "Nationality", fieldValue: "Thai" },
    { fieldName: "Phone", fieldValue: "(+66) 90 399 8394" },
    { fieldName: "Email", fieldValue: "kanidtha.khamngam@gmail.com" },
    { fieldName: "Address", fieldValue: "Chang Puek, Chiang Mai 50300" },
  ],
};

const experience = {
  icon: <MdWork />,
  title: "My Experience",
  items: [
    {
      company: "Aquila Studio Company Limited",
      position: "Front End Developer",
      type: "Freelance Outsource",
      duration: "March 2024 - May 2024",
      details: [
        "Developing and implementing UI components using Next.js, React.js with TypeScript and TailwindCSS",
        "Work with Back-end developers to integrate UI components with APIs and databases.",
        "Debug errors and troubleshoot issues.",
      ],
    },
    {
      company: "CMU Capricious",
      position: "Online marketing",
      type: "Co-operative Education",
      duration: "May 2022 - March 2023",
      details: [
        "Planning the goals and objectives of a business using Business Model Canvas.",
        "Planning marketing strategy for sales increasing.",
        "Products photography and video, edit images and post them on Social Platform.",
        "Created content and promotions.",
      ],
    },
  ],
};

const education = {
  icon: <FaBook />,
  title: "My Education",
  items: [
    {
      institution: "Chiang Mai University",
      degree: "Bachelor's degree",
      duration: "2019-2023",
      faculty: "College of Arts, Media and Technology",
      about: "Modern Management and Information Technology",
    },
    {
      institution: "Fangchanupathum School",
      degree: "High School",
      duration: "2016-2018",
      faculty:
        "Enrichment Program of Science Mathematics Technology and Environment (SMTE)",
      about: "",
    },
  ],
};

const skills = {
  title: "My Skills",
  lists: [
    {
      icon: <FaHtml5 />,
      name: "HTML5",
    },
    {
      icon: <FaCss3Alt />,
      name: "CSS3",
    },
    {
      icon: <RiJavascriptFill />,
      name: "JavaScript",
    },
    {
      icon: <BiLogoTypescript />,
      name: "TypeScript",
    },
    {
      icon: <FaReact />,
      name: "React.js",
    },
    {
      icon: <RiNextjsFill />,
      name: "Next.js",
    },
    {
      icon: <RiTailwindCssFill />,
      name: "TailwindCSS",
    },
    {
      icon: <FaBootstrap />,
      name: "Bootstrap",
    },
  ],
};

const About = () => {
  return (
    <section className="min-h-[70vh] flex items-center justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <Tabs
          defaultValue="about"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <motion.div
            initial={{ x: "-100%", opacity: 0 }}
            animate={{
              x: 0,
              opacity: 1,
              transition: { delay: 2.4, duration: 0.6, ease: "easeIn" },
            }}
            className="w-full max-w-[380px] mx-auto xl:mx-0"
          >
            <TabsList className="flex flex-col w-full gap-6 ">
              <TabsTrigger value="about">About me</TabsTrigger>
              <TabsTrigger value="education">Education</TabsTrigger>
              <TabsTrigger value="experience">Experience</TabsTrigger>
              <TabsTrigger value="skills">Skills</TabsTrigger>
            </TabsList>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { delay: 3.2, duration: 0.4, ease: "easeIn" },
            }}
            className="max-h-[70vh] w-full"
          >
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[20px] text-[#eee9df]">
                <h3 className="text-2xl md:text-4xl font-bold text-[#ffb162]">
                  {about.title}
                </h3>
                <p className="max-w-[600px] mx-auto xl:mx-0 text-sm">
                  {about.description}
                </p>

                <ul className="max-w-[620px] grid grid-cols-1 xl:grid-cols-2 gap-4 mx-auto xl:mx-0 text-xs md:text-sm">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex justify-center xl:justify-start gap-2"
                      >
                        <span className="text-[#c9c1b1]">{item.fieldName}</span>
                        <span className="font-semibold">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
            <TabsContent
              value="education"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[20px] text-[#eee9df]">
                <h3 className="text-2xl md:text-4xl font-bold text-[#ffb162]">
                  {education.title}
                </h3>
                <div className="grid grid-cols-1 gap-[15px]">
                  {education.items.map((item, index) => {
                    return (
                      <div
                        key={index}
                        className="bg-[#2c3b4d] max-h-[220px] p-4 rounded-md"
                      >
                        <h5 className="text-sm md:text-base font-medium">{item.degree}</h5>
                        <h4 className="text-base md:text-xl font-semibold text-[#ffb162]">
                          {item.institution}
                        </h4>
                        <span className="text-xs md:text-sm italic text-[#c9c1b1 font-light">
                          {item.duration}
                        </span>
                        <div className="mt-2">
                          <h6 className="text-sm md:text-base">
                            {item.faculty}
                          </h6>
                          <p className="text-xs md:text-sm italic">
                            {item.about}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </TabsContent>
            <TabsContent
              value="experience"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[20px] text-[#eee9df]">
                <h3 className="text-2xl md:text-4xl font-bold text-[#ffb162]">
                  {experience.title}
                </h3>
                <div className="grid grid-cols-1 gap-[15px]">
                  {experience.items.map((item, index) => {
                    return (
                      <div
                        key={index}
                        className="bg-[#2c3b4d] max-h-[350px] p-4 rounded-md "
                      >
                        <h4 className="text-base md:text-xl text-[#ffb162] font-semibold">
                          {item.position}{" "}
                          <span className="text-sm md:text-base font-normal">
                            {"(" + item.type + ")"}
                          </span>{" "}
                        </h4>
                        <h5>{item.company}</h5>
                        <span className="text-xs md:text-sm italic text-[#c9c1b1 font-light">
                          {item.duration}
                        </span>
                        <ul className="ps-2 mt-2 text-xs md:text-sm">
                          {item.details.map((detail, detailIndex) => (
                            <li key={detailIndex}>{detail}</li>
                          ))}
                        </ul>
                      </div>
                    );
                  })}
                </div>
              </div>
            </TabsContent>
            <TabsContent
              value="skills"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[20px] text-[#eee9df]">
                <h3 className="text-2xl md:text-4xl font-bold text-[#ffb162]">
                  {skills.title}
                </h3>
                <ul className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {skills.lists.map((item, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[140px] bg-[#2c3b4d] rounded-md flex justify-center items-center group">
                              <div className="flex flex-col gap-2 justify-center items-center text-center text-7xl group-hover:text-[#ffb162] transition-all duration-300">
                                {item.icon}
                                <span className="text-sm xl:hidden">{item.name}</span>
                              </div>
                            </TooltipTrigger>
                            <TooltipContent className="capitalize">
                              {item.name}
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </motion.div>
        </Tabs>
      </div>
    </section>
  );
};

export default About;
