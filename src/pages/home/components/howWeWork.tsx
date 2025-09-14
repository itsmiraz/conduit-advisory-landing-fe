import React from "react";

const HowWeWork = () => {
  const data = [
    {
      id: "strategy",
      title: "Strategy",
      paragraphs: [
        "We define clear goals, markets, and growth levers—aligning token design, treasury, and capital priorities with execution.",
        "This stage cuts through noise to set the foundation for long-term growth and market positioning.",
      ],
      dividerAfter: true,
    },
    {
      id: "structure",
      title: "Structure",
      paragraphs: [
        "We design deal mechanics, token frameworks, and capital flows—built for clarity, efficiency, and scale.",
        "This structure ensures ventures can move fast while staying organized for growth.",
      ],
      dividerAfter: true,
    },
    {
      id: "execute",
      title: "Execute",
      paragraphs: [
        "We take strategy into action—driving token launches, treasury moves, partnerships, and investor engagement.",
        "Every initiative is tracked against clear milestones to ensure steady progress.",
      ],
      dividerAfter: true,
    },
    {
      id: "scale",
      title: "Scale",
      paragraphs: [
        "We turn traction into reach—expanding distribution, deepening community, and unlocking partner channels that multiply adoption.",
        "Playbooks and network effects make growth compounding, not linear.",
      ],
      dividerAfter: true,
    },
  ];

  return (
    <div className="bg-primary my-[188px]  px-[96px] py-[120px]">
      <h2 className="text-[#F7F7F7] text-[24px] font-bold">How We Work</h2>
      <div>
        {data.map((item, i) => (
          <div
            key={i}
            className="grid place-items-start grid-cols-2 justify-between items-start py-10  border-b border-[#1C1C1C]"
          >
            <h3 className="text-[#F7F7F7] font-medium text-[40px]">
              {item.title}
            </h3>
            <div className="space-y-[20px]">
              <p className="text-[#F7F7F7] text-xl ">{item.paragraphs[0]}</p>
              <p className="text-[#F7F7F7] text-xl ">{item.paragraphs[1]}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowWeWork;
