import React from "react";
import { Inter } from "@next/font/google";
import Link from "next/link";

import FeaturedListingCard from "./FeaturedListingCard";
import Button from "./Button";

const inter = Inter({ subsets: ["latin"] });

const properties = [
  {
    id: 1,
    name: "2 BHK Apartment",
    price: "$2660",
    image: "/photos/property1.jpg",
    type: "Buy",
    location: "Karen",
    beds: "2",
    baths: "2",
    area: "2,000 SF",
  },
  {
    id: 2,
    name: "2 BHK Villa",
    price: "$14650",
    image: "/photos/property2.jpg",
    type: "Buy",
    location: "Tilisi",
    beds: "2",
    baths: "2",
    area: "2,000 SF",
  },
  {
    id: 3,
    name: "1 BHK Independent House",
    price: "$149",
    image: "/photos/property3.jpg",
    type: "Buy",
    location: "Kitengela",
    beds: "1",
    baths: "1",
    area: "1,000 SF",
  },
  {
    id: 4,
    name: "2 BHK Apartment",
    price: "$2999",
    image: "/photos/property4.jpg",
    type: "Buy",
    location: "Kitusuru",
    beds: "2",
    baths: "2",
    area: "2,000 SF",
  },
  {
    id: 5,
    name: "2 BHK Villa",
    price: "$140,650",
    image: "/photos/property5.jpg",
    type: "Buy",
    location: "Karen",
    beds: "2",
    baths: "2",
    area: "2,000 SF",
  },
  {
    id: 6,
    name: "1 BHK Independent House",
    price: "$1499",
    image: "/photos/property6.jpg",
    type: "Buy",
    location: "Kilimani",
    beds: "1",
    baths: "1",
    area: "1,000 SF",
  },
];

const FeaturedListing = () => {
  return (
    <section className="px-4 py-10">
      <div className="mx-auto max-w-6xl">
        <span className={inter.className}></span>
        <h2 className="my-10 max-w-2xl text-center text-3xl font-bold leading-snug tracking-tight text-slate-800 lg:max-w-full lg:text-4xl lg:leading-tight">
          Featured Listings
        </h2>

        <div className="mt-10">
          <article className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
            {properties.map((property) => {
              return <FeaturedListingCard key={property.id} {...property} />;
            })}
          </article>

          <article className="my-10 text-center">
            <Button>View All</Button>
          </article>
        </div>
      </div>
    </section>
  );
};

export default FeaturedListing;
