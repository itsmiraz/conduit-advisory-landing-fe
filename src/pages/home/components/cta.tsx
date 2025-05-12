import React from "react";
import AiIcon from "@/assets/icons/ai.svg";
import Line from "@/assets/icons/ctaLines.svg";
const Cta = () => {
  return (
    <div className="py-[100px] ">
      <div className="max-w-[1220px] relative mx-auto py-[80px] flex flex-col justify-center items-center  ctaBG rounded-[24px] ">
        <h1 className="text-[56px] font-semibold text-center leading-[120%]">
          Ready to grow? <br />
          Book a call today.
        </h1>
        <p className="pt-[14px] text-center text-lg leading-[27px] text-[#E2E1E5]  pb-[40px] ">
          We don’t just take on projects — we take responsibility. That’s why{" "}
          <br /> we offer a free AI-powered audit to ensure alignment from the
          start. <br /> Let us help you maximize every move.
        </p>
        <div className="buttonBgBottom w-fit rounded-full p-[1px]">
          <button className="flex gap-x-2 font-semibold rounded-full buttonBgTop py-[14px] px-[20px] items-center">
            <AiIcon /> Get Started Today
          </button>

          <div className="absolute top-0 left-0">
            <Line />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cta;
