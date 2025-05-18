import StarIcon from "@/assets/icons/star.svg";
import AiIcon from "@/assets/icons/ai.svg";

import RoiIcon from "@/assets/icons/roi.svg";
import DataDrivenIcon from "@/assets/icons/dataDriven.svg";
import EndToEndIcon from "@/assets/icons/endToEnd.svg";
import AnimatedText from "@/component/ui/animatedText";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const features = [
  {
    title: "End-to-End",
    subtitle: "All-in-One",
    description:
      "Because every move matters — we connect each stage of growth through one intelligent, structured system where every layer is intentional and guided by a depth of market awareness most teams overlook. From R&D to branding, marketing, and automation, our approach ensures every element is aligned with your vision.",
    icon: <EndToEndIcon />,
  },
  {
    title: "Data-Driven",
    subtitle: "Smart Decisions",

    description:
      "We leverage cutting-edge technology, automation, and real-time data to inform every decision — removing guesswork and maximizing efficiency. From market research and performance tracking to strategic optimization across branding, marketing, and automation, every move we make is rooted in insight, not assumption.",
    icon: <DataDrivenIcon />,
  },
  {
    title: "ROI-Focused",
    subtitle: "Real Results",

    description:
      "We don’t just build to launch — we build to return. By putting value first, we make meaningful decisions that generate real results. With this mindset, we deliver structured, aligned projects that work together seamlessly — so your business doesn’t just grow, it grows in a way that actually matters.",
    icon: <RoiIcon />,
  },
];
const WhyChooseUs = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
  return (
    <div
      ref={ref}
      className="pt-[150px] py-[132px] px-[20px] md:px-32 max-w-[1700px] mx-auto"
    >
      <motion.div
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: inView ? 0 : 80, opacity: inView ? 1 : 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="flex max-w-[1200px] md:flex-row flex-col  justify-between items-start gap-8 md:items-end">
          <div>
            <p className="uppercase px-[16px] py-[10px] w-fit  font-semibold text-[14px] md:text-[16px] rounded-[40px] flex items-center gap-x-4 bg-[#D6BEFF]/10">
              <StarIcon /> WHY CHOOSE US?
            </p>

            <AnimatedText className="text-[28px] leading-[120%] md:text-[40px] pt-[18px] font-medium font-instrument text-start">
              <>
                Because we're the only agency focused on{" "}
                <br className="md:block hidden" />
                <span className="text-[#443D52]">alignment</span> — engineered
                through systems,
                <br className="md:block hidden" />
                powered by technology, and driven by{" "}
                <br className="md:block hidden" /> growth.
              </>
            </AnimatedText>
          </div>
          <div className="buttonBgBottom md:block hidden w-fit rounded-full p-[1px]">
            <button className="flex    gap-x-2 font-semibold rounded-full buttonBgTop py-[14px] px-[20px] items-center">
              <AiIcon /> Get Started Today
            </button>
          </div>
        </div>
        <div className="featureCardContainer  flex flex-col md:flex-row gap-10 pt-[34px] ">
          {features.map((item, i) => (
            <motion.div
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: inView ? 0 : 80, opacity: inView ? 1 : 0 }}
              transition={{ duration: 0.6, delay: i * 0.3, ease: "easeOut" }}
              className="max-w-[380px] cursor-pointer p-[14px] md:p-[24px] featureCardBg rounded-[16px] border-[1px] border-[#FFFFFF14]"
              key={i}
            >
              <div>{item.icon}</div>
              <h2 className="text-[24px] leading-[36px] font-medium">
                {item.title}
              </h2>
              <h3 className="text-[18px] py-[10px]">{item.subtitle}</h3>
              <p className="pt-[24px] md:pt-[72px] text-[16px] leading-[24px]">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default WhyChooseUs;
