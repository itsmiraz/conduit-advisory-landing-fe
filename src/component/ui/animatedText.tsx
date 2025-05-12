import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";
import { useInView } from "react-intersection-observer";

const AnimatedText = ({ children }: { children: ReactNode }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  const pullupVariant: Variants = {
    initial: { y: 100, opacity: 0 },
    animate: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: { delay: i * 0.08, duration: 0.5, ease: "easeOut" },
    }),
  };

  // Convert children (which could be string, <br/>, or fragments) into words and breaks
  const flatten = (node: ReactNode): ReactNode[] => {
    if (typeof node === "string") return node.split(/(\s+)/).filter(Boolean);
    if (Array.isArray(node)) return node.flatMap(flatten);
    if ((node as any)?.type === "br") return [<br key={Math.random()} />];
    if (typeof node === "object" && (node as any)?.props?.children)
      return flatten((node as any).props.children);
    return [];
  };

  const parts = flatten(children);

  return (
    <div
      ref={ref}
      className="text-[72px]  leading-[110%]  overflow-hidden text-primary font-bold inline-flex flex-wrap justify-center"
    >
      {parts.map((part, i) => {
        if (typeof part === "string") {
          return (
            <span key={i} className="overflow-hidden md:h-[80px]">
              <motion.span
                className="inline-block pr-2"
                variants={pullupVariant}
                initial="initial"
                animate={inView ? "animate" : "initial"}
                custom={i}
              >
                {part}
              </motion.span>
            </span>
          );
        } else {
          return <span key={i} className="w-full h-0">{part}</span>; // handles <br />
        }
      })}
    </div>
  );
};

export default AnimatedText;
