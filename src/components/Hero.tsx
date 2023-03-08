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

            <div className="mx-auto mt-10 flex flex-col items-center">
              <div>
                <SearchInputs />

                <section className="mt-5 flex justify-end pr-4">
                  <Link
                    href="/listing"
                    className="border-b border-cyan-700 text-sm font-medium text-indigo-600 transition-colors hover:text-cyan-500"
                  >
                    Advanced Search
                  </Link>
                </section>
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
};

export default Hero;
