/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import type {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from "next";
import { getProviders, signIn } from "next-auth/react";
import getServerSession from "next-auth/next";
import Link from "next/link";
// import { authOptions } from "../api/auth/[...nextauth]";

type SigninProps = {
  providers: ReturnType<typeof getProviders>;
};

export default function SignIn({ providers }: SigninProps) {
  return (
    <section className="mx-auto mb-20 mt-16 flex w-full max-w-3xl flex-col items-center justify-center rounded bg-white  py-16 px-4 shadow lg:max-w-6xl">
      <h1 className="my-10 max-w-2xl text-center text-3xl font-bold leading-snug tracking-tight text-slate-800 lg:max-w-full lg:text-4xl lg:leading-tight">
        Welcome to African Real Estate
      </h1>
      <p
        aria-label="Login to your account"
        className="mb-10 text-xl leading-6 text-gray-700"
      >
        Sign in below to continue
      </p>
      {Object.values(providers).map((provider) => {
        const { name, id } = provider;
        return (
          <div key={name} className="mb-10 space-y-10">
            <button
              onClick={() => signIn(id, { callbackUrl: "/sell" })}
              className=" mx-auto  flex items-center justify-between rounded-lg border border-slate-300 bg-white py-2 px-10 font-normal text-slate-900 hover:shadow-md lg:max-w-5xl"
            >
              <img
                src="/logos/google.svg"
                alt="Google"
                height={40}
                width={40}
                className="mr-2"
              />
              <span className="font-semibold">Continue with {name}</span>
            </button>

            <div className="flex w-full items-center justify-between py-5">
              <hr className="w-full bg-gray-400" />
              <p className="px-2.5 text-base font-medium leading-4 text-gray-400">
                OR
              </p>
              <hr className="w-full bg-gray-400  " />
            </div>

            <button
              onClick={() => signIn(id, { callbackUrl: "/sell" })}
              className=" mx-auto mb-10 flex items-center rounded-lg border border-slate-300 bg-white py-2 px-10 font-normal text-slate-900 hover:shadow-md"
            >
              <img
                src="/logos/facebook.svg"
                alt="Facebook"
                height={40}
                width={40}
                className="mr-2"
              />
              <span className="font-semibold">Continue with {name}</span>
            </button>

            <p className="mt-10 text-xs leading-none text-gray-700">
              By clicking “Continue,” you agree to African Real Estate and its
              affiliates’{" "}
              <Link href="#" className="font-bold text-blue-600">
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link href="#" className="font-bold text-blue-600">
                Privacy Policy
              </Link>
            </p>
          </div>
        );
      })}
    </section>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  //   const session = await getServerSession(context.req, context.res, authOptions);

  //   //   If the user is already logged in, redirect.
  //   //   Note: Make sure not to redirect to the same page
  //   //   To avoid an infinite loop!
  //   if (session) {
  //     return { redirect: { destination: "/" } };
  //   }

  const providers = await getProviders();

  return {
    props: { providers },
  };
}
