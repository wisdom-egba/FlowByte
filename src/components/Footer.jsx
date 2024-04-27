import React from "react";
import { Link } from "react-router-dom";
import { logo } from "../assets/asset";
const Footer = () => {
  return (
    <>
      <div className="   flex flex-col md:flex-row w-full items-start gap-9 md:gap-0 justify-around border border-t-slate-200 p-[20px] pb-16 bg-slate-100">
        <div className="flex items-center justify-center">
          <a href="/">
            <img src={logo} alt="table-24" className=" w-[30px] md:w-[35px]" />
            <h1 className=" text-[24px] md:text-[25px] text-[#3d3d3d] font-black">
              FlowByte
            </h1>
          </a>
        </div>
        <div>
          <h3 className=" mb-2 font-semibold">Support</h3>
          <div className="flex flex-col ">
            <a href="/faq" className="hover:underline">
              F.A.Q
            </a>
            <a href="tel:1234567" className="hover:underline">
              Call Us
            </a>
            <a href="mailto:flowbyte@gmail.com" className="hover:underline">
              Mail Us
            </a>
            <a href="/contact" className="hover:underline">
              Contact FlowByte
            </a>
          </div>
        </div>
        <div>
          <h3 className=" mb-2 font-semibold">Comapny</h3>
          <div className="flex flex-col ">
            <a href="#" className="hover:underline">
              About
            </a>
            <a href="#" className="hover:underline">
              Blog
            </a>
            <a href="#" className="hover:underline">
              Press
            </a>
          </div>
        </div>
        <div>
          <h3 className=" mb-2 font-semibold">Terms and policies</h3>
          <div className="flex flex-col ">
            <a href="#" className="hover:underline">
              Policies
            </a>
            <a href="#" className="hover:underline">
              Terms of use
            </a>
            <a href="#" className="hover:underline">
              Code of conduct
            </a>
            <a href="#" className="hover:underline">
              Privacy
            </a>
          </div>
        </div>
      </div>
      <div className="flex items-center   justify-center w-full py-2">
        Copyright © 2024 FlowByte®
      </div>
    </>
  );
};

export default Footer;
