import React, { useState } from "react";




import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";
import Header from "../../components/Header";
import CountUp from "react-countup";

const reflection = () => {
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
            My reflections
          </motion.h2>
 
        </div>

      </div>
    </div>
  );
};

export default reflection;
