import React from "react";
import { motion } from "framer-motion";

import Soumik from "@/assets/images/soumik.webp";
import Thomas from "@/assets/images/thomas.webp";
import Devin from "@/assets/images/devin.webp";

const Team = () => {
  const data = [
    {
      id: "thomas-gaffney",
      name: "Thomas Gaffney",
      role: "Founder & Managing Member",
      bullets: [
        `<strong>COO, OFA Group (NASDAQ: OFAL):</strong> Drives AI strategy, crypto treasury, and cross-border M&A.`,
        `<strong>Ex–corporate attorney:</strong> Advised VCs and startups on financings and token launches.`,
        `<strong>Global experience:</strong> Combines legal, financial, and ops expertise to scale ventures.`,
      ],
      image: Thomas,
    },
    {
      id: "devin-ardalan",
      name: "Devin Ardalan",
      role: "Vice President",
      bullets: [
        `<strong>VP, Everest Ventures Group:</strong> Leads US expansion, fundraising, and partnerships.`,
        `<strong>Web3 operator:</strong> Ex–J17 Crypto, closed deals and hosted ETHDenver.`,
        `<strong>Founder:</strong> Built MVPs at Dandelion, blending product and venture skills.`,
      ],
      image: Devin,
    },
    {
      id: "soumik-dey",
      name: "Soumik Dey",
      role: "Technical Consultant",
      bullets: [
        `<strong>Co-Founder, CopyFi:</strong> Building an advanced copy-trading and risk-management platform bridging retail traders with institutional frameworks.`,
        `<strong>Web3 builder:</strong> Experienced in token strategy, dApps, market analytics, and automation systems supporting startups and advisory clients.`,
      ],
      image: Soumik,
    },
  ];

  // Animations
  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const card = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const bullet = {
    hidden: { opacity: 0, x: -12 },
    show: { opacity: 1, x: 0, transition: { duration: 0.4 } },
  };

  return (
    <div id="team" className="px-4">
      {/* Header */}
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
      >
        <button className="bg-primary text-2xl font-semibold text-white rounded-full px-[24px] py-[10px] mx-auto">
          Our Team
        </button>
      </motion.div>

      {/* Team Cards */}
      <motion.div
        className="flex justify-center lg:flex-nowrap md:flex-wrap md:flex-row flex-col items-start max-w-[1265px] gap-[20px] mx-auto py-[50px]"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {data.map((item) => (
          <motion.div
            key={item.id}
            variants={card}
            className="w-full md:w-[350px] lg:w-[409px] space-y-[24px] md:space-y-[47px] px-[24px] py-[20px] bg-[#F7F7F7] rounded-[20px] hover:shadow-md transition-shadow"
          >
            {/* Image */}
            <motion.div
              className="w-full lg:w-[361px] overflow-hidden rounded-[12px]"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
            >
              <img src={item.image} alt={item.name} className="w-full h-auto" />
            </motion.div>

            {/* Text Content */}
            <div>
              <h2 className="text-[18px] md:text-[24px] leading-[100%] font-bold text-primary">
                {item.name}
              </h2>
              <p className="text-[#484848] pt-[13px] pb-4 md:pb-[20px] text-[16px] md:text-[20px] font-light italic">
                {item.role}
              </p>

              <ul className="list-disc pl-4 space-y-2">
                {item.bullets.map((bl, idx) => (
                  <motion.li key={idx} variants={bullet}>
                    <p
                      dangerouslySetInnerHTML={{ __html: bl }}
                      className="text-[14px] text-[#484848]"
                    >
                      {}
                    </p>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Team;
