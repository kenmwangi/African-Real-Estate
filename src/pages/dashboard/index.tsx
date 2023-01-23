import Link from "next/link";
import React from "react";
import { trpc } from "../../utils/trpc";

const DashboardPage = () => {
  // const { mutate } = trpc.admin.sensitive.useMutation();

  return (
    <>
      <h1 className="my-5 text-center text-3xl font-bold text-gray-800">
        Please enter Rent or Buy Properties Details below
      </h1>
      <div className="flex h-screen w-full items-center justify-center gap-8 font-medium">
        {/* <Link href="/dashboard/opening" className="bg-gray-100 p-2">
        Opening hours
      </Link>
      <Link href="/dashboard/menu" className="bg-gray-100 p-2">
        Menu
      </Link> */}
      </div>
    </>
  );
};

export default DashboardPage;
