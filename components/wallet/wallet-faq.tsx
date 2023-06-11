import React, { useState } from "react";
import * as Md from "react-icons/md";
import { AnimatePresence, motion } from "framer-motion";

const faqs = [
  {
    id: 1,
    question: "Why are my assets frozen on coins exchange?",
    answer:
      "If you have issued a red envelope and the red envelope is not claimed, your funds will be temporarily frozen. Please don't worry, the funds that have not been claimed will be returned to your account after 4 days.",
  },
  {
    id: 2,
    question: "What is the minimum deposit",
    answer: "The deposit amount must be between $5 – $5,000 per trade.",
  },
  {
    id: 3,
    question: "Can coins exchange freeze my account?",
    answer: "Yes, coins exchange reserves the right to freeze your accoun",
  },
  {
    id: 4,
    question: "Is it safe to leave coins on coins exchange?",
    answer:
      "Built to exacting standards, coins exchange bank-level encryption and data security provide a safe transaction environment. More than that, most of the crypto assets stored in coins exchange accounts are also stored in cold wallets",
  },
];

const WalletFaq = () => {
  const [active, setActive] = useState(0);

  const showAnswer = (id: number) => {
    if (active === id) {
      return setActive(0);
    }
    setActive(id);
  };

  return (
    <AnimatePresence>
      <section className="flex-1 w-full text-white px-4">
        <div className="py-3 px-2">
          <h3 className="font-medium text-base md:text-xl  underline">Faq</h3>
          <div className="space-y-6 mt-4">
            {faqs.map((faq, index) => (
              <div key={faq.id}>
                <div
                  onClick={() => showAnswer(index)}
                  className="py-3 px-2 rounded shadow-xl bg-bg flex items-center justify-between"
                >
                  <h4 className="font-medium text-sm cursor-pointer">
                    {faq.question}
                  </h4>
                  <div>
                    {active === index ? (
                      <Md.MdArrowDropUp />
                    ) : (
                      <Md.MdArrowDropDown />
                    )}
                  </div>
                </div>
                <motion.div
                  key={active}
                  initial={{
                    opacity: 0,
                  }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{
                    duration: 0.8,
                  }}
                  className={
                    active === index
                      ? "py-3 px-2 bg-bg/40 leading-loose text-neutral-300 text-xs"
                      : "hidden"
                  }
                >
                  {faq.answer}
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </AnimatePresence>
  );
};

export default WalletFaq;
