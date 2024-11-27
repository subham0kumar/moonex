import Gradientbutton from "./Gradientbutton";
import Radialgradiant from "./Radialgradiant";
import React, { useState } from "react";
import { CgClose } from "react-icons/cg";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = ({ refs }) => {
  const navbarContents = [
    { name: "Home", ref: refs.home },
    { name: "About Us", ref: refs.about },
    { name: "Roadmap", ref: refs.features },
    { name: "FAQs", ref: refs.faqs },
    { name: "Contact Us", ref: refs.contact },
  ];
  const [activeElement, setActiveElement] = useState("Home");
  const [showModal, setShowModal] = useState(false);

  // <---------- Scroll smoothly to the clicked section ------------------>
  const scrollToSection = (sectionRef) => {
    sectionRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* ------Desktop Navbar------- */}
      <div className="hidden lg:flex mt-12 mx-24 z-[9999] items-center justify-between">
        <Radialgradiant top={"-210px"} left={"-150px"} />
        <aside className="flex gap-5">
          <img src="./logo/logo-img.svg" />
          <img src="./logo/logo-name.svg" />
        </aside>
        <main className="font-raleway font-bold flex gap-20">
          {navbarContents.map((ele, i) => (
            <span
              key={i}
              className={`${
                activeElement == ele.name ? "text-[#edd955]" : "text-white"
              } text-lg cursor-pointer bg-gradient-to-r from-[#e4b40d] to-[#e4b40d] bg-no-repeat bg-left-bottom bg-[length:0%_3px] transition-all duration-200 tracking-wide ease-in hover:bg-[length:100%_3px]`}
              onClick={() => {
                scrollToSection(ele.ref);
                setActiveElement(ele.name);
              }}
            >
              {ele.name}
            </span>
          ))}
        </main>
        <aside>
          <Gradientbutton title={"Connect Wallet"} />
        </aside>
      </div>

      {/* ------- Mobile Navbar -------- */}

      <div>
        <section
          className={`bg-[#071624] z-20 fixed w-full lg:hidden flex items-center justify-between px-8 py-4`}
        >
          <span
            onClick={() => scrollToSection(ele.ref)}
            className="flex flex-col items-center justify-center"
          >
            <img src="./logo/logo-img.svg" width={"50px"} />
            <img src="./logo/logo-name.svg" width={"50px"} />
          </span>
          <span
            onClick={() => setShowModal(!showModal)}
            className="text-3xl text-[#edd955]"
          >
            {showModal ? <CgClose /> : <RxHamburgerMenu />}
          </span>
        </section>
        <section
          className={`z-10 w-screen h-screen top-0 bg-[#071624] flex flex-col gap-10 transition ease-in-out duration-300 items-center justify-center font-neueBold tracking-widest ${
            showModal
              ? "fixed translate-x-0 shadow-modal"
              : "absolute -translate-x-full"
          }`}
        >
          {navbarContents.map((ele, i) => (
            <span
              key={i}
              className={`${
                activeElement == ele.name ? "text-[#edd955]" : "text-white"
              } text-lg cursor-pointer tracking-wide`}
              onClick={() => {
                setShowModal(false);
                scrollToSection(ele.ref);
                setActiveElement(ele.name);
              }}
            >
              {ele.name}
            </span>
          ))}
        </section>
      </div>
    </>
  );
};

export default Navbar;
