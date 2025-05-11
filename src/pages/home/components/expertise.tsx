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
  return (
    <div className="pt-[120px] flex flex-col justify-center items-center overflow-hidden relative  pb-[53px] mx-auto px-20">
      {/* Glowing line  */}
      <img
        src={GlowingLine}
        className="absolute top-0 left-1/2 transform -translate-x-1/2"
        alt=""
      />

      {/* Glowing Pill */}

      <img
        src={VioletPill}
        className="absolute -top-[600px] left-1/2 transform -translate-x-1/2"
        alt=""
      />

      {/* Star Graphic */}

      <img
        src={StarGraphic}
        className="absolute -top-20 w-[1310px] left-1/3 "
        alt=""
      />

      {/* Bottom Graphic */}

      <img src={BottomLine} className="absolute bottom-5 left-0 " alt="" />

      <div className="relative  max-w-[1440px]  z-20">
        <h2 className="text-[56px] font-semibold pb-[48px] leading-[120%] text-center">
          Our Expertise
        </h2>
        <div className="grid grid-cols-3 gap-[40px]">
          {services.map((item, i) => (
            <div
              className="bg-[#D6BEFF14] rounded-[16px] border-[1px] border-[#FFFFFF14] backdrop-blur-sm p-[24px]"
              key={i}
            >
              <div>{item.icon}</div>
              <h3 className="pb-[8px] pt-[16px] font-semibold text-[18px] ">
                {item.title}
              </h3>
              <p className="text-[16px] leading-[24px] text-[#9D9CA3] ">
                {item.description}
              </p>
            </div>
          ))}
        </div>
        <div className="buttonBgBottom mt-[72px] mx-auto w-fit rounded-full p-[1px]">
          <button className="flex    gap-x-2 font-semibold rounded-full buttonBgTop py-[14px] px-[20px] items-center">
            <AiSparkleIcon /> Book A Discovery
          </button>
        </div>
      </div>
    </div>
  );
};

export default Expertise;
