import Radialgradiant from "../Components/Radialgradiant";
import React from "react";

const About = React.forwardRef((props, ref) => {
  const elements = [];

  for (let i = 0; i < 5; i++) {
    elements.push(
      <span
        key={i}
        className="lg:mt-0 px-2 lg:py-8 lg:px-32 grid grid-cols-3  place-items-center text-white/70"
      >
        <span className="lg:py-0 py-6 border-[#484848] w-full h-full border-r border-b lg:border-0 flex justify-start text-[12px] lg:text-xl text-left font-neueLight">
          {i + 1} . Point no {i + 1} this
        </span>
        <span className="lg:py-0 py-6 border-[#484848] lg:w-full h-full border-r border-b lg:border-0 lg:px-0 px-10 flex justify-center">
          <img src="./logo/tick.svg" />
        </span>
        <span className="lg:py-0 py-6 border-[#484848] lg:w-full h-full lg:px-16 lg:mx-10 border-b lg:border-0 px-10 flex justify-end">
          <img src="./logo/cross.svg" />
        </span>
      </span>
    );
  }

  return (
    <div ref={ref} className="pb-10 items-center lg:items-start lg:mx-20 font-neueBold flex flex-col gap-8">
      <section className="lg:mx-12 px-1">
        <h2 className="text-[2.5rem] lg:text-[2.8rem] text-white leading-[44px]">
          Why <span className="text-[#e4b40d]">MoonEX</span> ?
        </h2>
      </section>
      <Radialgradiant top={"1175px"} left={"100px"} />
      <Radialgradiant top={"900px"} left={"1200px"} />
      <section className="fadeInAnimation  relative -z-30 w-[90vw] lg:w-[1319px] rounded-3xl h-[584px] bg-[#0C1B28]">
        {/* table bars */}
        <hr className="hidden lg:block absolute h-[2px] w-[85vw] lg:w-[1200px] top-[110px] left-1/2 -translate-x-1/2 border-white/10" />
        <hr className="hidden lg:block absolute h-[2px] w-[85vw] lg:w-[1200px] top-[200px] left-1/2 -translate-x-1/2 border-white/10" />
        <hr className="hidden lg:block absolute h-[2px] w-[85vw] lg:w-[1200px] top-[290px] left-1/2 -translate-x-1/2 border-white/10" />
        <hr className="hidden lg:block absolute h-[2px] w-[85vw] lg:w-[1200px] top-[380px] left-1/2 -translate-x-1/2 border-white/10" />
        <hr className="hidden lg:block absolute h-[2px] w-[85vw] lg:w-[1200px] top-[470px] left-1/2 -translate-x-1/2 border-white/10" />
        <hr className="hidden lg:block absolute h-[2px] w-[85vw] lg:w-[1200px] top-[560px] left-1/2 -translate-x-1/2 border-white/10" />
        <hr className="hidden lg:block absolute h-[2px] w-[550px] top-1/2 -translate-y-1/2 left-[200px] border-white/10 rotate-90" />
        <hr className="hidden lg:block absolute h-[2px] w-[550px] top-1/2 -translate-y-1/2 left-[625px] border-white/10 rotate-90" />

        {/* table heading  */}

        <span className="pt-12 flex items-center lg:justify-around justify-between text-[#e4b40d]">
          <span className="text-sm font-neue pl-2 lg:text-3xl">
            Comparision
          </span>
          <span className="pr-4 flex">
            <img
              src="./logo/logo-img.svg"
              className="hidden lg:block w-[50px]"
            />
            <img src="./logo/logo-name.svg" className="w-[70px] lg:w-[148px]" />
          </span>
          <span className="pr-4">
            <img
              src="./logo/uniswap-logo.png"
              className="lg:w-[178px] w-[70px]"
            />
          </span>
        </span>

        {/* {rows}  */}
        <div className="py-4">{elements}</div>
      </section>
    </div>
  );
});

export default About;
