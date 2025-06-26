// icons
import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowTopRight,
} from "react-icons/rx";


// data
const serviceData = [
  {
    icon: <RxDesktop />,
    title: 'Development',
    shortDescription: "With experience in Front end and Backend we can work together to build a new vision",
    fullDescription: "Let's work together in the building of a new idea, lets work on UI/UX, overall project Development or database managment"
  },
  {
    icon: <RxCrop />,
    title: 'Maintenance',
    shortDescription: 'Have a project already set? We can work to keep it updated',
    fullDescription: "With experience updating projects based on new technologies, we can improve the project experience"
  },
  {
    icon: <RxPencil2 />,
    title: 'Design',
    shortDescription: 'Make the project at your own taste',
    fullDescription: "Why use templates to build your project? Let's be unique on all the stages, have full control"
  },
  
  {
    icon: <RxReader />,
    title: 'Documentation',
    shortDescription: "Full control of your project",
    fullDescription: "While working together we make sure we give detailed documentation explaining how everything works"
  },
  {
    icon: <RxRocket />,
    title: 'Deploy',
    shortDescription: 'It is important you give your vision a chnace',
    fullDescription: "With knowledge in deployment stages we can work together to make sure your vision makes it"
  },
];

import {Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import {FreeMode, Pagination } from 'swiper';

const ServiceSlider = () => {
  return (
    <Swiper breakpoints={{
      320: {
        slidesPerView: 1,
        spaceBetween: 15,
      },
      640: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
    }}
    freeMode={true} 
    pagination={{
      clickable:true
    }}
    modules={[FreeMode, Pagination]}
    className="h-[240px] sm:h-[340px]"
    >
      {
        serviceData.map((item, index)=> {
          return <SwiperSlide key={index}>
            <div className="relative w-[200px] h-[300px] bg-[rgba(65,47,123,0.15)] rounded-lg 
            px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer 
            hover:scale-105 hover:bg-[rgba(89,65,169,0.15)] transition-transform 
            duration-300 ease-in-out">
            <div className="text-4xl text-accent mb-4">{item.icon}</div>
            <div className="mb-8">
              <h3 className="mb-2 text-lg">{item.title}</h3>
              <p className="max-w-[350px] leading-normal transition-all duration-300 ease-in-out group-hover:opacity-0 group-hover:max-h-0">
                {item.shortDescription}
              </p>
              <p className="max-w-[350px] leading-normal opacity-0 max-h-0 overflow-hidden transition-all duration-300 ease-in-out  group-hover:opacity-100 group-hover:max-h-[600px]">
                {item.fullDescription}
              </p>
            </div>
            <div className="absolute bottom-4 right-4 text-3xl transform transition-transform duration-300 ease-in-out group-hover:scale-110">
              <RxArrowTopRight className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300" />
            </div>
            </div>
          </SwiperSlide>
        })
      }
    </Swiper>
  )
};

export default ServiceSlider;
