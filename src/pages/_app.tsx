import { type AppProps } from "next/app";
import React, { useState } from "react";

import { SessionProvider } from "next-auth/react";
import { ChakraProvider } from "@chakra-ui/react";

import {
  SessionContextProvider,
  type Session,
} from "@supabase/auth-helpers-react";
import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs";

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

export default function MyApp({
  Component,
  pageProps,
}: AppProps<{ initialSession: Session }>) {
  const [supabaseClient] = useState(() => createBrowserSupabaseClient());
  return (
    <ChakraProvider>
      <SessionContextProvider
        supabaseClient={supabaseClient}
        initialSession={pageProps.initialSession}
      >
        <div className={`${inter.variable}`}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </div>
      </SessionContextProvider>
    </ChakraProvider>
  );
}
