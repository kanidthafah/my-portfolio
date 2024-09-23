"use client";
import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
  CarouselItem,
} from "@/components/ui/carousel";
import { motion } from "framer-motion";
import {
  CardContent,
  Card,
  CardDescription,
  CardTitle,
  CardHeader,
  CardFooter,
} from "@/components/ui/card";
import Link from "next/link";
import { TbBrandGithubFilled } from "react-icons/tb";
import { IoMdBrowsers } from "react-icons/io";
import React from "react";

const my_projects = {
  title: "My Projects",
  projects_list: [
    {
      name: "eCommerce Website",
      tech: ["React.js", "Next.js", "TypeScript", "TailwindCSS"],
      description: [
        "This project is an online e-commerce platform using Next.js and React.js with TypeScript.",
        "Implemented responsive design with Tailwind CSS, ensuring an optimized shopping experience across devices.",
        "Other tools: Framer Motion, Shadcn UI and React Toastify",
      ],
      github: "https://github.com/kanidthafah/hawaii-shark-store.git",
      link: "https://hawaii-shark-store.vercel.app/",
      image: "/assets/project-image/eCommerce-website-page.png",
    },
    {
      name: "Tourist Attractions Website",
      tech: ["HTML", "CSS", "Bootstrap"],
      description: [
        "This project is a responsive website showcasing recommended tourist attractions across five regions of Thailand using HTML, CSS and Bootstrap.",
      ],
      github: "https://github.com/kanidthafah/tourist-attractions-blog.git",
      link: "https://kanidthafah.github.io/tourist-attractions-blog/",
      image: "/assets/project-image/Tourist-Attraction-page.png",
    },
    {
      name: "Tic Tac Toe Game",
      tech: ["HTML", "CSS", "JavaScript"],
      description: [
        "This project is a classic Tic Tac Toe game presented as a web application. The game features an intuitive interface displaying the game board, tracking player turns, detecting winning conditions and draws.",
      ],
      github: "https://github.com/kanidthafah/TicTacToe-game.git",
      link: "https://kanidthafah.github.io/TicTacToe-game/",
      image: "/assets/project-image/Tic-Tac-Toe-page.png",
    },
    {
      name: "Weather Website",
      tech: ["HTML", "CSS", "JavaScript"],
      description: [
        "This projects is a Weather API Website for display real-time weather information such as temperature, humidity, wind speed, etc.",
        "Using OpenWeatherMap API to fetch weather data based on user-input city queries.",
        "Handled API responses effectively, displaying error messages for invalid queries or unavailable data.",
      ],
      github: "https://github.com/kanidthafah/weather.git",
      link: "https://kanidthafah.github.io/weather/",
      image: "/assets/project-image/Weather-page.png",
    },
    {
      name: "Portfolio Website",
      tech: ["React.js", "Next.js", "TailwindCSS"],
      description: [""],
      github: "",
      link: "",
      image: "",
    },
  ],
};

const Projects = () => {
  const [api, setApi] = React.useState();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <section className="min-h-[70vh] flex items-center justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ x: "-100%", opacity: 0 }}
          animate={{
            x: 0,
            opacity: 1,
            transition: { delay: 2.4, duration: 0.6, ease: "easeOut" },
          }}
          className="flex flex-col gap-2 items-center justify-center"
        >
          <Carousel setApi={setApi} className="w-full max-w-xl mx-auto xl:mx-0">
            <CarouselContent>
              {my_projects.projects_list.map((project, index) => {
                return (
                  <CarouselItem key={index}>
                    <div className="p-1">
                      <Card>
                        <CardContent className="flex flex-col aspect-square items-start max-h-[300px] justify-center w-full">
                          <img
                            src={project.image}
                            alt={project.image}
                            className="object-cover w-full h-full rounded-lg"
                          />
                        </CardContent>
                        <CardHeader>
                          <CardTitle>{project.name}</CardTitle>
                          <CardDescription>
                            {project.tech.map((item, i) => (
                              <span key={i} className="me-2">
                                {item}
                              </span>
                            ))}
                          </CardDescription>
                          <ul className="list-disc px-6 py-3 text-xs md:text-sm lg:text-base h-[160px] md:h-[170px] text-[#eee9df] ">
                            {project.description.map((item, i) => (
                              <li key={i} className="me-2">
                                {item}
                              </li>
                            ))}
                          </ul>
                        </CardHeader>
                        <CardFooter>
                          <div className="flex justify-center items-center gap-2 w-full text-sm md:text-base">
                            <Link
                              href={project.link}
                              className="w-3/4 h-10 p-2 flex justify-center items-center font-semibold text-primary bg-[#eee9df] rounded-lg gap-2 hover:bg-[#c9c1b1] transition-all duration-200 delay-75 ease-in-out"
                              target="_blank"
                            >
                              View Page
                            </Link>
                            <Link
                              href={project.github}
                              className="w-1/4 h-10 p-2 flex items-center justify-center text-[#eee9df] border border-[#eee9df] hover:bg-[#eee9df] hover:text-primary rounded-lg transition-all duration-200 delay-75 ease-in-out"
                              target="_blank"
                            >
                              <TbBrandGithubFilled className="text-base md:text-lg" />
                            </Link>
                          </div>
                        </CardFooter>
                      </Card>
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
          <div className="py-2 text-center text-sm text-[#eee9df] font-medium">
            {current} of {count}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
