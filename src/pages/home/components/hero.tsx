import HeroImg from "@/assets/images/hero_flat.svg?url";
import LeftArrow from "@/assets/icons/LeftArrow.svg";

const Hero = () => {
  return (
    <div>
      <div className="heroBg max-w-[1340px] h-[717px] mx-auto overflow-hidden px-[77px] py-5 rounded-[34px]  flex justify-between items-center ">
        <div className="max-w-[541px]">
          <p className="text-primary mb-[24px] font-bold text-2xl font-plus-jakarta-sans">
            Conduit Advisory
          </p>
          <h1 className="text-[58px] font-bold leading-[100%] ">
            The Conduit of Capital & Crypto Growth
          </h1>
          <p className="text-lg pt-[24px] pb-[58px] font-light text-[#2B2B2B] ">
            We specialize in translating blockchain potential into
            institutional-grade opportunities—offering deal structuring, token
            strategy, and advisory services that align traditional finance with
            the decentralized future.
          </p>
          <button className="bg-[#B7995B] rounded-[12px] text-xl font-semibold flex gap-x-3 px-[26px] py-[14px] text-white">
            Arrange a Strategy Session
            <LeftArrow />
          </button>
        </div>

        <div className="max-w-[600px]">
          <img src={HeroImg} className="w-[550px]" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
