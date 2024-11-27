import React from "react";

const HollowButton = ({ title }) => {
  return (
    <button className="text-sm font-raleway px-6 py-3 font-extrabold rounded-full text-[#F9D423] border-[#F9D423] border-2 bg-gradient-to-l from-[#e4b40d] to-[#ffe68f] bg-no-repeat bg-left-bottom bg-[length:0%_100%] transition-all duration-200 tracking-wide ease-in hover:bg-[length:100%_100%] hover:text-black">
      {title}
    </button>
  );
};

export default HollowButton;
