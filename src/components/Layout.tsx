import React from "react";
import Head from "next/head";
import Header from "./Header";

type LayoutProps = {
  children: React.ReactNode;
};
const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex min-h-screen flex-col font-sans antialiased">
      <Head>
        <title>African Real Estate</title>
        <meta
          name="description"
          content="African Real Estate Hub. Showing the Best of African Creativity"
        />
      </Head>
      <Header />
      <main className="flex flex-1 flex-col">{children}</main>
    </div>
  );
};

export default Layout;
