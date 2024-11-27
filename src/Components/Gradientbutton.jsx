import React from "react";

const Gradientbutton = ({ title }) => {
  return (
    <button className="text-sm font-raleway px-6 py-3 font-extrabold rounded-full bg-gradient-to-r from-[#e4b40d] to-[#ffe68f] bg-no-repeat bg-left-bottom bg-[length:100%_100%] transition-all duration-200 tracking-wide ease-in hover:bg-[length:0%_100%] border-2 border-[#e4b40d] hover:text-[#e4b40d]">
      {title}
    </button>
  );
};

export default Gradientbutton;
