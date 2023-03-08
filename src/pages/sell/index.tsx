import React from "react";
import Link from "next/link";
import GenericHero from "src/components/GenericHero";

import { useSession } from "@supabase/auth-helpers-react";
import SigninPage from "../auth/signin";
import { Field, FieldArray } from "formik";

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

const SellPage = () => {
  const session = useSession();

  console.log(session);

  if (!session) {
    return <SigninPage />;
  }
  return (
    <>
      <section className="mb-20 flex flex-col  items-center justify-center pb-20">
        {/* <div className="absolute inset-0 bg-[url(/img/grid.svg)] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div> */}
        <div>
          {/* <GenericHero title="Sell you Property Fast" /> */}

          <div className="mx-auto max-w-screen-xl py-8 px-4 sm:py-16 lg:px-6">
            <div className="mx-auto max-w-screen-sm text-center">
              <h2 className="mb-4 text-4xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white">
                Start your free trial today
              </h2>
              <p className="mb-6 font-light text-gray-500 dark:text-gray-400 md:text-lg">
                Try African Real Estate Platform for 30 days. No credit card
                required.
              </p>
              <Link
                href="/sell/sell-your-property"
                className="mr-2 mb-2  rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
              >
                Sell Your Property
              </Link>
            </div>
          </div>
          {/* <div className="mx-auto mt-7 max-w-7xl overflow-x-auto bg-white px-5 md:rounded-md md:shadow-sm lg:mt-10 lg:block">
            <table className="whitespace-no-wrap mt-10 w-full table-fixed text-left">
              <thead>
                <tr className="block md:table-row">
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
          </div> */}
        </div>
      </section>
    </>
  );
};

export default SellPage;
