import Image from "next/image";
import React, { useRef, useState, useEffect } from "react";
import Logo from "/public/hero-bg.jpg";
import { Inter } from "@next/font/google";
import Link from "next/link";
import { useRouter } from "next/router";
import { supabase } from "src/services/supabase";
import SearchInputs from "./SearchInputs";

const inter = Inter({ subsets: ["latin"] });

const Hero = () => {
  const [searchText, setSearchText] = useState("");
  const [autoCompleteOptions, setAutoCompleteOptions] = useState([]);
  const [currentOptionIndex, setCurrentOptionIndex] = useState(null);
  const router = useRouter();

  const previousController = useRef();

  async function getAutoComplete() {
    if (previousController.current) {
      previousController.current.abort();
    }

    const abortController = new AbortController();
    previousController.current = abortController;

    const { data, error } = await supabase
      .from("houses")
      .select("id, title")
      .ilike("title", searchText && ("%" + searchText + "%" ?? ""))
      .abortSignal(abortController.signal);

    console.log(data);
    setAutoCompleteOptions(data ?? []);
    return data;
  }

  function handleSearchChange(e) {
    setSearchText(e.target.value);
    setCurrentOptionIndex(null);
    console.log(searchText);
    console.log(getAutoComplete());
  }

  useEffect(() => {
    console.log("OPTION", currentOptionIndex);
  }, [currentOptionIndex]);

  function handleKeyDown(event) {
    console.log("EVENT", event);

    if (event.keyCode === 40) {
      // Arrow Down
      console.log("keyDown");
      if (currentOptionIndex === null) {
        setCurrentOptionIndex(0);
      } else {
        setCurrentOptionIndex(
          currentOptionIndex === autoCompleteOptions.length - 1
            ? 0
            : (p) => Number(p) + 1
        ); // if is last option set first option, else increment option
      }
    } else if (event.keyCode === 38) {
      // Arrow Up
      if (currentOptionIndex === null) {
        setCurrentOptionIndex(autoCompleteOptions.length - 1);
      } else {
        setCurrentOptionIndex(
          currentOptionIndex === 0
            ? autoCompleteOptions.length - 1
            : (p) => Number(p) - 1
        ); // if is first option set last option, else decrease option
      }
    } else if (event.keyCode === 13) {
      // Enter
      if (autoCompleteOptions.length > 0 && currentOptionIndex) {
        router.push(`listing/${autoCompleteOptions[currentOptionIndex].id}`);
      } else {
        router.push({ pathname: "/search", query: { q: searchText } });
      }
    }
  }

  function getHighlightedText(text, highlight) {
    // Split on highlight term and include term into parts, ignore case
    const parts = text.split(new RegExp(`(${highlight})`, "gi"));
    return (
      <span>
        {" "}
        {parts.map((part, i) => (
          <span
            key={i}
            className={
              part.toLowerCase() === highlight.toLowerCase() ? "highlight" : ""
            }
          >
            {part}
          </span>
        ))}{" "}
      </span>
    );
  }
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
                placeholder="Search Villa, DownTown, Apartment etc..."
                onChange={handleSearchChange}
                value={searchText}
                onKeyDown={handleKeyDown}
              />
              <button
                type="submit"
                className="m-2 rounded-sm bg-blue-600 px-4 py-2 font-semibold text-white hover:bg-blue-500"
              >
                Search
              </button>
            </form>
            {searchText && (
              <ul className="mx-4 flex max-w-xl flex-col rounded-lg bg-white">
                {autoCompleteOptions.map(({ title, id }, i) => (
                  <Link key={id} passHref href={`listing/${id}`}>
                    <li
                      className={
                        i === currentOptionIndex
                          ? "active"
                          : "cursor-pointer px-4 py-2.5 hover:bg-gray-200 hover:text-blue-600"
                      }
                    >
                      {getHighlightedText(title, searchText)}
                    </li>
                  </Link>
                ))}
              </ul>
            )}

            {/* <div>
                <SearchInputs />

              </div> */}
            <section className="mt-5 flex justify-end pr-4">
              <Link
                href="/listing"
                className="border-b border-blue-700 text-sm font-medium text-blue-600 transition-colors hover:text-cyan-500"
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
