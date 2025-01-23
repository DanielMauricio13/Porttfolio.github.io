import Link from 'next/link';

import {RiInstagramLine, RiFacebookBoxLine, RiDribbbleLine, RiBehanceLine, RiPinterestLine, RiGitBranchLine, RiLinkedinBoxLine, RiYoutubeLine, RiGithubLine} from 'react-icons/ri';

const Socials = () => {
  return (
    <div className='flex items-center gap-x-5 text-lg'>
      <Link href={'https://github.com/DanielMauricio13'} className='hover:text-accent transition-all duration-300'>
        <RiGithubLine/>
      </Link>
      <Link href={'https://linkedin.com/in/daniel-mauricio-vergara-pinilla-2378ab205'} className='hover:text-accent transition-all duration-300'>
        <RiLinkedinBoxLine/>
      </Link>
     
      
      
    </div>
  )
};

export default Socials;
