import React from "react";
import { FaTelegram } from "react-icons/fa";
import { GrReddit } from "react-icons/gr";
import { RiTwitterLine } from "react-icons/ri";

const Footer = React.forwardRef((props, ref) => {
  return (
    <div
      ref={ref}
      className="bg-[#051422] py-8 lg:py-0 lg:h-[319px] mt-16 px-16 text-white font-raleway"
    >
      <div className="flex flex-col gap-16 lg:gap-0 lg:flex-row items-center justify-center lg:justify-around h-full">
        <section>
          <aside className="flex flex-col items-center justify-center">
            <img src="./logo/logo-img.svg" width={"80px"} />
            <img src="./logo/logo-name.svg" width={"100px"} />
          </aside>
        </section>
        <section className="w-1/2">
          <ul className="flex flex-col gap-4 lg:gap-0 lg:flex-row items-center justify-around text-lg font-bold">
            <li>About Us</li>
            <li>Roadmap</li>
            <li>FAQs</li>
            <li>Contact Us</li>
          </ul>
        </section>
        <section>
          <span className="flex text-3xl font-bold gap-2">
            Contact<h2 className="text-[#edd955]">Us</h2>
          </span>
          <span className="flex items-center justify-between py-10 gap-5">
            <FaTelegram
              size={30}
              className="hover:scale-125 transition duration-200 ease-in-out hover:text-[#edd955]"
            />
            <GrReddit
              size={30}
              className="hover:scale-125 transition duration-200 ease-in-out hover:text-[#edd955]"
            />
            <RiTwitterLine
              size={30}
              className="hover:scale-125 transition duration-200 ease-in-out hover:text-[#edd955]"
            />
          </span>
        </section>
      </div>
    </div>
  );
});

export default Footer;
