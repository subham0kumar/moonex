import React from "react";

const Radialgradiant = ({ top, left }) => {
  return (
    <div
      style={{
        background:
          "radial-gradient(closest-side,rgba(237,217,85,0.15), #ffffff00)",
        top: top,
        left: left,
      }}
      className="hidden lg:block -z-20 origin-center absolute w-[1000px] h-[800px] animate-[pulse_5s_ease-in-out_infinite]"
    ></div>
  );
};

export default Radialgradiant;
