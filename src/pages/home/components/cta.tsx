import AiIcon from "@/assets/icons/ai.svg";
import Line from "@/assets/icons/ctaLines.svg?url";
import SmallLineB from "@/assets/icons/smallCTAlineB.svg?url";
import SmallLineT from "@/assets/icons/smallCTAlineT.svg?url";
import AnimatedText from "@/component/ui/animatedText";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Cta = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <div ref={ref} className="py-[100px] px-[20px] ">
      <motion.div
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: inView ? 0 : 80, opacity: inView ? 1 : 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-[1220px] px-[12px] md:px-[16px] relative mx-auto py-[80px] flex flex-col justify-center items-center  ctaBG rounded-[24px] "
      >
        <AnimatedText className="text-[38px] md:text-[56px] font-semibold text-center leading-[120%]">
          <>
            Ready to grow? <br className="md:block hidden" />
            Book a call today.
          </>
        </AnimatedText>

        <p className="pt-[14px] text-center text-[14px] md:text-lg leading-[21px] md:leading-[27px] text-[#E2E1E5]  pb-[40px] ">
          We don’t just take on projects — we take responsibility. That’s why{" "}
          <br className="md:block hidden" /> we offer a free AI-powered audit to
          ensure alignment from the start. <br className="md:block hidden" />{" "}
          Let us help you maximize every move.
        </p>

        <div className="absolute   block top-0 left-0">
          <img className="" src={Line} alt="" />
        </div>
        <div className="buttonBgBottom w-fit relative rounded-full z-40 p-[1px]">
          <button className="flex gap-x-2 z-40 relative text-[14px] md:text-[16px] font-semibold rounded-full buttonBgTop py-[14px] px-[20px] items-center">
            <AiIcon /> Get Started Today
          </button>
        </div>
        <div className="absolute -z-50  md:hidden block top-0 left-0">
          <img className="z-10" src={SmallLineT} alt="" />
        </div>
        <div className="absolute z-10 md:hidden block  bottom-0 right-0">
          <img src={SmallLineB} alt="" />
        </div>
      </motion.div>
    </div>
  );
};

export default Cta;
