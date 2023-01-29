import AccordionItems from "./accordion-items";
import { faqs } from "./faqs";

const Faq = () => {
  return (
    <section className="h-screen">
      <div className="w-[90%] mx-auto">
        <div className="font-main text-4xl font-medium capitalize text-center mb-6">
          Frequently Asked Questions
        </div>
        {faqs.map((faq) => (
          <AccordionItems
            question={faq.question}
            answer={faq.answer}
            index={faq.id}
            key={faq.id}
          />
        ))}
      </div>
    </section>
  );
};

export default Faq;
