import React from "react";
import logo from "@/assets/images/logo.png";
import { motion } from "framer-motion";
import Menu from "@/assets/icons/menu.svg";
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
    <div className="px-[20px]">
      <motion.div
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-[1220px] mt-[24px] z-40 md:mt-[32px] mx-auto bg-[#D6BEFF14] rounded-[12px] border-[1px] border-[#FFFFFF14] p-[6px] md:p-[10px] font-sans flex justify-between items-center"
      >
        <div className="pl-2">
          <img src={logo} className="md:w-fit w-[119px]" alt="" />
        </div>
        <ul className="hidden md:flex  items-center gap-x-5">
          {navLinks.map((item, i) => (
            <li key={i} className="text-[16px] font-medium ">
              <a className="cursor-pointer">{item.label}</a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-x-2">
          <button className="buttonInnerShadow z-50 rounded-[10px] py-[10px] px-[20px] md:px-[28px]  font-semibold text-[12px] md:text-[16px] ">
            Book A Call
          </button>
          <button className="block md:hidden">
            <Menu />
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Header;
