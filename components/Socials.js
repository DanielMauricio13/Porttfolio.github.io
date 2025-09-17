import Link from 'next/link';
import NextImage from 'next/image';
import {RiInstagramLine, RiFacebookBoxLine, RiDribbbleLine, RiBehanceLine, RiPinterestLine, RiGitBranchLine, RiLinkedinBoxLine, RiYoutubeLine, RiGithubLine, RiSuit} from 'react-icons/ri';

const Socials = () => {
  return (
    <div className='flex items-center gap-x-5 text-lg'>
      <Link href={'https://github.com/DanielMauricio13'} className='hover:text-accent transition-all duration-300'>
        <RiGithubLine/>
      </Link>
      <Link href={'https://linkedin.com/in/daniel-mauricio-vergara-pinilla-2378ab205'} className='hover:text-accent transition-all duration-300'>
        <RiLinkedinBoxLine/>
      </Link>
     
      {/* Custom ISU Icon (image) */}
      <Link
        href="https://www.biology-it.iastate.edu/people/daniel-vergara-pinilla"
        className="hover:opacity-80 transition-all duration-300"
        target="_blank"
      >
        <NextImage
          src="/iconIastate.png" // put your ISU icon inside /public/icons/isu.png
          alt="Iowa State University"
          width={24} // adjust size
          height={24}
        />
      </Link>
      
      
    </div>
  )
};

export default Socials;
