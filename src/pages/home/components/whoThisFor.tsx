import StarIcon from "@/assets/icons/star.svg";
import SmeIcon from "@/assets/images/sme.png";
import StartUpIcon from "@/assets/images/startups.png";
import InovatorIcon from "@/assets/images/innovators.png";
import CorporateIcon from "@/assets/images/corporates.png";
import backGroundImage from '@/assets/images/whoThisForBg.png'
const audiences = [
  {
    title: "Innovators",
    icon: InovatorIcon,
    description:
      "Visionaries bringing new ideas to life — builders, creatives, disruptors, and problem solvers.",
  },
  {
    title: "Startups",
    icon: StartUpIcon,
    description:
      "Early-stage teams seeking clarity, traction, and systems to scale what they’re creating.",
  },
  {
    title: "SMEs",
    icon: SmeIcon,
    description:
      "Established businesses ready to evolve and systemize, grow, and sharpen their digital edge.",
  },
  {
    title: "Corporations",
    icon: CorporateIcon,
    description:
      "Larger organizations looking for agile, full-stack partners to drive innovation and deliver results.",
  },
];
const WhoThisFor = () => {
  return (
    <div className="py-[31px]">
      <div className="flex flex-col justify-center items-center">
        <p className="uppercase px-[16px] py-[10px] w-fit  font-semibold text-[16px] rounded-[40px] flex items-center gap-x-4 bg-[#D6BEFF]/10">
          <StarIcon /> WHO IS THIS FOR?
        </p>
        <h2 className="text-[40px] py-[10px] text-center font-instrument leading-[120%] font-medium">
          We work with forward-thinking teams across every <br /> industry and
          growth stage — to build, launch, and scale <br />{" "}
          <span className="text-[#BB7AFF]"> something that matters.</span>
        </h2>
        <div 
          style={{ backgroundImage: `url(${backGroundImage})` }} className="h-[590px] grid grid-cols-2  w-[1010px]  bg-no-repeat bg-cover bg-center ">
          {audiences.map((item, i) => (
            <div
              className="px-[40px] flex flex-col justify-center items-center py-[72px]"
              key={i}
            >
              <img src={item.icon} alt="" />
              <h3 className="pt-[16px] text-[16px] pb-[8px] font-instrument font-semibold leading-[27px] text-center">
                {item.title}
              </h3>
              <p className=" text-[16px] leading-[24px] font-instrument text-center">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhoThisFor;
