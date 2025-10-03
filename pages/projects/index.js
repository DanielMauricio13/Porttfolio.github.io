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

const projects = () => {
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
        <div className="flex-1 flex flex-col justify-center"></div>
        <motion.h2
                    variants={fadeIn("right", 0.2)}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    className="h2"
                  >
                    A little idea of my projects
                  </motion.h2>
      </div>
    </div>
  );
};

export default projects;
