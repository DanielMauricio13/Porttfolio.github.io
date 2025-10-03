import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import Circles from "../../components/Circles";
import { fadeIn } from "../../variants";

const projectSummaries = [
  {
    title: "Gym App Coach",
    image: "/AppGymm.jpeg",
    link: "https://github.com/DanielMauricio13/POWAI",
    description:
      "A cross-platform mobile application that provides customized workout plans, tracks daily activity, and integrates AI-driven coaching recommendations.",
    role: "Led full-stack development, implementing fitness workflows and integrating third-party health APIs.",
    skills:
      "React Native, Expo, Firebase Authentication, Firestore, REST API integration, Tailwind CSS",
    resources:
      "Expo documentation, Firebase docs, OpenAI API references, UI mockups built in Figma",
  },
  {
    title: "Roomba Scanner",
    image: "/288.jpeg",
    link: "https://github.com/DanielMauricio13/RoombaScanner",
    description:
      "A computer vision solution that records Roomba navigation data, generates heatmaps, and visualizes floor coverage in real time for robotics research.",
    role: "Designed data collection pipeline and built the visualization dashboard used by the research team.",
    skills:
      "Python, OpenCV, NumPy, Flask, WebSockets, Data visualization",
    resources:
      "Roomba hardware SDK, OpenCV tutorials, Matplotlib documentation, Lab-provided floor plan datasets",
  },
  {
    title: "Android Inventory App",
    image: "/androidApp.jpeg",
    link: "https://github.com/DanielMauricio13/Full-Stack-Andorid",
    description:
      "A native Android application for managing inventory, complete with offline caching, barcode scanning, and real-time synchronization to a cloud backend.",
    role: "Implemented Android UI, synchronized the mobile client with backend APIs, and configured CI/CD for releases.",
    skills:
      "Kotlin, Android Studio, Room Database, Retrofit, Firebase Cloud Messaging, GitHub Actions",
    resources:
      "Android developer guides, Retrofit samples, Jetpack Room documentation, Internal API specifications",
  },
  {
    title: "Rumble Esports Platform",
    image: "/Rumble.jpeg",
    link: "https://sddec25-16.sd.ece.iastate.edu/#",
    description:
      "A responsive web portal for organizing collegiate esports scrimmages, handling registrations, match schedules, and live result updates.",
    role: "Coordinated frontend architecture, built reusable UI components, and collaborated with backend team to define API contracts.",
    skills:
      "React, TypeScript, Next.js, Tailwind CSS, Axios, Agile collaboration",
    resources:
      "Figma design system, Jira project board, REST API documentation, Usability testing sessions",
  },
  {
    title: "Angular Commerce Site",
    image: "/store.jpeg",
    link: "https://github.com/DanielMauricio13/Angular-Website",
    description:
      "An e-commerce prototype demonstrating product listings, filtering, cart management, and secure checkout simulations for a retail concept.",
    role: "Developed SPA architecture, configured routing, and implemented state management for cart persistence.",
    skills:
      "Angular, TypeScript, RxJS, SCSS, Firebase Hosting, Responsive design",
    resources:
      "Angular official docs, RxJS patterns, Stripe API references (test mode), Competitive UX research",
  },
  {
    title: "Personal Portfolio",
    image: "/websiteProjectt.jpeg",
    link: "https://github.com/DanielMauricio13/Porttfolio.github.io",
    description:
      "A dynamic personal portfolio site showcasing experience, testimonials, and interactive animations powered by modern frontend tooling.",
    role: "Sole developer managing design, development, deployment, and ongoing content updates.",
    skills:
      "Next.js, Tailwind CSS, Framer Motion, Swiper.js, Vercel deployment",
    resources:
      "Tailwind UI inspiration, Framer Motion documentation, Vercel deployment guides, Peer design feedback",
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen bg-primary/30 py-32 overflow-auto">
      <Circles />
      <div className="container mx-auto flex flex-col gap-16">
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="text-center max-w-3xl mx-auto"
        >
          <h1 className="h2">A little idea of my projects</h1>
          <p className="mt-4 text-lg text-white/80">
            Explore the projects I have built and contributed to. Each summary highlights my role,
            the skills I practiced, and the resources that supported the journey.
          </p>
        </motion.div>
        <div className="grid gap-10 lg:grid-cols-2">
          {projectSummaries.map((project, projectIndex) => (
            <motion.article
              key={project.title}
              variants={fadeIn(projectIndex % 2 === 0 ? "right" : "left", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="bg-[#2a1f4a]/70 backdrop-blur rounded-3xl border border-white/10 shadow-lg overflow-hidden flex flex-col"
            >
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="relative h-56 w-full"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary to-transparent opacity-70" />
                <div className="absolute bottom-4 left-6 text-left">
                  <h2 className="text-2xl font-semibold tracking-wide text-white">
                    {project.title}
                  </h2>
                  <p className="text-sm text-white/80">View repository</p>
                </div>
              </a>
              <div className="p-8 flex flex-col gap-6 text-left">
                <p className="text-white/90 leading-relaxed">{project.description}</p>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold uppercase tracking-widest text-sm text-accent">
                      Role
                    </h3>
                    <p className="text-white/90 mt-1">{project.role}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold uppercase tracking-widest text-sm text-accent">
                      Skills &amp; Knowledge Gained
                    </h3>
                    <p className="text-white/90 mt-1">{project.skills}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold uppercase tracking-widest text-sm text-accent">
                      Resources Used
                    </h3>
                    <p className="text-white/90 mt-1">{project.resources}</p>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
