import React from "react";

const Button = ({
  bg = "bg-[#6455C2]",
  content,
  hover = "hover:bg-[#C713B5]",
}) => {
  return (
    <button className={`${bg} ${hover} text-white px-3 py-2 rounded-md`}>
      {content}
    </button>
  );
};

export default Button;
