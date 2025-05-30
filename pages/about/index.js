import React, { useState } from "react";

// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
  FaAppStoreIos,
  FaSwift,
  FaAngular,
} from "react-icons/fa";

import {
  SiHeroku,
  SiFigma,
  SiAdobexd,
  SiAdobephotoshop,
  SiVapor,
  SiJsonwebtokens,
  SiSpringboot,
  SiLetsencrypt,
  SiFirewalla,
  SiAndroidstudio,
  SiPostgresql,
  SiMicrosoftazure,
  SiCpanel,
} from "react-icons/si";

// Individual Icon Component to avoid Fast Refresh issues
const IconWrapper = ({ icon: IconComponent }) => <IconComponent />;

//  data
const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Web Development",
        icons: [FaHtml5, FaCss3, FaJs, FaReact, FaAngular],
      },
      {
        title: "Mobile Development",
        icons: [FaSwift, SiAndroidstudio, FaAppStoreIos],
      },
      {
        title: "Backend",
        icons: [SiHeroku, SiVapor, SiSpringboot, SiPostgresql, SiMicrosoftazure],
      },
      {
        title: "Security",
        icons: [SiJsonwebtokens, SiLetsencrypt, SiFirewalla],
      },
    ],
  },

  {
    title: "experience",
    info: [
      {
        title: "Backend - Independent",
        stage: "2024 - 2024",
      },
      {
        title: "Full Stack Developer - Independent",
        stage: "2023 - present",
      },
      {
        title: "Student Systems Specialist - Iowa State University",
        stage: "2025 - present",
      },
      {
        title: "Other - Iowa State University",
        stage: "2021 - present",
      },
    ],
  },
  {
    title: "credentials",
    info: [
      {
        title: "Computer Engineering - Iowa State University, Ames, IA",
        stage: "2022 - present",
      },
      {
        title: "CyberSecurity Engineering - Iowa State University, Ames, IA",
        stage: "2022 - present",
      },
      {
        title: "Design and Manufacture Of Printed Circuits - SENA, Bogotá, COL",
        stage: "2020",
      },
    ],
  },
];

import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";
import Header from "../../components/Header";
import CountUp from "react-countup";

const About = () => {
  const [index, setIndex] = useState(0);
  console.log(index);
  return (
    <div className="min-h-screen bg-primary/30 py-32 text-center xl:text-left overflow-auto">
      <Circles />
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex bottom-800 -left-[4500px]"
      >
       
      </motion.div>
      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        <div className="flex-1 flex flex-col justify-center">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2"
          >
            Making visions real
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0 "
          >
            I started developing seven years ago. Since day one I saw the
            possibilities that coding offers, having the opportunity to morph
            any ideas into a reality. From there, I started self-learning all
            the technology required to make the vision real. Going to college
            taught me how to think as a programmer, but learning on my own the
            advances and different languages, the persistence, and the
            necessity to keep learning and evolving is what sets me apart
          </motion.p>
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
          >
            <div className=" flex flex-1 xl:gap-6">
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={6} duration={8} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Years of experience
                </div>
              </div>
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={12} duration={8} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Different finished projects
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        <motion.div
          variants={fadeIn("left", 0.6)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] h-[480px]"
        >
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemIndex) => (
              <div
                key={item.title} // use unique title instead of index for key
                className={`${
                  index === itemIndex &&
                  "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                onClick={() => setIndex(itemIndex)}
              >
                {item.title}
              </div>
            ))}
          </div>
          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, itemIndex) => (
              <div
                key={item.title} // use unique title for info item key
                className="flex-1 flex flex-col md:flex-row max-w=max gap-x-2 items-center text-white/60"
              >
                <div className="font-light mb-2 md:mb-0">{item.title}</div>
                <div className="hidden md:flex">-</div>
                <div>{item.stage}</div>
                <div className="flex gap-x-4">
                  {item.icons?.map((IconComponent, iconIndex) => (
                    <div key={iconIndex} className="text-2xl text-white">
                      <IconWrapper icon={IconComponent} />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
