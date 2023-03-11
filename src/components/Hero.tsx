import Image from "next/image";
import React from "react";
import Logo from "/public/hero-bg.jpg";
import { Inter } from "@next/font/google";
import Link from "next/link";
import SearchInputs from "./SearchInputs";

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
        <div className="relative mx-auto max-w-6xl pt-10 pb-10 lg:pb-[8rem]">
          <section>
            <div className={inter.className}></div>
            <h1 className="my-3 text-center text-4xl font-bold uppercase leading-tight tracking-wide text-gray-800 lg:leading-loose lg:tracking-widest">
              Find The Property For <br />{" "}
              <span className="text-cyan-500"> Rent</span> or{" "}
              <span className="text-cyan-700">Sale</span>
            </h1>

            {/* <div className="mb-15 mt-10 flex items-center justify-center">
              <form className="w-[75%] rounded bg-white p-2 shadow-lg">
                <label
                  htmlFor="default-search"
                  className="sr-only mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Search
                </label>
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <svg
                      aria-hidden="true"
                      className="h-5 w-5 text-gray-500 dark:text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      ></path>
                    </svg>
                  </div>
                  <input
                    type="search"
                    id="default-search"
                    className="block w-full rounded-lg border border-gray-100 bg-gray-50 p-5 pl-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 focus-visible:border-blue-500 "
                    placeholder="Search Property..."
                    required
                  />
                  <button
                    type="submit"
                    className="absolute right-2.5 bottom-2.5 rounded-lg bg-blue-700 px-4 py-2 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 "
                  >
                    Search
                  </button>
                </div>
              </form>
            </div> */}
            <form
              action=""
              className="my-10 flex w-full justify-between overflow-hidden rounded-md bg-white shadow focus-within:ring-2 focus-within:ring-blue-500"
            >
              <div className="ml-3 flex items-center">
                <svg
                  aria-hidden="true"
                  className=" h-5 w-5 text-gray-500 dark:text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </div>
              <input
                type="text"
                className="flex-1 px-2 outline-none"
                placeholder="Search Property Name, Location, Type..."
              />
              <button className="m-2 rounded-sm bg-blue-600 px-4 py-2 font-semibold text-white hover:bg-blue-500">
                Search
              </button>
            </form>

            {/* <div>
                <SearchInputs />

              </div> */}
            <section className="mt-5 flex justify-end pr-4">
              <Link
                href="/listing"
                className="border-b border-cyan-700 text-sm font-medium text-indigo-600 transition-colors hover:text-cyan-500"
              >
                Advanced Search
              </Link>
            </section>
            <div className="mx-auto mt-10 flex flex-col items-center"></div>
          </section>
        </div>
      </section>
    </div>
  );
};

export default Hero;
