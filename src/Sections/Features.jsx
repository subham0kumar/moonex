import Card from "../Components/Card";
import React from "react";

const Features = React.forwardRef((props, ref) => {
  const features = [
    {
      title: "Cheapest TXs",
      description:
        "Exchange popular digital currencies at the cheapest possible transaction price",
      icon: "/features/dollar-sign.svg",
    },
    {
      title: "CerTIK",
      description:
        "We are Audited by Certik. CertiK is the leading security-focused ranking platform to ",
      icon: "/features/sheild.svg",
    },
    {
      title: "No Contract Sells",
      description: "No contract sells to fund the marketing wallets",
      icon: "/features/No-contract.svg",
    },
    {
      title: "CrossDex Support",
      description:
        "Exchange popular digital currencies at the cheapest possible transaction price",
      icon: "/features/crossdex-support.svg",
    },
  ];

  return (
    <div ref={ref} className="py-10 mx-20 font-neueBold flex flex-col items-center gap-8">
      <section className="mx-12 px-1">
        <h2 className="flex gap-4 text-[45px] text-white leading-[44px] font-neueBold">
          Our<span className="text-[#e4b40d]">Features</span>
        </h2>
      </section>
      <section className="flex lg:flex-row flex-col justify-between gap-8 lg:gap-0 items-center lg:items-start w-[90vw] lg:w-[1320px]">
        {features.map((item, i) => (
          <Card
            key={i}
            title={item.title}
            description={item.description}
            icon={item.icon}
          />
        ))}
      </section>
    </div>
  );
});

export default Features;
