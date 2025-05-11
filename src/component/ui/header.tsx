import React from "react";
import logo from "@/assets/images/logo.png";

const Header = () => {
  const navLinks = [
    {
      link: "/",
      label: "Who Is This For?",
    },
    {
      link: "/",
      label: "Our Expertise",
    },
    {
      link: "/",
      label: "Why Choose Us?",
    },
    {
      link: "/",
      label: "Case Studies",
    },
  ];

  return (
    <div className="max-w-[1220px] z-40 mt-[32px] mx-auto bg-[#D6BEFF14] rounded-[12px] border-[1px] border-[#FFFFFF14] p-[10px] font-sans flex justify-between items-center">
     <div className="pl-2">
       <img src={logo} alt="" />
     </div>
      <ul className="flex items-center gap-x-5">
        {navLinks.map((item) => (
          <li className="text-[16px] font-medium ">
            <a className="cursor-pointer">{item.label}</a>
          </li>
        ))}
      </ul>
      <button className="buttonInnerShadow rounded-[10px] py-[10px] px-[28px]  font-semibold text-[16px] ">Book A Call</button>
    </div>
  );
};

export default Header;
