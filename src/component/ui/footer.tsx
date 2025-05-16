import logo from "@/assets/images/logo.png";

import Linkedin from "@/assets/icons/linkedin.svg";
import Insta from "@/assets/icons/insta.svg";
import Facebook from "@/assets/icons/facebook.svg";
import Twitter from "@/assets/icons/twitter.svg";
const Footer = () => {
  const footerLinks = {
    // Services: [
    //   { label: "Backend Development", link: "#" },
    //   { label: "Design", link: "#" },
    //   { label: "Dev Ops", link: "#" },
    //   { label: "Frontend Development", link: "#" },
    //   { label: "Marketing", link: "#" },
    //   { label: "Vortexpert's AI & Data Research", link: "#" },
    // ],

    // "Useful link": [
    //   { label: "Blog", link: "#" },
    //   { label: "Expertise", link: "#" },
    //   { label: "Our Portfolio", link: "#" },
    // ],
    Legal: [
      { label: "Privacy Policy", link: "#" },
      { label: "Terms of use", link: "#" },
      { label: "Status", link: "#" },
    ],
  };
  const socialLinks = [
    {
      icon: <Linkedin />,
      link: "https://ca.linkedin.com/company/vortexpert",
    },
    {
      icon: <Insta />,
      link: "https://www.instagram.com/vortexpert/",
    },
    {
      icon: <Facebook />,
      link: "#", // Vortexpert's Facebook page wasn't found
    },
    {
      icon: <Twitter />,
      link: "#", // Vortexpert's Twitter account wasn't found
    },
  ];

  return (
    <div className="max-w-[1220px] px-[20px] py-[32px] mx-auto ">
      <div className="justify-between  md:flex-row flex-col md:justify-between md:items-start items-center w-full pb-[48px] flex ">
        <div className="max-w-[380px] flex flex-col  md:justify-start items-center md:items-start  justify-center ">
          <img src={logo} className="w-[170px]" alt="" />
          <p className="py-[14px] md:text-start text-center text-[16px">
            With VortExpert as your trusted partner, you can unlock the full
            potential of your online presence and achieve long-lasting success
            in the digital landscape.
          </p>
          <div className="flex w-full md:justify-start justify-center items-center gap-x-4">
            {socialLinks.map((item, i) => (
              <a key={i} href={item.link}>
                {item.icon}
              </a>
            ))}
          </div>
        </div>
        {/* Render each category in its own column */}
        <div className=" flex mt-[24px] md:mt-0 flex-wrap gap-14">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div className="">
              <h3 className="text-[12px] md:text-[16px] pb-[12px]">{category}</h3>
              <ul className="space-y-[14px]">
                {links.map((item, index) => (
                  <li key={index}>
                    <a
                      href={item.link}
                      className="text-[14px] md:text-[18px] font-semibold hover:underline"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full border-t border-[#343547]">
        <p className="text-[#A8A8AF] text-center pt-[32px] ">
          © 2025 . All Right Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
