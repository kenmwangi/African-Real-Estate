import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import React, { useEffect, useState } from "react";
import { Inter } from "@next/font/google";

import FeaturedListingCard from "./FeaturedListingCard";
import Button from "./Button";
import Link from "next/link";
const inter = Inter({ subsets: ["latin"] });

const FeaturedListing = () => {
  const session = useSession();
  const supabase = useSupabaseClient();

  const MAX_DISPLAY = 6;

  const [properties, setProperties] = useState([]);

  useEffect(() => {
    supabase
      .from("houses")
      .select("*")
      // .select(
      //   "id, created_at, title, price, author, photos, status, address, country, postal_code, county, category, bedrooms, baths, surface_area, property_briefing, additional_info, appliances, email, telephone"
      // )
      .order("created_at", { ascending: false })
      .then((result) => {
        setProperties(result.data);
      });
  }, [supabase]);
  return (
    <section className="px-4 py-10">
      <div className="mx-auto max-w-6xl">
        <span className={inter.className}></span>
        <h2 className="my-10 max-w-2xl text-center text-3xl font-bold leading-snug tracking-tight text-slate-800 lg:max-w-full lg:text-4xl lg:leading-tight">
          Featured Listings
        </h2>

        <div className="mt-10">
          <article className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
            {properties?.slice(0, MAX_DISPLAY).map((property) => {
              return (
                <FeaturedListingCard key={property.created_at} {...property} />
              );
            })}
          </article>

          <article className="my-10 text-center">
            <Link href="/buy">
              <Button>View All</Button>
            </Link>
          </article>
        </div>
      </div>
    </section>
  );
};

export default FeaturedListing;
