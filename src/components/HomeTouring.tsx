import React from "react";
import Container from "./Container";
import Button from "./Button";
import Image from "next/image";

type HomeTouringProps = {
  imgPos: string;
  title: string;
  description: string;
};

type BenefitProps = {
  title: string;
  children: React.ReactNode;
};
const HomeTouring = ({ imgPos }: HomeTouringProps) => {
  return (
    <Container className="mb-20 flex flex-wrap lg:flex-nowrap lg:gap-10">
      <section
        className={`flex w-full items-center justify-center lg:w-1/2 ${
          imgPos === "right" ? "lg:order-1" : ""
        }`}
      >
        <div>
          <Image
            src="/photos/real-estate-agent.svg"
            width="621"
            height="382"
            alt="Home Touring"
          />
        </div>
      </section>

      <section
        className={`flex w-full flex-wrap items-center lg:w-1/2 ${
          imgPos === "right" ? "lg:justify-end" : ""
        }`}
      >
        <div>
          <article className="flex w-full flex-col">
            <h3 className="my-5 max-w-2xl text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight">
              Home Touring Redefined to Your Satisfaction
            </h3>
            <p className="max-w-2xl py-4 text-lg leading-loose text-gray-500 lg:text-xl xl:text-xl">
              Reach us for your home touring at your schedule. Our expert team
              is ready to help you buy, sell or explore about property
              management.
            </p>
          </article>

          <div className="mt-5 flex w-full items-center justify-center lg:items-start lg:justify-start">
            <Button>Browse Homes</Button>
          </div>

          {/* <article className="w-full.mt-5">
            <Benefit title={title}>{description}</Benefit>
          </article> */}
        </div>
      </section>
    </Container>
  );
};

export default HomeTouring;

// function Benefit({ title, children }: BenefitProps) {
//   return (
//     <React.Fragment>
//       <section className="mt-8 flex items-start space-x-3">
//         <article>
//           <h4 className="text-xl font-medium text-slate-800">{title}</h4>
//           <p className="mt-1 text-gray-500">{children}</p>
//         </article>
//       </section>
//     </React.Fragment>
//   );
// }
