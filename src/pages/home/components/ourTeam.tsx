import Soumik from "@/assets/images/soumik.webp";
import Thomas from "@/assets/images/thomas.webp";
import Devin from "@/assets/images/devin.webp";

const OurTeam = () => {
  const data = [
    {
      id: "thomas-gaffney",
      name: "Thomas Gaffney",
      role: "Founder & Managing Member",
      bullets: [
        "COO, OFA Group (NASDAQ: OFAL): Drives AI strategy, crypto treasury, and cross-border M&A.",
        "Ex–corporate attorney: Advised VCs and startups on financings and token launches.",
        "Global experience: Combines legal, financial, and ops expertise to scale ventures.",
      ],
      image: Thomas,
    },
    {
      id: "devin-ardalan",
      name: "Devin Ardalan",
      role: "Vice President",
      bullets: [
        "VP, Everest Ventures Group: Leads US expansion, fundraising, and partnerships.",
        "Web3 operator: Ex–J17 Crypto, closed deals and hosted ETHDenver.",
        "Founder: Built MVPs at Dandelion, blending product and venture skills.",
      ],
      image: Devin,
    },
    {
      id: "soumik-dey",
      name: "Soumik Dey",
      role: "Technical Consultant",
      bullets: [
        "Co-Founder, CopyFi: Building an advanced copy-trading and risk-management platform bridging retail traders with institutional frameworks.",
        "Web3 builder: Experienced in token strategy, dApps, market analytics, and automation systems supporting startups and advisory clients.",
      ],
      image: Soumik,
    },
  ];

  return (
    <div className="">
      <div className="text-center">
        <button className="bg-primary   text-2xl font-semibold  text-white rounded-full px-[24px] py-[10px] mx-auto">
          Our Team
        </button>
      </div>
      <div className="flex justify-center items-start max-w-[1265px] gap-[20px] mx-auto grid-cols-3 place-items-center py-[50px]">
        {data.map((item, i) => (
          <div
            className="w-[409px] space-y-[47px] px-[24px] py-[20px] bg-[#F7F7F7]  rounded-[20px]"
            key={i}
          >
            <div className="w-[361px] overflow-hidden ">
              <img src={item.image} alt="" />
            </div>
            <div>
              <h2 className="text-[24px] leading-[100%] font-bold text-primary">
                {item.name}
              </h2>
              <p className="text-[#484848] pt-[13px] pb-[20px] text-[20px] font-light  italic">
                {item.role}
              </p>
              <div>
                <ul className="list-disc pl-4">
                  {item.bullets.map((bl) => (
                    <li>
                      <p className="text-[14px] text-[#484848] ">{bl}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurTeam;
