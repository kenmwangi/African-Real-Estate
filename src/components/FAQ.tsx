import { Disclosure } from "@headlessui/react";

import React from "react";
import Container from "./Container";

const faqdata = [
  {
    id: "1",
    question: "How do I prepare my home before I sell it?",
    answer:
      "The first thing is to make your house presentable. Depersonalize and declutter for new ownership.",
  },
  {
    id: "2",
    question: "How long will it take to sell my home?",
    answer:
      "It depends on few things such as The time of year you're listing: Homes tend to sell faster in the spring and early fallConditions in your local housing market, The condition of your home, How the buyer is financing",
  },
  {
    id: "3",
    question: "Should I buy a new home before selling my old one?",
    answer:
      "Whether or not you should buy a new home before selling your existing home is a personal choice",
  },
  {
    id: "4",
    question: " How can I save money when selling a home?",
    answer:
      "The best way to save money when selling a home is to negotiate your realtor's fees",
  },
];

const FAQ = () => {
  return (
    <Container className="!p-0">
      <section className="mx-auto mt-10 w-full max-w-5xl rounded-2xl px-5 py-10">
        <h1 className="my-10 max-w-2xl text-center text-3xl font-bold leading-snug tracking-tight text-slate-800 lg:max-w-full lg:text-6xl lg:leading-tight">
          Frequently Asked Questions
        </h1>
        {faqdata.map((item) => (
          <article className="mb-5" key={item.id}>
            <Disclosure>
              {({ open }) => (
                <React.Fragment>
                  <Disclosure.Button className="flex w-full items-center justify-between rounded-lg bg-gray-50 px-4 py-4 text-left text-lg text-gray-800 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75">
                    <span>{item.question}</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className={`${
                        open ? "rotate-180 transform" : ""
                      } h-6 w-6 text-indigo-500`}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 15.75l7.5-7.5 7.5 7.5"
                      />
                    </svg>
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-gray-500">
                    {item.answer}
                  </Disclosure.Panel>
                </React.Fragment>
              )}
            </Disclosure>
          </article>
        ))}
      </section>
    </Container>
  );
};

export default FAQ;
