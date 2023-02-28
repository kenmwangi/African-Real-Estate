import { type AppProps } from "next/app";
import React, { useState } from "react";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { ChakraProvider } from "@chakra-ui/react";

import { SessionContextProvider } from "@supabase/auth-helpers-react";
import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs";
import type { Database } from "types_db";

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

export default function MyApp({ Component, pageProps }: AppProps) {
  const [supabaseClient] = useState(() =>
    createBrowserSupabaseClient<Database>()
  );
  return (
    <ChakraProvider>
      <SessionContextProvider supabaseClient={supabaseClient}>
        <div className={`${inter.variable}`}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </div>
      </SessionContextProvider>
    </ChakraProvider>
  );
}
