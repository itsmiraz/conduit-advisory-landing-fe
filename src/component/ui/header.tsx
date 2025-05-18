import React, { useState } from "react";
import logo from "@/assets/icons/logo.svg?url";
import { motion } from "framer-motion";
import Menu from "@/assets/icons/menu.svg";
import Close from "@/assets/icons/close.svg";
import SvgLogo from  "@/assets/icons/VorteXpert.svg"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

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
    <div className="px-[20px]">
      <div
     
        className="max-w-[1220px] mt-[24px] z-40 md:mt-[32px] mx-auto bg-[#D6BEFF14] rounded-[12px] border-[1px] border-[#FFFFFF14] p-[6px] md:p-[10px] font-sans flex justify-between relative items-center"
      >
        <div className="pl-2">
          <img src={logo} className="md:w-fit w-[119px]" alt="" />
        </div>
        <ul className="hidden md:flex  items-center gap-x-5">
          {navLinks.map((item, i) => (
            <li key={i} className="text-[16px] font-medium ">
              <a className="cursor-pointer transition-all ease-in-out duration-300 hover:text-[#a946ff]">{item.label}</a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-x-2">
          <button className="buttonInnerShadow z-40 rounded-[10px] py-[10px] px-[20px] md:px-[28px]  font-semibold hover:bg-[#A13BFF] hover:shadow-inner   transition-all ease-in-out duration-300  text-[12px] md:text-[16px] ">
            Book A Call
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="block md:hidden"
          >
            <Menu />
          </button>
        </div>
        <div
          className={`${
            isOpen ? "top-0" : "-top-[500px]"
          } absolute  z-50 left-0 bg-[#371e63]/10 pb-[40px] px-[24px] pt-[24px] w-full border rounded-[12px] flex flex-col justify-center transition-all ease-in-out duration-300 items-center border-[#FFFFFF14] backdrop-blur-lg`}
        >
          <div className="w-full flex justify-end">
            <button
              onClick={() => setIsOpen(false)}
              className=" justify-end flex md:hidden"
            >
              <Close />
            </button>
          </div>
          <div className="pt-[24px]">
            <img src={logo} className="w-[176px]" alt="" />
          </div>
          <ul className="flex pt-[24px] flex-col  items-center gap-5">
            {navLinks.map((item, i) => (
              <li key={i} className="text-[16px] font-medium ">
                <a className="cursor-pointer">{item.label}</a>
              </li>
            ))}
          </ul>
          <button className="buttonInnerShadow z-40 mt-[24px] rounded-[10px] py-[10px] px-[20px] md:px-[28px]  font-semibold text-[12px] md:text-[16px] ">
            Book A Call
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
