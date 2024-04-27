import React, { useState } from "react";
import { Cancel, HamburgerMenu, logo } from "../assets/asset";
import Button from "./Button";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const ToggleMenu = () => {
    setToggle(!toggle);
    console.log(toggle);
  };

  const linkClass = ({ isActive }) =>
    isActive
      ? "bg-[#C713B5] text-black px-3 py-2 rounded-md"
      : "text-black bg-slate-200 hover:bg-[#C713B5] px-3 py-2 rounded-md";
  return (
    <>
      <div
        className="flex justify-between px-4 pt-3 w-full border-b h-full"
        // onClick={toggle && ToggleMenu}
      >
        <div className="flex items-center gap-2 z-10">
          <img src={logo} alt="table-24" className=" w-[35px] md:w-[40px]" />
          <h1 className=" text-[24px] md:text-[34px] text-[#3d3d3d] font-black">
            FlowByte
          </h1>
        </div>
        <div className="flex items-center ">
          <div
            className={`${
              toggle
                ? " bg-slate-200 fixed top-0 right-0 w-2/3 md:w-full h-full flex-col flex items-start outline-none z-40 py-10 md:py-0  px-3 md:px-0  "
                : "hidden"
            } md:outline-none md:flex md:flex-row gap-6 md:gap-7 md:items-center md:relative md:bg-transparent `}
          >
            <div className="fixed top-0 right-0 py-3 px-2">
              <Cancel toggle={ToggleMenu} />
            </div>
            <NavLink to="/pricing" className={linkClass}>
              Pricing
            </NavLink>
            <NavLink to="/knowledge-areas" className={linkClass}>
              Knowledge Area
            </NavLink>
            <Button content="Get Started" />
          </div>
          <div>
            <HamburgerMenu toggle={ToggleMenu} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
