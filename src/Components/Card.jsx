import React from "react";

const Card = ({title, description, icon}) => {
  return (
    <div className="fadeInAnimation2 group flex flex-col space-y-[20px] border border-[#48484844] w-[296px] h-[281px] rounded-2xl font-raleway bg-gradient-to-br from-gray-800/50 to-gray-900 p-6 backdrop-blur-sm">
      <span className="">
          <div className="mb-4 flex h-[68px] w-[68px] items-center justify-center rounded-full bg-gray-800">
            <img src={icon} alt="icon" className="group-hover:animate-bounce" />
          </div>
      </span>

      <span>
        <h3 className="mb-2 text-xl leading-7 font-semibold text-[#ecf1f0]">{title}</h3>
        <p className="text-[16px] leading-6 text-[#b6b6b6]">
          {description}
        </p>
      </span>
    </div>
  );
};

export default Card;
