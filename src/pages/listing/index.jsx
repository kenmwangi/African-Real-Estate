import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import React, { useEffect, useState } from "react";
import CreateProperty from "src/components/CreateProperty";
import FeaturedListingCard from "src/components/FeaturedListingCard";
import FilterProperty from "src/components/Filter";
import FilterListing from "src/components/FilterListing";
import GenericHero from "src/components/GenericHero";
import Pagination from "src/components/Pagination";
import ListLayout from "src/layouts/ListLayout";
import SigninPage from "../auth/signin";

const POSTS_PER_PAGE = 6;

const Listing = () => {
  const session = useSession();
  const supabase = useSupabaseClient();

  const [properties, setProperties] = useState([]);

  // Pagination
  const [currentPage, setcurrentPage] = useState(1);
  const pageSize = 1;

  const onPageChange = (page) => {
    setcurrentPage(page);
  };

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
    <section className="mb-10 pb-20">
      <GenericHero title="Property Listing" />
      <div className="px-6 py-8">
        <div className="mx-auto max-w-6xl">
          <FilterListing />
          <article>
            {/* <div className="w-full lg:w-4/12 lg:pr-8">
              <FilterProperty />
            </div> */}
            <div className="my-10 grid w-full gap-8 lg:grid-cols-3">
              {properties.map((property) => {
                return (
                  <FeaturedListingCard
                    key={property.created_at}
                    {...property}
                  />
                );
              })}
            </div>
          </article>
          <Pagination
            items={properties.length}
            currentPage={currentPage}
            pageSize={pageSize}
            onPageChange={onPageChange}
          />
        </div>
      </div>
    </section>
  );
};

export default Listing;

export async function getStaticPaths() {
  const totalListing = await supabase.from("houses").select("*");
  const totalPages = Math.ceil(totalListing.length / POSTS_PER_PAGE);
  const paths = Array.from({ length: totalPages }, (_, i) => ({
    params: { page: (i + 1).toString() },
  }));

  return {
    paths,
    fallback: false,
  };
}
export async function getStaticProps() {
  const listings = await supabase.from("houses").select("*");
  const initialDisplayListings = listings.slice(0, POSTS_PER_PAGE);
  const pagination = {
    currentPage: 1,
    totalPages: Math.ceil(listings.length / POSTS_PER_PAGE),
  };

  return {
    props: {
      listings,
      initialDisplayListings,
      pagination,
    },
  };
}
