import logo from "@/assets/icons/logo.svg?url";

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
  const links = [
      { label: "Privacy Policy", link: "#" },
      { label: "Terms of use", link: "#" },
      { label: "Status", link: "#" },
    ]
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
      <div className="justify-center  md:flex-row flex-col md:justify-center md:items-start items-center w-full pb-[48px] flex ">
        <div className="flex flex-col text-center  md:justify-center items-center md:items-center  justify-center ">
          <img src={logo} className="w-[170px]" alt="" />
          <p className="py-[14px] md:text-center text-center text-[16px">
            With VortExpert as your trusted partner, you can unlock the full <br className="md:block hidden" />
            potential of your online presence and achieve long-lasting success <br  className="md:block hidden"/>
            in the digital landscape.
          </p>
          <div className="flex w-full md:justify-center justify-center items-center gap-x-4">
            {socialLinks.map((item, i) => (
              <a key={i} href={item.link}>
                {item.icon}
              </a>
            ))}
          </div>
        </div>
     
      </div>
      <div className="w-full gap-y-[20px] md:flex-row flex-col flex justify-between items-center border-t border-[#343547]">
        <p className="text-[#A8A8AF] text-center pt-[32px] ">
          © 2025 . All Right Reserved
        </p>


        <div className="flex">
           <ul className="gap-x-4 md:gap-x-8 flex flex-row">
                {links.map((item, index) => (
                  <li key={index}>
                    <a
                      href={item.link}
                      className="text-[14px] md:text-[18px] hover:text-[#a946ff] transition-all ease-in-out duration-300 font-regular "
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
