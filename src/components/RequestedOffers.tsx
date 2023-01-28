import React from "react";
import CountUp, { useCountUp } from "react-countup";
import Container from "./Container";
import Button from "./Button";

const RequestedOffers = () => {
  return (
    <section className="w-full bg-[#eff8f7]">
      <div className="container mx-auto flex flex-col gap-2 p-14 py-8 lg:items-center lg:justify-start lg:gap-4 xl:px-0">
        <h2 className="tracking-light mt-3 max-w-4xl text-4xl font-extrabold leading-snug text-indigo-600 lg:text-9xl lg:leading-tight">
          <span>
            <Count />+
          </span>
        </h2>
        <h3 className="text-md font-semibold text-indigo-500 lg:text-lg">
          Satisfied Customers
        </h3>
        <p className="mb-7 py-2 text-lg leading-normal text-gray-500 lg:text-lg xl:text-xl">
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
    duration: 10,
  });
  return (
    <>
      <span ref={countRef} />
    </>
  );
}
