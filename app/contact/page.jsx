"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";

import { MdOutlinePhoneIphone } from "react-icons/md";
import { IoMail } from "react-icons/io5";
import { ImGithub } from "react-icons/im";
import { FaMapMarkedAlt } from "react-icons/fa";
import Swal from "sweetalert2";

const info = [
  {
    icon: <MdOutlinePhoneIphone />,
    title: "Phone",
    description: "(+66) 90 399 8394",
  },
  {
    icon: <IoMail />,
    title: "Email",
    description: "kanidtha.khamngam@gmail.com",
  },
  {
    icon: <ImGithub />,
    title: "Github",
    description: "https://github.com/kanidthafah",
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Address",
    description: "Chang Phueak, Chiang Mai 50300",
  },
];

const Contact = () => {
  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "f0a9c16f-0a20-4b2f-aa6e-5ff76621592c");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    });
    const result = await response.json();
    if (result.success) {
      Swal.fire({
        title: "Thank you for contacting me!",
        text: "Message sent successfully!",
        icon: "success",
        confirmButtonColor: "#ffb162",
      });
    }
  }
  
  return (
    <section className="py-6">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[20px] text-[#eee9df]">
          <motion.div
            initial={{ x: "-100%", opacity: 0 }}
            animate={{
              x: 0,
              opacity: 1,
              transition: { delay: 2.4, duration: 0.6, ease: "easeOut" },
            }}
            className="xl:w-[54%] order-2 xl:order-none"
          >
            <form
              className="flex flex-col gap-3 md:gap-6 p-6 md:p-10 bg-[#2c3b4d] rounded-xl"
              onSubmit={handleSubmit}
            >
              <h3 className="text-center font-semibold text-xl md:text-2xl lg:text-3xl text-[#ffb162]">
                Contact me
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                <Input
                  name="firstname"
                  type="text"
                  placeholder="First Name"
                  required
                />
                <Input
                  name="lastname"
                  type="text"
                  placeholder="Last Name"
                  required
                />
                <Input name="phone" type="text" placeholder="Phone" required />
                <Input name="email" placeholder="Email" type="email" required />
              </div>
              <Textarea
                className="h-[200px]"
                name="message"
                placeholder="your message :)"
              />
              <Button size="md" className="max-w-40 mx-auto" type="submit">
                Send message
              </Button>
            </form>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { delay: 3.2, duration: 0.4, ease: "easeIn" },
            }}
            className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0"
          >
            <ul className="flex flex-col gap-3 md:gap-6">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-3 md:gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#2c3b4d] rounded-full flex items-center justify-center">
                      <div className="text-lg md:text-[28px] text-[#ffb162]">
                        {item.icon}
                      </div>
                    </div>
                    <div className="flex-1 text-sm md:text-base lg:text-lg">
                      <p className="text-[#c9c1b1]">{item.title}</p>
                      <p>
                        {item.description}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
