import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import Circles from "../../components/Circles";

const pdfCards = [
  {
    title: "General Education Reflection",
    src: "/GenEdReflection.pdf",
    description:
      "A reflective overview of the knowledge and skills gained through general education courses, highlighting their impact on my academic growth.",
  },
  {
    title: "Portfolio Reflection",
    src: "/Reflection Portfolio-1.pdf",
    description:
      "An exploration of key projects within my portfolio, discussing the lessons learned and how each piece shaped my creative process.",
  },
  {
    title: "The Ethics of Data Privacy in Social Media Engineering",
    src: "/The Ethics of Data Privacy in Social Media Engineering (1).pdf",
    description:
      "A research-driven reflection on privacy considerations in social media platforms, examining ethical responsibilities for modern engineers.",
  },
];

const reflection = () => {
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
      <div className="container mx-auto h-full flex flex-col gap-y-12 xl:flex-row xl:items-start xl:gap-x-12">
        <div className="flex-1 flex flex-col justify-center">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2"
          >
            My reflections
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="mt-4 max-w-xl text-white/80"
          >
            Dive into a selection of written reflections that trace my academic
            journey, personal growth, and evolving perspective on technology
            and ethics.
          </motion.p>
        </div>
        <motion.div
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex-[1.5] w-full"
        >
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {pdfCards.map((card, cardIndex) => (
              <motion.div
                key={card.src}
                variants={fadeIn("up", 0.2 * cardIndex)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
              >
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-sm text-white/80">
                    {card.description}
                  </p>
                </div>
                <div className="flex-1 overflow-hidden rounded-xl border border-white/10 bg-black/40">
                  <object
                    data={card.src}
                    type="application/pdf"
                    className="h-64 w-full"
                  >
                    <iframe
                      src={card.src}
                      title={card.title}
                      className="h-64 w-full"
                    />
                  </object>
                </div>
                <a
                  href={card.src}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-accent hover:underline"
                >
                  Open PDF
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default reflection;
