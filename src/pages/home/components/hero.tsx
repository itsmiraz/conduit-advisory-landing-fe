import BulbIcon from "@/assets/icons/bulb.svg";
import AiIcon from "@/assets/icons/ai.svg";
import IndigoGlow from '@/assets/glows/indio-glow.png'
import VioLetGlow from '@/assets/glows/violet-glow.png'
const Hero = () => {
  return (
    <div className="pt-[88px] w-full relative flex justify-center items-center pb-[320px]">
      {/* Main Contents */}
      <div className="flex relative z-30 flex-col justify-center items-center">
        <p className="uppercase px-[16px] py-[10px] w-fit  font-semibold text-[16px] rounded-[40px] flex items-center gap-x-4 bg-[#D6BEFF]/10">
          <BulbIcon /> End-to-End Solutions
        </p>
        <h1 className="text-[72px] py-[12px] text-center font-bold text-white leading-[120%]">
          Build. Launch. Scale. <br />
          All in One Place.
        </h1>
        <p className="text-lg leading-[27px] text-center">
          A full-stack approach for every niche, at every stage — delivering
          strategic, scalable, and <br /> revenue-driven digital innovation as a growth
          partner.
        </p>
        <div className="pt-[40px] flex justify-center gap-4 items-center">
         <div className="buttonBgBottom w-fit rounded-full p-[1px]">
             <button className="flex    gap-x-2 font-semibold rounded-full buttonBgTop py-[14px] px-[20px] items-center">
            <AiIcon /> Get Started Today
          </button>
         </div>
          <button className="buttonInnerShadow rounded-full py-[16px] px-[28px]  font-semibold text-[16px] ">Learn More</button>
        </div>
      </div>
      {/* Background Glows */}
        <img className=" absolute z-10 -top-[750px] -right-[600px]" src={VioLetGlow} alt="" />
        <img className="absolute z-10 -bottom-10 -left-72" src={IndigoGlow} alt="" />
    </div>
  );
};

export default Hero;
