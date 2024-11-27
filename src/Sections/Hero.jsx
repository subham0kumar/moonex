import Gradientbutton from "../Components/Gradientbutton";
import HollowButton from "../Components/HollowButton";
import OrbitalRings from "../Components/OrbitalRings";
import Radialgradiant from "../Components/Radialgradiant";
import Sun from "../Components/Sun";
import React from "react";

const Hero = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} className="h-[990px]">
      <Radialgradiant top={"-185px"} left={"-150px"} />
      <Radialgradiant top={"280px"} left={"850px"} />
      <OrbitalRings />
      <img
        src="./logo/star-img (1).svg"
        className="hidden lg:block absolute top-[30vh] left-[14vw] animate-pulse"
      />
      <img
        src="./logo/star-img (2).svg"
        className="lg:w-fit w-[50px] top-[12vh] left-[70vw] absolute lg:top-[176px] lg:left-[1269px] animate-pulse"
      />
      <img
        src="./logo/star-img.svg"
        className="hidden lg:block absolute top-[721px] left-[1256px] animate-pulse"
      />
      <Sun />
      <div className="w-full lg:w-fit lg:text-left text-center px-4 absolute top-[20vh] left-1/2 -translate-x-1/2 lg:top-[55vh] lg:left-[9vw] lg:translate-x-0">
        <h1 className="text-[2.7rem] lg:text-[4.7rem] lg:leading-[4.5rem] font-neueBold text-white font-extrabold">
          Trusted Multi-Chain <br />
          <span className="text-[#F9D423]">DEX</span> Platform
        </h1>
        <h3 className="mt-3 text-md lg:text-[1.6rem] leading-[34px] text-[#9E9E9E] font-neueLight">
          Trade, earn, and own crypto on the all-in-one multi-chain DEX
        </h3>
        <span className="flex gap-5 items-center justify-start py-10">
          <Gradientbutton title={"Connect Wallet"} />
          <HollowButton title={"Trade Crypto"} />
        </span>
      </div>
    </div>
  );
});

export default Hero;
