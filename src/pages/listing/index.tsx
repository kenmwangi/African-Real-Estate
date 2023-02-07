import React from "react";
import FeaturedListingCard from "src/components/FeaturedListingCard";
import FilterProperty from "src/components/Filter";
import GenericHero from "src/components/GenericHero";

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
  //   {
  //     id: 5,
  //     name: "2 BHK Villa",
  //     price: "$140,650",
  //     image: "/photos/property5.jpg",
  //     type: "Buy",
  //     location: "Karen",
  //     beds: "2",
  //     baths: "2",
  //     area: "2,000 SF",
  //   },
  //   {
  //     id: 6,
  //     name: "1 BHK Independent House",
  //     price: "$1499",
  //     image: "/photos/property6.jpg",
  //     type: "Buy",
  //     location: "Kilimani",
  //     beds: "1",
  //     baths: "1",
  //     area: "1,000 SF",
  //   },
];

const Listing = () => {
  return (
    <section className="pb-20">
      <GenericHero title="Property Listing" />
      <div className="px-6 py-8">
        <div className="mx-auto max-w-6xl">
          <div className="flex">
            <div className="mb:block hidden flex-1">{/* space div */}</div>
            <div className="flex-1">
              <h2 className="text-2xl font-medium uppercase leading-10">
                Featured Listing
              </h2>
            </div>

            <article className="hidden flex-1 items-center justify-end space-x-4 md:flex">
              <select
                id="type"
                name="type"
                className="w-44 rounded-full border border-gray-200 bg-gray-50 py-2 px-6"
              >
                <option value="">Select service</option>
                <option>Rent</option>
                <option>Sell</option>
              </select>
              <select
                id="type"
                name="type"
                className="w-44 rounded-full border border-gray-200 bg-gray-50 py-2 px-6"
              >
                <option>Newest First</option>
              </select>
            </article>
          </div>
          <article className="mt-8 lg:flex">
            <div className="w-full lg:w-4/12 lg:pr-8">
              <FilterProperty />
            </div>
            <div className="grid w-full gap-8 lg:w-8/12 lg:grid-cols-2">
              {properties.map((property) => {
                const { id } = property;
                return <FeaturedListingCard key={id} {...property} />;
              })}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Listing;
