import React, { useState } from "react";
import Logo from "@/assets/images/logo.svg";
import { motion } from "framer-motion";
import Menu from "@/assets/icons/Menu.svg";
import Close from "@/assets/icons/Close.svg";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    {
      link: "/",
      label: "About Us",
    },
    {
      link: "/",
      label: "Our Team",
    },
    {
      link: "/",
      label: "Services",
    },
    {
      link: "/",
      label: "Contact Us",
    },
  ];

  return (
    <div className="px-[20px]  ">
      <div className="max-w-[1441px]  z-40 mx-auto  p-[6px] font-sans flex justify-between relative items-center">
        <div className="pl-2">
          {/* <img src={logo} className="md:w-fit w-[119px]" alt="" /> */}
          <Logo />
        </div>
        <ul className="hidden md:flex  items-center gap-x-5">
          {navLinks.map((item, i) => (
            <li key={i} className="text-[20px] font-regular ">
              <a className="cursor-pointer transition-all ease-in-out duration-300 ">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex md:hidden items-center gap-x-2">
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
            {/* <img src={logo} className="w-[176px]" alt="" /> */}
            <Logo />
          </div>
          <ul className="flex pt-[24px] flex-col  items-center gap-5">
            {navLinks.map((item, i) => (
              <li key={i} className="text-[16px] font-medium ">
                <a className="cursor-pointer">{item.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
