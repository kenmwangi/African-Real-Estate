"use-client";
import React, { useState } from "react";
import Link from "next/link";
import type { NextPage } from "next";
import Calendar from "../components/Calendar";
import Spinner from "../components/Spinner";

// import { type DateType } from "src/utils/types";
import Hero from "src/components/Hero";
import FeaturedListing from "src/components/FeaturedListing";
import HomeTouring from "src/components/HomeTouring";
import RequestedOffers from "src/components/RequestedOffers";
import FAQ from "src/components/FAQ";
import MessageWidget from "src/components/MessageWidget.jsx";

const HomePage: NextPage = () => {
  // const [date, setDate] = useState<DateType>({
  //   justDate: null,
  //   dateTime: null,
  // });
  return (
    <div className="pb-40">
      <Hero />
      <FeaturedListing />
      <HomeTouring imgPos="right" />
      <RequestedOffers />
      <FAQ />
      <MessageWidget />
      {/* {!date.dateTime && <Calendar setDate={setDate} date={date} />}
      {date.dateTime && true ? (
        <Menu />
      ) : (
        <div className="flex h-screen items-center justify-center">
          <Spinner />
        </div>
      )} */}
    </div>
  );
};

export default HomePage;
