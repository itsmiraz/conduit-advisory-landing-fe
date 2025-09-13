import React from "react";

const Stat = () => {
  return (
    <div className="my-[38px]">
      <div className="max-w-[1334px] gap-x-[90px] justify-between flex items-center mx-auto stat_bg border border-[#EFEFEF]  rounded-[30px] py-[64px] px-[53px]">
        <div>
          <p className="text-[24px] font-semibold text-[#2B2B2B] ">
            WITH OVER A <br /> DECADE OF <br /> EXPERIENCE IN <br /> WEB 3.0
          </p>
        </div>

        <div className="flex gap-x-8">
          <div className="md: w-[286px]">
            <h2 className="text-primary font-bold text-[40px] ">50+</h2>
            <p className="text-[#2B2B2B] font-semibold text-xl">
              Token <br /> Generation Event
            </p>
          </div>
          <div className="md: w-[286px]">
            <h2 className="text-primary font-bold text-[40px] ">200+</h2>
            <p className="text-[#2B2B2B] font-semibold text-xl">
              Corporate <br /> Organization
            </p>
          </div>
          <div className="md: w-[286px]">
            <h2 className="text-primary font-bold text-[40px] ">100+</h2>
            <p className="text-[#2B2B2B] font-semibold text-xl">
              Deal Structuring <br /> for Crypto Startups
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stat;
