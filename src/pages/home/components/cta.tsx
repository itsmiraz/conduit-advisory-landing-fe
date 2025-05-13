import React from "react";
import AiIcon from "@/assets/icons/ai.svg";
import Line from "@/assets/icons/ctaLines.svg";
import SmallLine from "@/assets/icons/smallCTAline.svg";
const Cta = () => {
  return (
    <div className="py-[100px] px-[20px] ">
      <div className="max-w-[1220px] px-[16px] relative mx-auto py-[80px] flex flex-col justify-center items-center  ctaBG rounded-[24px] ">
        <h1 className="text-[40px] md:text-[56px] font-semibold text-center leading-[120%]">
          Ready to grow? <br className="md:block hidden" />
          Book a call today.
        </h1>
        <p className="pt-[14px] text-center text-[14px] md:text-lg leading-[27px] text-[#E2E1E5]  pb-[40px] ">
          We don’t just take on projects — we take responsibility. That’s why{" "}
          <br className="md:block hidden" /> we offer a free AI-powered audit to
          ensure alignment from the start. <br className="md:block hidden" />{" "}
          Let us help you maximize every move.
        </p>
        <div className="buttonBgBottom w-fit rounded-full p-[1px]">
          <button className="flex gap-x-2 text-[14px] md:text-[16px] font-semibold rounded-full buttonBgTop py-[14px] px-[20px] items-center">
            <AiIcon /> Get Started Today
          </button>
        </div>
        <div className="hidden md:block absolute top-0 left-0">
          <Line />
        </div>
        <div className="absolute  md:hidden  top-0 left-0">
          <SmallLine />
        </div>
      </div>
    </div>
  );
};

export default Cta;
