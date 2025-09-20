import { motion } from "framer-motion";
import Key from "@/assets/icons/Key.svg";
import Trend from "@/assets/icons/Trend.svg";
import Hand from "@/assets/icons/Hand.svg";
import Trust from "@/assets/icons/Trusted.svg";
import Web from "@/assets/icons/Web.svg";
import Market from "@/assets/icons/Market.svg";

const services = [
  {
    title: "Token Strategy & Structuring",
    description:
      "Designing token models, allocation frameworks, and compliance-driven issuance strategies to align incentives and long-term growth.",
    icon: <Key />,
  },
  {
    title: "Crypto Treasury & Capital Management",
    description:
      "Implementing institutional-grade treasury solutions—covering custody, yield generation, covered-call strategies, and capital optimization.",
    icon: <Trend />,
  },
  {
    title: "End-to-End Advisory",
    description:
      "Supporting M&A, venture financing, and cross-border deal execution with a focus on crypto startups and tokenized assets.",
    icon: <Hand />,
  },
  {
    title: "Trusted Growth Partner",
    description:
      "Partnering across the full lifecycle to compound value through disciplined strategy, capital planning, and execution—aligning governance, risk controls, and market positioning for resilient, cycle-proof growth.",
    icon: <Trust />,
  },
  {
    title: "Web3 Ecosystem Development",
    description:
      "Building partnerships, infrastructure, and community strategies that strengthen token economies and accelerate adoption across decentralized networks.",
    icon: <Web />,
  },
  {
    title: "Market Intelligence & Research",
    description:
      "Providing data-driven insights, competitive analysis, and narrative-driven reports to guide investment decisions and position projects within evolving crypto markets.",
    icon: <Market />,
  },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVarient = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const About = () => {
  return (
    <div id="about" className="mt-[123px] px-4">
      {/* Header */}
      <motion.div
        className="flex justify-center items-center flex-col"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <button className="bg-primary text-2xl font-semibold text-white rounded-full px-[24px] py-[10px] mx-auto">
          About Us
        </button>
        <p className="italic text-[14px] md:text-[25px] text-center text-desc font-light pt-[28px]">
          “Whether you’re bridging from traditional finance or already building
          in Web3, we provide disciplined <br className="md:block hidden" />{" "}
          advisory, deal structuring, and token strategy to move with
          confidence.”
        </p>
      </motion.div>

      {/* Service Cards */}
      <motion.div
        className="grid max-w-[1264px] mt-10 mx-auto grid-cols-1 md:grid-cols-2 place-items-center  xl:grid-cols-3 gap-x-[20px] gap-y-5 md:gap-y-[66px]"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {services.map((item, i) => (
          <motion.div
            key={i}
            variants={itemVarient}
            className="bg-[#FBFBFB] w-full h-full lg:w-[408px] border border-[#EFEFEF] p-[24px] space-y-[12px] md:space-y-[24px] rounded-[20px] hover:shadow-md transition-shadow"
          >
            <div className="flex md:flex-col flex-row items-center md:items-start gap-5">
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 250, damping: 15 }}
              >
                {item.icon}
              </motion.div>
              <h2 className="text-[16px] md:text-[24px] leading-[110%] font-bold text-desc">
                {item.title}
              </h2>
            </div>
            <p className="text-desc text-[14px] md:text-[16px]">
              {item.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default About;
