import React from "react";
import CountUp, { useCountUp } from "react-countup";
import Container from "./Container";
import Button from "./Button";

const RequestedOffers = () => {
  return (
    <section className="w-full bg-[#eff8f7]">
      <div className="container mx-auto flex flex-col gap-5 p-14 py-8 lg:items-center lg:justify-start lg:gap-10 xl:px-0">
        <h2 className="tracking-light mt-3 max-w-2xl text-4xl font-bold leading-snug text-indigo-600 lg:text-7xl lg:leading-tight">
          <span>
            <Count />+
          </span>
        </h2>
        <h3 className="text-md font-bold text-indigo-500 lg:text-xl">
          Satisfied Customers
        </h3>
        <p className="py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl">
          {" "}
          Join hundreds of home owners who have visited our platform for Buy or
          Sell services.
        </p>

        <Button>Get Special Offer</Button>
      </div>
    </section>
  );
};

export default RequestedOffers;

function Count() {
  const countRef = React.useRef(null);
  const { start, pauseResume, reset, update } = useCountUp({
    ref: countRef,
    start: 0,
    end: 300000,
    duration: 2,
  });
  return (
    <>
      <span ref={countRef} />
    </>
  );
}
