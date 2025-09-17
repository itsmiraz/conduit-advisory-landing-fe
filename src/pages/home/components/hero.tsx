import { motion } from "framer-motion";
import HeroImg from "@/assets/images/hero_flat.svg?url";
import LeftArrow from "@/assets/icons/LeftArrow.svg";

const Hero = () => {
  return (
    <div>
      <div className="heroBg max-w-[1340px] gap-y-[25px] lg:h-[717px] mx-auto overflow-hidden px-[32px] lg:px-[77px] py-5 rounded-[34px] lg:flex-row flex-col-reverse flex justify-between items-center">
        {/* Left Content */}
        <motion.div
          className="max-w-[541px]"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="text-primary mb-[12px] lg:mb-[24px] font-bold text-[18px] lg:text-2xl font-plus-jakarta-sans">
            Conduit Advisory
          </p>
          <h1 className="text-[20px] lg:text-[58px] font-bold leading-[100%]">
            The Conduit of Capital & Crypto Growth
          </h1>
          <p className="text-[14px] lg:text-lg pt-[14px] lg:pt-[24px] pb-[36px] lg:pb-[58px] font-light text-[#2B2B2B]">
            We specialize in translating blockchain potential into
            institutional-grade opportunities—offering deal structuring, token
            strategy, and advisory services that align traditional finance with
            the decentralized future.
          </p>
          <a href="#contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="bg-[#B7995B] hover:bg-primary/80 transition-all ease-in-out duration-300 w-full lg:w-fit justify-between lg:justify-center rounded-[12px] text-[16px] lg:text-xl font-semibold flex gap-x-3 px-[14px] lg:px-[26px] py-[8px] lg:py-[14px] text-white"
            >
              Arrange a Strategy Session
              <LeftArrow />
            </motion.button>
          </a>
        </motion.div>

        {/* Right Image */}
        <motion.div
          className="max-w-[600px] px-4 lg:px-0"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
        >
          <img
            src={HeroImg}
            className="w-[368px] lg:w-[550px]"
            alt="Hero Illustration"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
