"use-client";
import React, { useState } from "react";
import Link from "next/link";
import type { NextPage } from "next";
import Calendar from "../components/Calendar";
import Spinner from "../components/Spinner";
import Menu from "../components/Menu";

import { type DateType } from "src/utils/types";

const HomePage: NextPage = () => {
  const [date, setDate] = useState<DateType>({
    justDate: null,
    dateTime: null,
  });
  return (
    <>
      {/* {!date.dateTime && <Calendar setDate={setDate} date={date} />}
        {date.dateTime && true ? (
          <Menu />
        ) : (
          <div className="flex h-screen items-center justify-center">
            <Spinner />
          </div>
        )} */}
    </>
  );
};

export default HomePage;
