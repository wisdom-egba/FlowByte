import React, { useState } from "react";
import { Cancel, Hamburger, logo } from "../assets/asset";
import Button from "./Button";
import { Link } from "react-router-dom";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const ToggleMenu = () => {
    setToggle(!toggle);
    console.log(toggle);
  };
  return (
    <>
      <div className="flex justify-between px-4 pt-3 w-full">
        <div className="flex items-center gap-2 z-10">
          <img src={logo} alt="table-24" className=" w-[35px] md:w-[40px]" />
          <h1 className=" text-[24px] md:text-[34px] text-[#3d3d3d] font-black">
            Tab-24
          </h1>
        </div>
        <div className="flex items-center ">
          <div
            className={`${
              toggle
                ? "hidden"
                : " bg-slate-200 fixed top-0 right-0 w-2/3 md:w-full h-full flex-col flex items-start outline-none z-20 py-10 md:py-0  px-3 md:px-0 "
            } md:outline-none md:flex md:flex-row gap-6 md:gap-7 md:items-center md:relative md:bg-transparent `}
          >
            <div className="fixed top-0 right-0 py-3 px-2">
              <Cancel toggle={ToggleMenu} />
            </div>
            <Link to="/">Pricing</Link>
            <Link to="/">Knowledge Area</Link>
            <Button content="Get Started" />
          </div>
          <div>
            <Hamburger toggle={ToggleMenu} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
