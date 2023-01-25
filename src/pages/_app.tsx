import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

// import { api } from "../utils/api";
import { trpc } from "src/utils/trpc";

import "../styles/globals.css";
import "../styles/Calendar.css";
import "../styles/Spinner.css";
import Layout from "src/components/Layout";

import { Raleway } from "@next/font/google";

const inter = Raleway({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-inter",
});

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <div className={`${inter.variable}`}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </div>
    </SessionProvider>
  );
};

export default trpc.withTRPC(MyApp);
