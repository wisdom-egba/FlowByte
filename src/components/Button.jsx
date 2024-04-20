import React from "react";

const Button = ({ bg = "bg-black", content }) => {
  return (
    <button className={`${bg} text-white px-3 py-2 rounded-md`}>
      {content}
    </button>
  );
};

export default Button;
