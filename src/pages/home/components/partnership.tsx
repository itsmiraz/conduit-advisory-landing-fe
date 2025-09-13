import RadioButton from "@/assets/icons/RadioButton.svg";
import DollarIcon from "@/assets/icons/Dollar.svg";
import MapIcon from "@/assets/icons/MapIcon.svg";
import Setting from "@/assets/icons/Setting.svg";

import PartnerImage from "@/assets/images/partner.webp";

const Partnership = () => {
  return (
    <div className="max-w-[1263px] mt-32 flex items-center justify-between gap-10 mx-auto">
      <div className="md:w-[578px]">
        <div className="bg-[#FFFDFD] border-[#E6E6E6] border w-fit rounded-[24px] px-[24px] py-[12px] flex gap-x-2 items-center">
          <RadioButton />
          <p className="text-desc  text-[16px] ">
            Maximize Deals, Minimize Friction
          </p>
        </div>

        <h2 className="text-[36px] mt-[14px] mb-[24px]  font-bold text-desc ">
          Partnerships Built for the <br /> Next Economy
        </h2>
        <p className="text-[16px] text-desc">
          By combining institutional-grade standards with decentralized
          innovation, we help partners collaborate with confidence and unlock
          new market opportunities.
        </p>
        <div className="mt-[24px] space-y-[24px]">
          <div className="flex gap-x-2 items-center">
            <DollarIcon />
            <p className="text-desc font-semibold text-[16px]">
              Design clear token and capital structures for long-term alignment
            </p>
          </div>
          <div className="flex gap-x-2 items-center">
            <MapIcon />
            <p className="text-desc font-semibold text-[16px]">
              Support M&A and venture financing with crypto-specific frameworks
            </p>
          </div>
          <div className="flex gap-x-2 items-center">
            <Setting />
            <p className="text-desc font-semibold text-[16px]">
              Streamline execution with standardized deal mechanics
            </p>
          </div>
        </div>
      </div>
      <div>
        <img src={PartnerImage} alt="" />
      </div>
    </div>
  );
};

export default Partnership;
