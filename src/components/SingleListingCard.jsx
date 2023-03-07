"use client";
import GenericHero from "./GenericHero";
import { useState, useEffect } from "react";
import FeaturedListingCard from "./FeaturedListingCard";
import Image from "next/image";
import Link from "next/link";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";

import {
  BiBed,
  BiHomeCircle,
  BiSwim,
  BiBath,
  BiWind,
  BiCar,
  BiPodcast,
} from "react-icons/bi";
// import { supabase } from "src/services/supabase";
import Head from "next/head";
import Button from "./Button";
import { useRouter } from "next/router";
import SigninPage from "src/pages/auth/signin";

const SingleListingCard = ({ house }) => {
  const session = useSession();
  const supabase = useSupabaseClient();
  const router = useRouter();

  const [properties, setProperties] = useState([]);
  // show mobile phone
  const [showMobile, setShowMobile] = useState(false);

  // Check if user is logged in

  //   Max Display in Related Properties section
  const MAX_DISPLAY = 3;

  // Copy Email to clipboard

  function copyEmail(text) {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text);
    }
  }

  useEffect(() => {
    supabase
      .from("houses")
      .select(
        "id, created_at, title, price, author, photos, status, address, country, postal_code, county, category, bedrooms, baths, surface_area, property_briefing, additional_info, appliances, email, telephone"
      )
      .order("created_at", { ascending: false })
      .then((result) => {
        setProperties(result.data);
      });
  }, [supabase]);

  return (
    <div>
      <Head>
        <title>African Real Estate | {house?.title ?? "House"}</title>
        <meta
          name="description"
          content="Own this property at an afford price"
        />
      </Head>
      <GenericHero
        title={house?.title}
        description={`${house?.county}, ${house?.country}`}
      />
      <div className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="space-y-6 md:flex md:justify-between md:space-x-12 md:space-y-0">
            <div className="flex flex-1 space-x-8">
              <div className="flex flex-col gap-8 lg:items-end lg:space-x-5">
                <div className="flex flex-col">
                  <span className="mb-2 text-sm font-semibold uppercase text-gray-600">
                    Price
                  </span>
                  <span className="flex items-baseline text-4xl font-semibold text-red-400">
                    <span>
                      {house?.price.toLocaleString("en-US", {
                        style: "currency",
                        currency: "KES",
                      })}{" "}
                    </span>
                    {/* <sup className="-top-0.5 pl-1 text-xs text-gray-500">
                      /MO
                    </sup> */}
                  </span>
                </div>
                {/* <div className="flex h-full items-end text-xl">+</div>
                 */}
                {/* <div className="w-px bg-gray-200"></div> */}
                <div className="flex-start flex flex-col font-semibold">
                  <span className="mb-2 text-sm font-semibold uppercase text-gray-600">
                    Floor Location
                  </span>
                  <span className="text-4xl text-red-400">
                    {/* <span>
                      {new Date(house.created_at).toLocaleDateString()}
                    </span> */}
                    <span>{house.surface_area} sqft</span>
                    {/* <sup className="-top-0.5 pl-1 text-xs text-gray-500 ">
                      /MO
                    </sup> */}
                  </span>
                </div>
              </div>
              {/* 
              <div className="flex flex-col">
                <span className="mb-2 text-sm font-semibold uppercase text-gray-600">
                  Deposit
                </span>
                <span className="text-4xl font-semibold text-gray-800">
                  <span>$2000</span>
                  <sup className="-top-0.5 pl-1 text-xs text-gray-500 ">
                    /YEAR
                  </sup>
                </span>
              </div> */}
            </div>

            <div className="flex flex-col space-y-6 md:flex-row md:items-end md:space-x-6 md:space-y-0">
              <button
                onClick={(event) => setShowMobile((p) => !p)}
                className="flex items-center justify-center gap-4 rounded-full bg-indigo-400 px-8 py-4 font-medium text-white focus:outline-none"
              >
                {showMobile ? (
                  <p className="text-lg font-semibold lg:text-xl">
                    {house?.telephone}
                  </p>
                ) : (
                  <>
                    <Image
                      src="/images/phone-icon.svg"
                      width={15}
                      height={15}
                      alt="Phone Icon"
                    />
                    <span className="text-lg font-semibold lg:text-xl">
                      View Phone
                    </span>
                  </>
                )}
              </button>

              <button
                onClick={(event) => {
                  copyEmail(house?.email);
                  alert(`${house.email} successfully copied to clipboard!`);
                }}
                className="flex items-center justify-center gap-4 rounded-full bg-indigo-400 px-8 py-4 font-medium text-white focus:outline-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 3.75H6.912a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H15M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859M12 3v8.25m0 0l-3-3m3 3l3-3"
                  />
                </svg>

                <span className="text-lg font-semibold lg:text-xl">
                  Copy Email
                </span>
              </button>
            </div>
          </div>

          <div>
            <div className="mt-10 grid aspect-[16/7] grid-rows-2 gap-4 md:grid-cols-2 lg:grid-cols-3">
              <div className="relative col-span-2 row-span-2">
                {house.photos.map((photo) => {
                  return (
                    <Image
                      key={photo.id}
                      alt={house.title}
                      src={photo}
                      fill
                      className="object-cover"
                    />
                  );
                })}
              </div>
            </div>
          </div>
          <div className="md:px-20">
            <div className="pt-20">
              <h4 className="font-heading text-xl uppercase">Overview</h4>
              <p className="mt-4 leading-9 text-gray-600">
                {house.property_briefing}
              </p>
            </div>
            <div className="pt-24">
              <h4 className="font-heading text-xl uppercase">Amenities</h4>
              <div className="mt-8 grid gap-6 md:grid-cols-3">
                <div className="flex items-center space-x-3">
                  <BiBed className="h-5 w-5 text-red-400" />
                  <span className="font-medium">
                    {house.bedrooms}{" "}
                    {house.bedrooms > 1 ? "Bedrooms" : "Bedroom"}
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <BiBath className="h-5 w-5 text-red-400" />
                  <span className="font-medium">
                    {house.baths} {house.baths > 1 ? "Bathrooms" : "Bathroom"}
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <BiHomeCircle className="h-5 w-5 text-red-400" />
                  <span className="font-medium">Kitchen</span>
                </div>
                <div className="flex items-center space-x-3">
                  <BiSwim className="h-5 w-5 text-red-400" />
                  <span className="font-medium">Swimming Pool</span>
                </div>
                <div className="flex items-center space-x-3">
                  <BiWind className="h-5 w-5 text-red-400" />
                  <span className="font-medium">Central Heating</span>
                </div>
                <div className="flex items-center space-x-3">
                  <BiPodcast className="h-5 w-5 text-red-400" />
                  <span className="font-medium">Garden</span>
                </div>
                <div className="flex items-center space-x-3">
                  <BiCar className="h-5 w-5 text-red-400" />
                  <span className="font-medium">Car Parking</span>
                </div>
              </div>
            </div>
          </div>
          <h4 className="font-heading mt-20 text-xl uppercase">gallery</h4>
          <div className="mt-6 grid gap-8 md:grid-cols-3">
            <div className="aspect-square relative">
              {house.photos.map((photo) => {
                return (
                  <Image
                    key={photo.id}
                    alt={house.title}
                    src={photo}
                    fill
                    className="object-cover"
                  />
                );
              })}
            </div>
          </div>
          <div className="pt-20">
            <div className="">
              <h4 className="font-heading text-xl uppercase">Location Map</h4>
            </div>

            <div className="aspect-video relative mt-6">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d37633.65975720456!2d-73.88896464710062!3d40.67982311122512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25c445213731d%3A0x19566ced90a1b555!2sCypress%20Hills%2C%20Brooklyn%2C%20NY%2011233%2C%20USA!5e0!3m2!1sen!2sin!4v1654532259365!5m2!1sen!2sin"
                width="1152"
                height="648"
                className="h-full w-full border-0"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          <div className="pt-20">
            <h4 className="font-heading text-xl uppercase">Share:</h4>
            <div className="mt-5">
              <div className="flex space-x-6 md:order-2">
                <Link
                  href="https://www.facebook.com/Mungai-Kihara-101809194942449/"
                  target="_blank"
                  rel="noopener"
                  className="text-gray-400 hover:text-gray-300"
                >
                  <span className="sr-only">Facebook</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>

                <Link
                  href="https://www.instagram.com/mungaikihara/
                "
                  target="_blank"
                  rel="noopener"
                  className="text-gray-400 hover:text-gray-300"
                >
                  <span className="sr-only">Instagram</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>

                <Link
                  href="https://www.youtube.com/channel/UCYNcbhzUIOLNpK0V5T1CsDg"
                  target="_blank"
                  rel="noopener"
                  className="text-gray-400 hover:text-gray-300"
                >
                  <span className="sr-only">YouTube</span>
                  <svg
                    className="h-10 w-10"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-emerland-50 px-6 pb-40">
        <div className="mx-auto max-w-6xl">
          <div className="">
            <h4 className="font-heading text-xl uppercase">
              Related properties
            </h4>
          </div>
          <div className="mt-6 grid gap-8 md:grid-cols-3">
            {properties?.slice(0, MAX_DISPLAY).map((property) => {
              return (
                <FeaturedListingCard key={property.created_at} {...property} />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleListingCard;
