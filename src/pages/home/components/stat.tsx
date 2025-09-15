import React from "react";

const Stat = () => {
  return (
    <div className="my-[38px] px-[12px]">
      <div className="max-w-[1334px] gap-x-[90px] justify-between flex md:flex-row flex-col items-start md:items-center mx-auto stat_bg border border-[#EFEFEF]  rounded-[30px] gap-[24px] py-[24px] md:py-[64px] px-[24px] md:px-[53px]">
        <div>
          <p className="text-[20px] md:text-[24px] leading-[100%] font-semibold text-[#2B2B2B] ">
            WITH OVER A <br className=" md:block hidden" /> DECADE OF{" "}
            <br className=" md:block hidden" /> EXPERIENCE IN{" "}
            <br className="md:block hidden" /> WEB 3.0
          </p>
        </div>

        <div className="flex md:w-fit w-full md:flex-row flex-col gap-x-8">
          <div className=" text-start md:block flex items-center  gap-5   w-full md:w-[286px]">
            <h2 className="text-primary font-bold text-[24px] md:text-[40px] ">
              50+
            </h2>
            <p className="text-[#2B2B2B] font-semibold text-sm md:text-xl">
              Token <br className="text-start md:block hidden" /> Generation
              Event
            </p>
          </div>
          <div className=" text-start md:block flex items-center  gap-5   w-full md:w-[286px]">
            <h2 className="text-primary font-bold text-[24px] md:text-[40px] ">
              200+
            </h2>
            <p className="text-[#2B2B2B] font-semibold text-sm md:text-xl">
              Corporate <br className="text-start md:block hidden" />{" "}
              Organization
            </p>
          </div>
          <div className=" text-start md:block flex items-center  gap-5   w-full md:w-[286px]">
            <h2 className="text-primary font-bold text-[24px] md:text-[40px] ">
              100+
            </h2>
            <p className="text-[#2B2B2B] whitespace-nowrap md:whitespace-normal font-semibold text-sm md:text-xl">
              Deal Structuring <br className="text-start md:block hidden" /> for
              Crypto Startups
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stat;
