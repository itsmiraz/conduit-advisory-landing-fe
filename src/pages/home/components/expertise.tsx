import AiIcon from "@/assets/icons/aiIcon.svg";
import Automation from "@/assets/icons/automation.svg";
import Marketing from "@/assets/icons/marketing.svg";
import Research from "@/assets/icons/research.svg";
import Development from "@/assets/icons/development.svg";
import Branding from "@/assets/icons/branding.svg";
import AiSparkleIcon from "@/assets/icons/ai.svg";

import GlowingLine from "@/assets/images/glowing-line.png";
import VioletPill from "@/assets/images/violet-pill-glow.png";
import BottomLine from "@/assets/images/bottomGlowingLine.png";
import StarGraphic from "@/assets/images/starGraphic.png";
import { useInView } from "react-intersection-observer";

import { motion } from "framer-motion";
const services = [
  {
    title: "Research",
    description:
      "Identifying real problems, validating market demand, and analyzing competitors to ensure every decision is data-driven.",
    icon: <Research />,
  },
  {
    title: "Development",
    description:
      "Using cutting-edge technology to streamline your service delivery and turn your offer into a reliable system.",
    icon: <Development />,
  },
  {
    title: "Branding",
    description:
      "Building brand assets that communicate value, establish trust quickly, and position your business to stand out and convert.",
    icon: <Branding />,
  },
  {
    title: "Marketing",
    description:
      "Connecting you to paying customers using strategic content across the right channels — to shift perception and drive demand.",
    icon: <Marketing />,
  },
  {
    title: "Automation",
    description:
      "Integrating your systems with automation tools to streamline operations and achieve more efficient workflows.",
    icon: <Automation />,
  },
  {
    title: "AI",
    description:
      "Leveraging AI to enhance decision-making & personalize experiences for new intuitive ways to grow.",
    icon: <AiIcon />,
  },
];

const Expertise = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <div
      ref={ref}
      className="pt-[48px] md:pt-[120px] flex flex-col justify-center items-center overflow-hidden relative  pb-[53px] mx-auto px-[20px] md:px-20"
    >
      {/* Glowing line  */}
      <img
        src={GlowingLine}
        className="absolute -top-0.5 left-1/2 transform -translate-x-1/2"
        alt=""
      />

      {/* Glowing Pill */}

      <img
        src={VioletPill}
        className="absolute md:max-w-fit max-w-[1200px] -top-[600px] md:-top-[600px] left-1/2 transform -translate-x-1/2"
        alt=""
      />

      {/* Star Graphic */}

      <img
        src={StarGraphic}
        className=" md:block hidden absolute -top-0   right-0 "
        alt=""
      />

      {/* Bottom Graphic */}

      <img
        src={BottomLine}
        className="absolute bottom-5 -left-[180px] md:left-0 "
        alt=""
      />

      <motion.div
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: inView ? 0 : 80, opacity: inView ? 1 : 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative  max-w-[1440px]  z-20"
      >
        <h2 className="text-[32px] md:text-[56px] font-semibold pb-[48px] leading-[120%] text-center">
          Our Expertise
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[14px] md:gap-[40px]">
          {services.map((item, i) => (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: inView ? 1 : 0 }}
              transition={{ duration: 0.6, delay: i * 0.3, ease: "easeOut" }}
              className="bg-[#D6BEFF14] overflow-hidden service-card rounded-[16px]  border-[1px] border-[#FFFFFF14] backdrop-blur-sm p-[12px] md:p-[24px]"
              key={i}
            >
              <div className="flex justify-start">{item.icon}</div>
              <h3 className="pb-[8px] text-start pt-[16px] font-semibold text-[18px] ">
                {item.title}
              </h3>
              <p className="text-[16px]   leading-[24px] text-[#9D9CA3] ">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
        <div className="w-full flex justify-center items-center">
          <div className="buttonBgBottom  mt-[72px] mx-auto w-fit rounded-full p-[1px]">
            <button className="flex    gap-x-2 font-semibold rounded-full buttonBgTop py-[14px] px-[20px] items-center">
              <AiSparkleIcon /> Book A Discovery
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Expertise;
