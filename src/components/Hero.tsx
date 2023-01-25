import Image from "next/image";
import React from "react";
import Logo from "/public/hero-bg.jpg";
import { Inter } from "@next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

const Hero = () => {
  return (
    <div>
      <section className="relative px-6">
        <Image
          src={Logo}
          alt="Hero Background"
          fill
          className="pointer-events-none h-full object-cover object-bottom"
        />
        <div className="relative mx-auto max-w-6xl pt-20 pb-20 lg:pb-40">
          <section>
            <div className={inter.className}>
              <h1 className="my-3 text-center text-4xl font-bold uppercase leading-loose tracking-widest text-slate-900">
                Find The Property For <br />{" "}
                <span className="text-cyan-500"> Rent</span> or{" "}
                <span className="text-cyan-600">Sale</span>
              </h1>

              <div className="mx-auto mt-10 flex flex-col items-center">
                <div>
                  <form
                    action="/listing"
                    className="overflow-hidden rounded bg-white shadow-lg md:flex md:items-center"
                  >
                    <select
                      id="type"
                      name="type"
                      className="font-heading w-full border-t-0 border-b border-l-0 border-r-0 border-gray-300 bg-white py-6 pl-5 pr-12 ring-black focus:border-gray-300 focus:shadow-none focus:outline-none focus:ring-0 md:w-auto md:border-b-0 md:border-r md:pl-8"
                    >
                      <option value="type">Type</option>
                      <option>Buy</option>
                      <option>Sell</option>
                    </select>
                    <select
                      id="location"
                      name="location"
                      className="font-heading w-full border-t-0 border-b border-l-0 border-r-0 border-gray-300 bg-white py-6 pl-5 pr-12 ring-black focus:border-gray-300 focus:shadow-none focus:outline-none focus:ring-0 md:w-auto md:border-b-0 md:border-r md:pl-8"
                    >
                      <option>Location</option>
                      <option>Karen</option>
                      <option>Tilisi</option>
                      <option>Syokimau</option>
                      <option>Kitengela</option>
                    </select>
                    <select
                      id="property_type"
                      name="property_type"
                      className="font-heading w-full border-t-0 border-b border-l-0 border-r-0 border-gray-300 bg-white py-6 pl-5 pr-12 ring-black focus:border-gray-300 focus:shadow-none focus:outline-none focus:ring-0 md:w-auto md:border-b-0 md:border-r md:pl-8"
                    >
                      <option>Property Type</option>
                      <option>Apartment</option>
                      <option>Villa</option>
                    </select>
                    <select
                      id="budget"
                      name="budget"
                      className="font-heading w-full border-t-0 border-b border-l-0 border-r-0 border-gray-300 bg-white py-6 pl-5 pr-12 ring-black focus:border-gray-300 focus:shadow-none focus:outline-none focus:ring-0 md:w-auto md:border-b-0 md:border-r md:pl-8"
                    >
                      <option>Budget</option>
                      <option>Below $100k</option>
                      <option>$100k - $1M</option>
                    </select>
                    <div className="flex flex-1 items-center justify-center px-4 py-4 md:py-0">
                      <button className="rounded-full bg-indigo-500 py-3 px-7 font-medium text-white transition-colors hover:bg-indigo-600">
                        Search
                      </button>
                    </div>
                  </form>

                  <section className="mt-5 flex justify-end pr-4">
                    <Link
                      href="/listing"
                      className="border-b border-cyan-700 text-sm font-medium text-cyan-600 transition-colors hover:text-cyan-500"
                    >
                      Advanced Search
                    </Link>
                  </section>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
};

export default Hero;
