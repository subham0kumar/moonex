import React from "react";
import { Collapse } from "react-collapse";
import { FaPlus } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";

const Accordion = ({ ques, asn, open, toggle }) => {
  return (
    <div className="fadeInAnimation transition duration-200 ">
      <div
        className="gap-2 cursor-pointer flex items-center justify-between"
        onClick={toggle}
      >
        <span className="text-md lg:text-xl">{ques}</span>
        <div className="w-fit p-2 rounded-full bg-gray-600/50">
          <FaAngleRight
            className={` transition duration-300 ${
              open ? "rotate-90" : " rotate-0"
            }`}
            size={20}
          />
        </div>
      </div>
      <Collapse isOpened={open}>
        <span className="text-sm lg:text-md text-white/70">{asn}</span>
      </Collapse>
    </div>
  );
};

export default Accordion;
