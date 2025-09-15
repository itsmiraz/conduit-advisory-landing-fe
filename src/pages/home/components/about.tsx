import Key from "@/assets/icons/Key.svg";
import Trend from "@/assets/icons/Trend.svg";
import Hand from "@/assets/icons/Hand.svg";
import Trust from "@/assets/icons/Trusted.svg";
import Web from "@/assets/icons/Web.svg";
import Market from "@/assets/icons/Market.svg";

const About = () => {
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

  return (
    <div className="mt-[123px] px-4">
      <div className="flex justify-center items-center flex-col">
        <button className="bg-primary text-2xl font-semibold  text-white rounded-full px-[24px] py-[10px] mx-auto">
          About Us
        </button>
        <p className="italic text-[14px] md:text-[25px]  text-center text-desc font-light  pt-[28px]">
          “Whether you’re bridging from traditional finance or already building
          in Web3, we provide disciplined <br className="md:block hidden" />{" "}
          advisory, deal structuring, and token strategy to move with
          confidence.”
        </p>
      </div>
      <div className="grid max-w-[1264px] mt-10 mx-auto grid-cols-1 md:grid-cols-3 gap-x-[20px] gap-y-5 md:gap-y-[66px]">
        {services.map((item, i) => (
          <div
            className="bg-[#FBFBFB] w-full md:w-[408px] border border-[#EFEFEF] p-[24px]  space-y-[12px] md:space-y-[24px] rounded-[20px]"
            key={i}
          >
            <div className="flex md:flex-col flex-row items-center md:items-start gap-5">
              <div>{item.icon}</div>
              <h2 className=" text-[16px] md:text-[24px] leading-[110%] font-bold text-desc ">
                {item.title}
              </h2>
            </div>
            <p className="text-desc text-[14px] md:text-[16px] ">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
