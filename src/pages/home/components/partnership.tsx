import { motion } from "framer-motion";
import RadioButton from "@/assets/icons/RadioButton.svg";
import DollarIcon from "@/assets/icons/Dollar.svg";
import MapIcon from "@/assets/icons/MapIcon.svg";
import Setting from "@/assets/icons/Setting.svg";
import PartnerImage from "@/assets/images/partner.webp";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const Partnership = () => {
  return (
    <div className="max-w-[1263px] px-4 mt-32 flex lg:flex-row flex-col-reverse items-center justify-between gap-10 mx-auto">
      {/* Left column */}
      <motion.div
        className="md:w-[578px]"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div
          variants={item}
          className="bg-[#FFFDFD] border-[#E6E6E6] border w-fit rounded-[24px] px-[18px] md:px-[24px] py-[9px] md:py-[12px] flex gap-x-2 items-center"
        >
          <RadioButton />
          <p className="text-desc text-[14px] md:text-[16px]">
            Maximize Deals, Minimize Friction
          </p>
        </motion.div>

        <motion.h2
          variants={item}
          className="text-[20px] md:text-[36px] mt-[14px] mb-[24px] font-bold text-desc"
        >
          Partnerships Built for the <br /> Next Economy
        </motion.h2>

        <motion.p
          variants={item}
          className="text-[14px] md:text-[16px] text-desc"
        >
          By combining institutional-grade standards with decentralized
          innovation, we help partners collaborate with confidence and unlock
          new market opportunities.
        </motion.p>

        <motion.div variants={container} className="mt-[24px] space-y-[24px]">
          <motion.div variants={item} className="flex gap-x-2 items-center">
            <DollarIcon />
            <p className="text-desc font-semibold text-[14px] md:text-[16px]">
              Design clear token and capital structures for long-term alignment
            </p>
          </motion.div>

          <motion.div variants={item} className="flex gap-x-2 items-center">
            <MapIcon />
            <p className="text-desc font-semibold text-[14px] md:text-[16px]">
              Support M&A and venture financing with crypto-specific frameworks
            </p>
          </motion.div>

          <motion.div variants={item} className="flex gap-x-2 items-center">
            <Setting />
            <p className="text-desc font-semibold text-[14px] md:text-[16px]">
              Streamline execution with standardized deal mechanics
            </p>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Right image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
      >
        <motion.img
          src={PartnerImage}
          alt="Partners"
          className="rounded-[16px]"
          whileHover={{ y: -4 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
        />
      </motion.div>
    </div>
  );
};

export default Partnership;
