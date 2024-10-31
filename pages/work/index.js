

import WorkSlider from '../../components/WorkSlider'; // Correct path
import Bulb from '../../components/Bulb'
import Circles from '../../components/Circles'

import {motion} from 'framer-motion'
import {fadeIn} from '../../variants'

const Work = () => {
  return ( 
  <div className='h-full bg-primary/30 py-36 flex items-center'>
    <Circles />
    <div className='container mx-auto'>
      <div className='flex flex-col xl:flex-row gap-x-8'>
        <div className='text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0'>
          <motion.h2 
          variants={fadeIn('up', 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className='h2 xl:mt-12'>
            My Work <span className='text-accent'>.</span>
          </motion.h2>
          <motion.p 
          variants={fadeIn('up', 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className='mb-4 max-w-[400px] mx-auto lg:mx-0'>
            I am currently looking in contributing in big projects, take advantage of all the learned skills and 
            incorporate them in a big project. Thanks to the abilities acquired during the last few years I can morph 
            into any role, and while using my self-learning adeptness I can easily adapt in new enviroments and resposibilities
          </motion.p>
        </div>
        <motion.div
        variants={fadeIn('down', 0.6)}
        initial="hidden"
        animate="show"
        exit="hidden"
         className='w-full xl:max-w-[65%]'>
          <WorkSlider />
        </motion.div>
      </div>
    </div>
    <Bulb />
  </div>
  )
};

export default Work;
