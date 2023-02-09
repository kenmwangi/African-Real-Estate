import React from "react";
import GenericHero from "src/components/GenericHero";

const pricingPlans = [
  { id: 1, plan: "Basic", price: "19", feature: "Sell your house" },
  {
    id: 2,
    plan: "Business",
    price: "49",
    feature: "Sell apartments, storey-building and business premises",
  },
  {
    id: 3,
    plan: "Enterprise",
    price: "129",
    feature: "All Properties including land and vehicles.",
  },
];

const index = () => {
  return (
    <>
      <section className="mb-20 flex flex-col  items-center justify-center pb-20">
        {/* <div className="absolute inset-0 bg-[url(/img/grid.svg)] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div> */}
        <div>
          <GenericHero title="Sell you Property Fast" />

          <p className="mt-3 text-center text-sm text-gray-500 md:text-lg">
            Choose the best pricing plan that suits you
          </p>
          <div className="mx-auto mt-7 max-w-7xl overflow-x-auto bg-white px-5 md:rounded-md md:shadow-sm lg:mt-10 lg:block">
            <table className="whitespace-no-wrap mt-10 w-full table-fixed text-left">
              <thead>
                <tr className="block md:table-row">
                  {/* <th className="hidden md:table-cell">​</th> */}
                  {pricingPlans.map((pricingPlan) => {
                    const { id, plan, price, feature } = pricingPlan;
                    return (
                      <th
                        key={id}
                        className="relative flex flex-col border-b border-gray-200 px-4 py-5 md:table-cell"
                      >
                        <div className="text-base font-bold text-gray-800 md:border-b md:pb-3 lg:text-lg">
                          {plan}
                        </div>
                        <h2 className="mt-3 inline-flex items-baseline gap-1">
                          <span className="text-4xl">{price}</span>{" "}
                          <span className="font-normal text-gray-500">
                            per month
                          </span>
                        </h2>
                        <p className="mt-3 flex-1 text-sm font-normal text-gray-500">
                          {feature}
                        </p>
                        <div className="mt-3">
                          <a
                            href="#"
                            target="_blank"
                            className="inline-block w-full rounded-md border-2 border-indigo-500 bg-indigo-500 px-8 py-3 text-center text-sm font-medium text-white transition-all hover:bg-transparent hover:text-indigo-500"
                            rel="noopener noreferrer"
                          >
                            Get Started
                          </a>
                        </div>
                      </th>
                    );
                  })}
                </tr>
              </thead>
            </table>
          </div>

          <div className="my-10 text-center text-sm text-gray-500">
            We promise 100% price honesty. No hidden charges.
          </div>
        </div>
      </section>
    </>
  );
};

export default index;
