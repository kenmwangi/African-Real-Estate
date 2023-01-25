"use-client";
import React, { useState } from "react";
import Link from "next/link";
import type { NextPage } from "next";
import Calendar from "../components/Calendar";
import Spinner from "../components/Spinner";
import Menu from "../components/Menu";

import { type DateType } from "src/utils/types";
import Hero from "src/components/Hero";

const HomePage: NextPage = () => {
  const [date, setDate] = useState<DateType>({
    justDate: null,
    dateTime: null,
  });
  return (
    <div className="pb-40">
      <Hero />
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
