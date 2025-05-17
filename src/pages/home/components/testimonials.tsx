import React, { useEffect, useRef } from "react";
import QuoteIcon from "@/assets/icons/quote.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useState } from "react";
import TestimonialImage from "@/assets/images/testimonialImg.png";
import LeftArrow from "@/assets/icons/leftArrow.svg";
import IndigoRoundGlow from "@/assets/glows/indigo-round-glow.png";
import Grid from "@/assets/images/grid.png";
const testimonials = [
  {
    name: "Sophia M",
    img: TestimonialImage,
    role: "Startup Founder",
    text: `Unlike generic templates, Vortexpert delivered a custom website that perfectly matches our brand. It’s fast, responsive, and gets results.`,
  },
  {
    name: "James R",
    img: TestimonialImage,
    role: "Business Owner",
    text: `Vortexpert transformed our outdated website into a high-performing platform. The design is sleek, fast, and optimized for conversions. Highly recommended!`,
  },
  {
    name: "Daniel K",
    img: TestimonialImage,
    role: "Marketing Director",
    text: `From start to finish, the team was professional and efficient. They listened to our needs and provided excellent post-launch support!`,
  },
  {
    name: "Ava T",
    img: TestimonialImage,
    role: "E-commerce Manager",
    text: `We saw a 35% increase in conversions after launching our new site. The performance and user experience are top-notch. Vortexpert exceeded our expectations.`,
  },
  {
    name: "Liam N",
    img: TestimonialImage,
    role: "Tech Lead",
    text: `Clean code, modern design, and seamless integration. Vortexpert delivered exactly what we needed, on time and with great communication throughout.`,
  },
  {
    name: "Emily S",
    img: TestimonialImage,
    role: "Freelance Designer",
    text: `As a designer, I'm picky — but I was blown away by their attention to detail and responsiveness. Working with Vortexpert was a breeze.`,
  },
  {
    name: "Noah W",
    img: TestimonialImage,
    role: "App Developer",
    text: `They didn’t just build a website; they built a digital experience. Everything works flawlessly across devices. I’ll definitely collaborate again.`,
  },
  {
    name: "Isabella C",
    img: TestimonialImage,
    role: "Creative Director",
    text: `Our new site looks incredible and loads lightning fast. Their design instincts are sharp and they took the time to understand our vision.`,
  },
];

const useIsDesktop = (breakpoint = 768) => {
  const [isDesktop, setIsDesktop] = useState(
    typeof window !== "undefined" ? window.innerWidth >= breakpoint : false
  );

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= breakpoint);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [breakpoint]);

  return isDesktop;
};
const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  // const isInView = useInView(ref);
const isDesktop = useIsDesktop(1024); 
  const swiperRef = useRef(null);

  const handleLeftClick = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleRightClick = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext();
    }
  };
  return (
    <div className="pb-[200px] overflow-hidden relative">
      <div className="mx-auto  w-fit flex justify-center items-center flex-col text-center">
        <div className="translate-y-8">
          <QuoteIcon />
        </div>
        <h2 className="text-[32px] md:text-[56px] font-semibold leading-[120%]">
          Testimonials
        </h2>
      </div>
      <div className="py-12 relative px-4">
        <div className="h-full md:block hidden bg-gradient-to-r to-[#00000000] from-[#000000] absolute left-0 top-0 w-[400px] z-10"></div>
        <div className="h-full md:block hidden bg-gradient-to-r from-[#00000000] to-[#000000] absolute right-0 top-0 w-[400px] z-10"></div>
        <Swiper
          ref={swiperRef}
          modules={[Pagination, Navigation, Autoplay]}
          // slidesPerView={1.2}
          pagination={{
            el: ".custom-pagination",
            clickable: true,
            bulletClass: "custom-bullet",
            bulletActiveClass: "custom-bullet-active",
          }}
          // centeredSlides
          spaceBetween={24}
          navigation={{
            nextEl: ".right-arrow",
            prevEl: ".left-arrow",
          }}
          // loop={true}
          autoplay={{
            delay: 2000, // 5000ms = 5 seconds
            // disableOnInteraction: false, // keeps autoplay running after manual swipe
          }}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          breakpoints={{
            450: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((t, i) => (
            <SwiperSlide key={i}>
              <div
                className={`transition-all border select-none cursor-pointer duration-300 w-full md:w-[380px] mx-auto p-6 rounded-[16px]  
              ${
                 (isDesktop ? i - 1 === activeIndex : i === activeIndex)
                  ? "testimonialCardBg border-[#9216FF] text-[#E2E1E5]"
                  : "bg-[#ffffff0a]  border-[#FFFFFF]/10"
              }`}
              >
                <div className="flex gap-x-[10px] items-center">
                  <div className="testimonialImageBg flex justify-center items-center size-[62px] rounded-full">
                    <img
                      src={t.img}
                      className="size-[50px] rounded-full border border-[#9216FF] "
                      alt=""
                    />
                  </div>
                  <div>
                    <h3 className="text-lg  text-white font-semibold">
                      {t.name}
                    </h3>
                    <p className="text-[16px] text-white  pt-1">{t.role}</p>
                  </div>
                </div>

                <p className="text-base pt-4  leading-relaxed">{t.text}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="flex z-20 relative mx-auto w-fit my-10 justify-center items-center gap-x-2">
          <button className="left-arrow" onClick={handleLeftClick}>
            <LeftArrow />
          </button>
          <div className="custom-pagination flex gap-x-2"></div>
          <button className="right-arrow rotate-180" onClick={handleRightClick}>
            <LeftArrow />
          </button>
        </div>
      </div>
      {/* Glowing line  */}
      <img
        src={Grid}
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2"
        alt=""
      />
      <img
        src={IndigoRoundGlow}
        className="absolute  md:max-w-fit max-w-[1000px] -bottom-[400px] left-1/2 transform -translate-x-1/2"
        alt=""
      />
    </div>
  );
};

export default Testimonials;
