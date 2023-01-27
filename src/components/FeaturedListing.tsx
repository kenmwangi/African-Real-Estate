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
    type: "Sell",
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
    type: "Sell",
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
    type: "Sell",
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
    type: "Sell",
    location: "Kilimani",
    beds: "1",
    baths: "1",
    area: "1,000 SF",
  },
];

const FeaturedListing = () => {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <span className={inter.className}>
          <h2 className="my-5 text-center text-3xl font-semibold uppercase">
            Featured Listing
          </h2>
        </span>

        <div className="mt-10">
          <article className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
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
