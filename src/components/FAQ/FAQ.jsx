import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqData = [
    {
      title: "Do plumbers deal with heating?",
      description:
        "Yes, some plumbers are also Gas Safe registered and can work on central heating systems, radiators, boilers, bathrooms, and kitchens.",
    },
    {
      title: "Do you charge a call out fee?",
      description:
        "No, we do not charge a separate call-out fee. You only pay for the work carried out and the time spent on the job.",
    },
    {
      title: "How quickly can your company send out an engineer?",
      description:
        "We aim to send out an engineer within 1 to 2 hours for urgent cases. For non-emergency jobs, we usually offer same-day or next-day appointments.",
    },
    {
      title: "What should I do if I get a water leak?",
      description:
        "First, turn off the main water supply to prevent further damage. Then, contact us immediately so we can send out an engineer to fix the leak.",
    },
  ];

  return (
    <div className="w-[390px] md:w-[688px] lg:w-[920px] mx-auto px-6 md:px-0">
      <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold text-[#1B1743] text-center mb-6 md:mb-8 lg:mb-14">
        Frequently asked questions
      </h1>
      <Accordion type="single" collapsible defaultValue="item-0">
        {faqData.map((data, idx) => (
          <AccordionItem value={`item-${idx}`} key={idx}>
            <AccordionTrigger className="text-base md:text-xl lg:text-2xl font-semibold text-[#1B1743]">
              {data.title}
            </AccordionTrigger>
            <AccordionContent className="text-sm lg:text-lg text-[#2A2F32]">
              {data.description}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default FAQ;
