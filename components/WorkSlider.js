// data
const workSlider = {
  slides: [
    {
      images: [
        {
          title: 'GymApp',
          path: '/AppGym.jpeg',
          githubLink: 'https://github.com/DanielMauricio13/POWAI',
        },
        {
          title: 'RoombaProject',
          path: '/roomba.1.jpeg',
          githubLink: 'https://github.com/DanielMauricio13/RoombaScanner',
        },
        {
          title: 'AndroidApp',
          path: '/android.1.jpeg',
          githubLink: 'https://github.com/DanielMauricio13/Full-Stack-Andorid',
        },
        {
          title: 'PortfolioWebsite',
          path: '/portfolioWeb.1.jpeg',
          githubLink: 'https://github.com/DanielMauricio13/Porttfolio.github.io',
        },
      ],
    },
    {
      images: [
        {
          title: 'AngularWebsite',
          path: '/store.1.jpeg',
          githubLink: 'https://github.com/DanielMauricio13/Angular-Website',
        },
        {
          title: 'In development',
          path: '/thumb1.jpg',
        },
        {
          title: 'title',
          path: '/thumb2.jpg',
        },
        {
          title: 'title',
          path: '/thumb3.jpg',
        },
      ],
    },
  ],
};


import {Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import { Pagination } from 'swiper';

import {BsArrowRight} from 'react-icons/bs'
import Image from 'next/image';

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{ clickable: true }}
      modules={[Pagination]}
      className="h-[380px] sm:h-[480px]"
    >
      {workSlider.slides.map((slide, slideIndex) => (
        <SwiperSlide key={slideIndex}>
          <div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer">
            {slide.images.map((image) => (
              <a
                key={image.path}
                href={image.githubLink} // Link to GitHub repo
                target="_blank" // Opens in a new tab
                rel="noopener noreferrer" // Improves security for external links
                className="relative rounded-lg overflow-hidden flex items-center justify-center group"
              >
                <div className="flex items-center justify-center relative overflow-hidden max-h-[200px] group-hover:max-h-[250px] group-hover:max-w-[700px] transition-all duration-700">
                  <Image src={image.path} width={500} height={300} alt={image.title} />
                  <div
                    className="absolute inset-0 bg-gradient-to-l from-transparent via-[#eee5d9] to-[#4a22bd]
                    opacity-0 group-hover:opacity-50 transition-all duration-700 "
                  ></div>
                  <div
                    className="absolute bottom-0 translate-y-full group-hover:-translate-y-10
                    transition-all duration-300 "
                  >
                    <div className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]">
                      <div className="delay-100">LIVE</div>
                      <div
                        className="translate-y-[500%] group-hover:translate-y-0 transition-all
                        duration-300 delay-150"
                      >
                        PROJECT
                      </div>
                      <div
                        className="text-xl translate-y-[500%] group-hover:translate-y-0 
                        transition-all duration-300 delay-200"
                      >
                        <BsArrowRight />
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};


export default WorkSlider;
