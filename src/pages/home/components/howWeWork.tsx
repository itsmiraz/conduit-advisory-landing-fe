import React from "react";
import { motion } from "framer-motion";

const rowsContainer = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const rowItem = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

const HowWeWork = () => {
  const data = [
    {
      id: "strategy",
      title: "Strategy",
      paragraphs: [
        "We define clear goals, markets, and growth levers—aligning token design, treasury, and capital priorities with execution.",
        "This stage cuts through noise to set the foundation for long-term growth and market positioning.",
      ],
    },
    {
      id: "structure",
      title: "Structure",
      paragraphs: [
        "We design deal mechanics, token frameworks, and capital flows—built for clarity, efficiency, and scale.",
        "This structure ensures ventures can move fast while staying organized for growth.",
      ],
    },
    {
      id: "execute",
      title: "Execute",
      paragraphs: [
        "We take strategy into action—driving token launches, treasury moves, partnerships, and investor engagement.",
        "Every initiative is tracked against clear milestones to ensure steady progress.",
      ],
    },
    {
      id: "scale",
      title: "Scale",
      paragraphs: [
        "We turn traction into reach—expanding distribution, deepening community, and unlocking partner channels that multiply adoption.",
        "Playbooks and network effects make growth compounding, not linear.",
      ],
    },
  ];

  return (
    <div
      id="services"
      className="bg-primary md:my-[188px] my-[63px] px-[28px] md:px-[96px] py-[32px] md:py-[120px]"
    >
      {/* Header */}
      <motion.h2
        className="text-[#F7F7F7] text-[24px] md:text-start text-end font-bold"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        How We Work
      </motion.h2>

      {/* Rows */}
      <motion.div
        variants={rowsContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        {data.map((item, i) => (
          <motion.div
            key={item.id}
            variants={rowItem}
            className="py-4 md:py-10"
          >
            <div className="grid place-items-start grid-cols-1 md:grid-cols-2 justify-between items-start">
              <h3 className="text-[#F7F7F7] font-medium text-[20px] md:text-[40px]">
                {item.title}
              </h3>

              <div className="space-y-[20px] mt-[12px] md:mt-0">
                <p className="text-[#F7F7F7] text-sm md:text-xl">
                  {item.paragraphs[0]}
                </p>
                <p className="text-[#F7F7F7] text-sm md:text-xl">
                  {item.paragraphs[1]}
                </p>
              </div>
            </div>

            {/* Animated divider */}
            <div className="mt-4 md:mt-8 h-px bg-transparent">
              <motion.div
                className="h-px md:bg-[#1C1C1C] bg-[#D6D6D6] origin-left"
                initial={{ scaleX: 0, opacity: 0.6 }}
                whileInView={{ scaleX: 1, opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.05 }}
              />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default HowWeWork;
