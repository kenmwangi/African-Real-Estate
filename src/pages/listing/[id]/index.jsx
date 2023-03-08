import React from "react";
import SingleListingCard from "src/components/SingleListingCard";
import { supabase } from "../../../services/supabase";
import Head from "next/head";

const SingleListing = ({ house }) => {
  console.log(house);
  return (
    <>
      <Head>{house.title}</Head>
      <SingleListingCard house={house} />
    </>
  );
};

export default SingleListing;

export async function getStaticPaths() {
  const { data: houses } = await supabase.from("houses").select("id");
  const paths = houses.map(({ id }) => ({
    params: {
      id: id.toString(),
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
}
export async function getStaticProps({ params: { id } }) {
  const { data: house } = await supabase
    .from("houses")
    .select("*")
    .eq("id", id)
    .single();

  return {
    props: {
      house,
    },
    revalidate: 60,
  };
}
