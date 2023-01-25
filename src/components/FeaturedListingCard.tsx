import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";

type FeaturedListingCardProps = {
  image: string;
  type: string;
  price: string;
  beds: string;
  baths: string;
  name: string;
  area: string;
  location: string;
};

const FeaturedListingCard = ({
  image,
  type,
  price,
  beds,
  baths,
  name,
  area,
  location,
}: FeaturedListingCardProps) => {
  const [isZoomed, setIsZoomed] = useState(false);
  return (
    <div className="overflow-hidden rounded border bg-white transition-all duration-150 ease-out hover:shadow-xl hover:shadow-gray-200">
      <div
        className="relative cursor-zoom-in"
        onClick={(e) => {
          setIsZoomed(!isZoomed);
        }}
      >
        <div
          className={`relative aspect-[3/2] ${isZoomed ? "z-50" : "z-auto"}`}
        >
          {image && (
            <Image
              src={image}
              fill
              className="object-cover"
              alt="Property Photo"
            />
          )}
        </div>
        <div className="pointer-events-none absolute inset-0">
          <div className="from-transparent-5 flex h-full flex-col justify-between bg-gradient-to-t to-transparent px-5 py-5">
            <div>
              <span className="rounded-full bg-red-500 bg-opacity-90 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white">
                {type}
              </span>
            </div>
            <span className="text-2xl font-semibold text-white">{price}</span>
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation();
            }}
            className="absolute right-6 -bottom-7 flex h-14 w-14 items-center justify-center rounded-full border bg-white shadow-lg focus:outline-none"
          >
            <svg
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="h-7 w-7 text-red-500"
            >
              <path
                d="M12 21C-8 10 6-2 12 5.7 18-2 32 10 12 21z"
                fill="currentColor"
              />
            </svg>
            <span className="sr-only">Mark as favorite</span>
          </button>
        </div>
      </div>
      <div className="relative">
        <div className="px-5 py-5">
          <h4 className="text-lg font-semibold">{name}</h4>
          <p className="mt-1 text-sm text-gray-500">{location}</p>
        </div>
        <div className="flex divide-x divide-gray-200 border-t border-gray-100 text-sm">
          <div className="flex flex-1 items-center justify-center px-2 py-3 text-gray-500">
            {beds} Beds
          </div>
          <div className="flex flex-1 items-center justify-center px-2 py-3 text-gray-500">
            {area}
          </div>
          <div className="hidden flex-1 items-center justify-center px-2 py-3 text-gray-500 sm:flex">
            {baths} Bath
          </div>
          <div className="flex h-full flex-1 items-center justify-end py-3 pr-4 text-gray-600">
            <Link href="/listing/details">
              <button className="ml-3 rounded-full bg-cyan-200 px-3 py-1.5 text-xs font-medium text-cyan-900 focus:outline-none">
                Details
              </button>
            </Link>
          </div>
        </div>
        <Link href="/listing/details" className="absolute inset-0"></Link>
      </div>
    </div>
  );
};

export default FeaturedListingCard;
