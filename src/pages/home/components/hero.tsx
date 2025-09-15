import HeroImg from "@/assets/images/hero_flat.svg?url";
import LeftArrow from "@/assets/icons/LeftArrow.svg";

const Hero = () => {
  return (
    <div>
      <div className="md:heroBg max-w-[1340px] gap-y-[25px] md:h-[717px] mx-auto overflow-hidden px-[32px] md:px-[77px] py-5 rounded-[34px] md:flex-row flex-col-reverse flex justify-between items-center ">
        <div className="max-w-[541px]">
          <p className="text-primary mb-[12px] md:mb-[24px] font-bold text-[18px] md:text-2xl font-plus-jakarta-sans">
            Conduit Advisory
          </p>
          <h1 className="text-[20px] md:text-[58px] font-bold leading-[100%] ">
            The Conduit of Capital & Crypto Growth
          </h1>
          <p className="text-[14px] md:text-lg pt-[14px] md:pt-[24px] pb-[36px] md:pb-[58px] font-light text-[#2B2B2B] ">
            We specialize in translating blockchain potential into
            institutional-grade opportunities—offering deal structuring, token
            strategy, and advisory services that align traditional finance with
            the decentralized future.
          </p>
          <button className="bg-[#B7995B] w-full md:w-fit justify-between md:justify-center rounded-[12px] text-[16px] md:text-xl font-semibold flex gap-x-3 px-[14px] md:px-[26px] py-[8px] md:py-[14px] text-white">
            Arrange a Strategy Session
            <LeftArrow />
          </button>
        </div>

        <div className="max-w-[600px] px-4 md:px-0">
          <img src={HeroImg} className="w-[368px] md:w-[550px]" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
