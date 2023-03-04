import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import React, { useEffect, useState } from "react";
import CreateProperty from "src/components/CreateProperty";
import FeaturedListingCard from "src/components/FeaturedListingCard";
import FilterProperty from "src/components/Filter";
import GenericHero from "src/components/GenericHero";
import SigninPage from "../auth/signin";

const properties = [
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

// This is listing men!

const Listing = () => {
  const session = useSession();
  const supabase = useSupabaseClient();

  const [properties, setProperties] = useState([]);

  useEffect(() => {
    supabase
      .from("houses")
      .select("id, created_at, title, price, author, photos")
      .order("created_at", { ascending: false })
      .then((result) => {
        setProperties(result.data);
      });
  }, [supabase]);

  return (
    <section className="pb-20">
      <GenericHero title="Property Listing" />
      <div className="px-6 py-8">
        <div className="mx-auto max-w-6xl">
          <div className="flex">
            <div className="mb:block hidden flex-1">{/* space div */}</div>
            <div className="flex-1">
              <h2 className="mb-10 text-2xl font-medium uppercase leading-10">
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
              {/* <CreateProperty onPost={fetchHouses} /> */}

              {properties?.length > 0 &&
                properties.map((property) => {
                  return (
                    <FeaturedListingCard
                      key={property.created_at}
                      {...property}
                    />
                  );
                })}

              {/* {properties.map((property) => {
                const { id } = property;
              })} */}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Listing;
