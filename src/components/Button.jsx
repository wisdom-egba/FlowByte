import React from "react";

const Button = ({
  bg = "bg-[#6455C2]",
  content,
  hover = "hover:bg-[#C713B5]",
}) => {
  return (
    <button
      className={`${bg} ${hover} text-white md:text-[18px] px-3 py-2 md:px-10 md:py-4 rounded-md`}
    >
      {content}
    </button>
  );
};

export default Button;
