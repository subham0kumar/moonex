import Accordion from "../Components/Accordion";
import Radialgradiant from "../Components/Radialgradiant";
import React, { useState } from "react";

const FAQs = React.forwardRef((props, ref) => {
  const faqs = [
    {
      question: "How do I get a Referral Code?",
      answer:
        "You can get your referral code by connecting your wallet and visiting the referral section of your profile.",
    },
    {
      question: "Do I get rewarded in tokens or ETH when I refer buyers?",
      answer:
        "You receive your rewards in ETH instantly once someone you refer makes a transaction!",
    },
    {
      question: "How do I get a Referral Code?",
      answer:
        "You can get your referral code by connecting your wallet and visiting the referral section of your profile.",
    },
  ];

  const [open, setOpen] = useState(null);
  const toggle = (i) => {
    if (open === i) {
      return setOpen(null);
    }
    setOpen(i);
  };
  return (
    <div ref={ref} className="flex items-center justify-center">
      <Radialgradiant top={"2300px"} left={"-500px"} />
      <Radialgradiant top={"1900px"} left={"1100px"} />
      <div className="w-[90vw] lg:w-[1000px] py-10 lg:m-20 rounded-3xl bg-[#0C1B28] font-neueBold flex flex-col items-center gap-8">
        <h2 className="text-center text-4xl font-bold text-yellow-500 border-b border-white/10 w-full pb-8">
          FAQs
        </h2>
        {faqs.map((ques, i) => (
          <section
            key={i}
            className="font-raleway text-white border-b border-white/10 w-full px-6 lg:px-32 py-8"
          >
            <Accordion
              key={i}
              ques={ques.question}
              asn={ques.answer}
              open={i === open}
              toggle={() => toggle(i)}
            />
          </section>
        ))}
      </div>
    </div>
  );
});

export default FAQs;
