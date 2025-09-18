import React, { useEffect, useRef, useState } from "react";

/** Easing and count-up */
const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);
const useCountUp = (
  end: number,
  { duration = 1200, startOn = false }: { duration?: number; startOn?: boolean }
) => {
  const [value, setValue] = useState(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (!startOn) return;

    // Respect reduced motion
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced || duration === 0) {
      setValue(end);
      return;
    }

    const start = performance.now();

    const tick = (now: number) => {
      const elapsed = now - start;
      const p = Math.min(1, elapsed / duration);
      setValue(Math.round(end * easeOutCubic(p)));
      if (p < 1) {
        rafRef.current = requestAnimationFrame(tick);
      }
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [end, duration, startOn]);

  return value;
};

/** Intersection Observer hook */
const useInViewOnce = (
  options: IntersectionObserverInit = {
    threshold: 0.3,
    rootMargin: "0px 0px -20% 0px",
  }
) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [seen, setSeen] = useState(false);

  useEffect(() => {
    if (!ref.current || seen) return;

    const el = ref.current;
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setSeen(true);
        io.disconnect();
      }
    }, options);

    io.observe(el);
    return () => io.disconnect();
  }, [options, seen]);

  return { ref, seen };
};

const CountUpNumber: React.FC<{
  end: number;
  suffix?: string;
  duration?: number;
}> = ({ end, suffix = "", duration = 1200 }) => {
  const { ref, seen } = useInViewOnce();
  const value = useCountUp(end, { duration, startOn: seen });

  return (
    <span ref={ref}>
      {value.toLocaleString()}
      {suffix}
    </span>
  );
};

const Stat = () => {
  return (
    <div className="my-[38px] px-[12px]">
      <div className="max-w-[1334px] flex-wrap gap-x-[30px] lg:gap-x-[90px] justify-between flex md:flex-row flex-col items-start md:items-center mx-auto stat_bg border border-[#EFEFEF] rounded-[30px] gap-[24px] py-[24px] md:py-[64px] px-[24px] md:px-[53px]">
        <div>
          <p className="text-[20px] md:text-3xl lg:text-[24px] leading-[100%] font-semibold text-[#2B2B2B]">
            WITH OVER A <br className="lg:block hidden" /> DECADE OF{" "}
            <br className="md:block hidden" /> EXPERIENCE IN{" "}
            <br className="md:block hidden" /> WEB 3.0
          </p>
        </div>

        <div className="hidden md:flex  lg:w-fit w-full md:flex-row flex-col gap-x-8">
          <div className="text-start md:block flex items-center gap-5 w-full lg:w-[286px]">
            <h2 className="text-primary font-bold text-[24px] md:text-[40px]">
              <CountUpNumber end={50} duration={1000} />+
            </h2>
            <p className="text-[#2B2B2B] font-semibold text-sm md:text-xl">
              Token <br className="text-start md:block hidden" /> Generation
              Event
            </p>
          </div>

          <div className="text-start md:block flex items-center gap-5 w-full md:w=[286px] lg:w-[286px]">
            <h2 className="text-primary font-bold text-[24px] md:text-[40px]">
              <CountUpNumber end={200} duration={1200} />+
            </h2>
            <p className="text-[#2B2B2B] font-semibold text-sm md:text-xl">
              Corporate <br className="text-start md:block hidden" />{" "}
              Organization
            </p>
          </div>

          <div className="text-start md:block flex items-center gap-5 w-full lg:w-[286px]">
            <h2 className="text-primary font-bold text-[24px] md:text-[40px]">
              <CountUpNumber end={100} duration={1100} />+
            </h2>
            <p className="text-[#2B2B2B] whitespace-nowrap md:whitespace-normal font-semibold text-sm md:text-xl">
              Deal Structuring <br className="text-start md:block hidden" /> for
              Crypto Startups
            </p>
          </div>
        </div>
        <div className="flex md:hidden  lg:w-fit w-full md:flex-row flex-col gap-x-8">
          <div className="text-start  md:block grid grid-cols-5 items-center gap-5 w-full lg:w-[286px]">
            <h2 className="text-primary font-bold col-span-1 text-[24px] md:text-[40px]">
              <CountUpNumber end={50} duration={1000} />+
            </h2>
            <p className="text-[#2B2B2B] font-semibold pl-6 col-span-4 text-sm md:text-xl">
              Token <br className="text-start md:block hidden" /> Generation
              Event
            </p>
          </div>

          <div className="text-start md:block grid grid-cols-5 items-center gap-5 w-full md:w-[286px] lg:w-[286px]">
            <h2 className="text-primary col-span-1  font-bold text-[24px] md:text-[40px]">
              <CountUpNumber end={200} duration={1200} />+
            </h2>
            <p className="text-[#2B2B2B] col-span-4 pl-6 font-semibold text-sm md:text-xl">
              Corporate <br className="text-start md:block hidden" />{" "}
              Organization
            </p>
          </div>

          <div className="text-start md:block grid grid-cols-5  items-center gap-5 w-full lg:w-[286px]">
            <h2 className="text-primary font-bold col-span-1 text-[24px] md:text-[40px]">
              <CountUpNumber end={100} duration={1100} />+
            </h2>
            <p className="text-[#2B2B2B] col-span-4 pl-6 whitespace-normal md:whitespace-normal font-semibold text-sm md:text-xl">
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
