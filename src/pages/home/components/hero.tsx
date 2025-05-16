import BulbIcon from "@/assets/icons/bulb.svg";
import AiIcon from "@/assets/icons/ai.svg";
import IndigoGlow from "@/assets/glows/indio-glow.png";
import VioLetGlow from "@/assets/glows/violet-glow.png";
import { motion } from "framer-motion";
import AnimatedText from "@/component/ui/animatedText";

const Hero = () => {
  return (
    <div className="pt-[88px] w-full relative flex justify-center items-center pb-[320px]">
      {/* Main Contents */}
      <div className="flex px-[20px] relative z-30 flex-col justify-center items-center">
        <motion.p
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="uppercase px-[16px] py-[10px] w-fit  font-semibold text-[12px] md:text-[16px] rounded-[40px] flex items-center gap-x-4 bg-[#D6BEFF]/10"
        >
          <BulbIcon /> End-to-End Solutions
        </motion.p>
        <h1 className="text-[36px] md:text-[72px] py-[12px] text-center font-bold text-white leading-[120%]">
          <AnimatedText>
            <>
              Build. Launch. Scale. <br />
              All in One Place.
            </>
          </AnimatedText>
        </h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-[16px] md:text-lg leading-[27px] text-center"
        >
          A full-stack approach for every niche, at every stage — delivering
          strategic, scalable, and <br className="md:block hidden" /> revenue-driven digital innovation as a
          growth partner.
        </motion.p>
        <div className="pt-[40px] flex justify-center gap-4 items-center">
          <div className="buttonBgBottom  transition-all duration-500 ease-in-out w-fit rounded-full p-[1px]">
            <button className="flex text-[14px] md:text-[16px]   gap-x-2 font-semibold rounded-full buttonBgTop py-[14px] px-[20px] items-center">
              <AiIcon /> Get Started Today
            </button>
          </div>
          <button className="buttonInnerShadow rounded-full py-[16px] px-[28px]  font-semibold text-[14px] md:text-[16px] ">
            Learn More
          </button>
        </div>
      </div>
      {/* Background Glows */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className=""
      >
        <img
          className=" absolute z-10  md:max-w-fit max-w-[700px] -top-[410px] md:-top-[750px] -right-[300px] md:-right-[600px]"
          src={VioLetGlow}
          alt=""
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <img
          className="absolute z-10 -bottom-10 -left-72"
          src={IndigoGlow}
          alt=""
        />
      </motion.div>
    </div>
  );
};

export default Hero;
