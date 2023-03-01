import { Disclosure } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { Fragment } from "react";

import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

import Logo from "/public/real-estate.jpg";
import { useSession } from "@supabase/auth-helpers-react";
import { useSupabaseClient } from "@supabase/auth-helpers-react";

const navLinks = [
  { id: 1, href: "/buy", title: "Buy" },
  { id: 2, href: "/sell", title: "Sell" },
  // { id: 3, href: "/blog", title: "Blog" },
  { id: 4, href: "/contact", title: "Contact" },
];

function Header() {
  const router = useRouter();
  const session = useSession();

  const supabase = useSupabaseClient();
  async function signInWithGoogle() {
    await supabase.auth.signInWithOAuth({
      provider: "google",
    });
  }

  async function signOut() {
    await supabase.auth.signOut();
    return router.push("/");
  }
  return (
    <header className="">
      <div className="w-full shadow-sm">
        <nav className="container relative mx-auto flex flex-wrap items-center justify-between px-4 lg:justify-between">
          {/* Logo  */}
          <Disclosure>
            {({ open }) => (
              <>
                <div className="flex w-full flex-wrap items-center justify-between lg:w-auto">
                  <Link href="/">
                    <span>
                      <Image
                        src={Logo}
                        alt="African Real Estate"
                        width="90"
                        height="30"
                        className="w-20 object-contain"
                      />
                    </span>
                    {/* <span>African Real Estate</span> */}
                  </Link>

                  <Disclosure.Button
                    aria-label="Toggle Menu"
                    className="ml-auto rounded-md px-2 py-1 text-gray-500 hover:text-indigo-500 focus:bg-indigo-100 focus:text-indigo-500 focus:outline-none  lg:hidden"
                  >
                    <svg
                      className="h-6 w-6 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      {open && (
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                        />
                      )}
                      {!open && (
                        <path
                          fillRule="evenodd"
                          d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                        />
                      )}
                    </svg>
                  </Disclosure.Button>

                  <Disclosure.Panel className="my-5 flex w-full flex-wrap lg:hidden">
                    <>
                      {navLinks.map((navLink) => {
                        const { id, href, title } = navLink;
                        return (
                          <Link
                            key={id}
                            href={href}
                            className=" focus:outline-nonef -ml-4 w-full rounded-md px-4 py-2 font-normal text-gray-800 hover:text-indigo-700 focus:bg-indigo-100 focus:text-indigo-700"
                          >
                            {title}
                          </Link>
                        );
                      })}
                      <p className="text-xs text-gray-700">
                        {session && (
                          <span>
                            Welcome, <strong>{session.user.email}</strong>{" "}
                          </span>
                        )}
                      </p>
                      <Link
                        onClick={
                          session ? () => signOut() : () => signInWithGoogle()
                        }
                        href="/auth/signin"
                        className="mt-3 w-full rounded-md bg-indigo-500 px-6 py-2 text-center text-white transition-colors hover:bg-indigo-600 lg:ml-5"
                      >
                        {session ? "Sign out" : "Sign in"}
                      </Link>{" "}
                      {/* *<Link href="/signin">Sign In</Link> */}
                    </>
                  </Disclosure.Panel>
                </div>
              </>
            )}
          </Disclosure>

          {/* menu  */}
          <div className="hidden text-center lg:flex lg:items-center">
            <ul className="flex-1 list-none items-center justify-end pt-6 lg:flex lg:pt-0">
              {navLinks.map((navLink) => {
                const { id, href, title } = navLink;
                return (
                  <li className="nav__item mr-5" key={id}>
                    <div className={inter.className}>
                      <Link
                        href={href}
                        className="text-md inline-block rounded-md px-4 py-2 font-normal leading-loose tracking-widest text-gray-700 no-underline transition-colors hover:text-indigo-500 focus:bg-indigo-100 focus:text-indigo-700 focus:outline-none"
                      >
                        {title}
                      </Link>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="nav__item mr-3 flex hidden  items-center space-x-3 lg:flex">
            <p className="text-xs text-gray-700">
              {session && (
                <span>
                  Welcome, <strong>{session.user.email}</strong>{" "}
                </span>
              )}
            </p>
            <Link
              onClick={session ? () => signOut() : () => signInWithGoogle()}
              href="/auth/signin"
              className="lg:text-md text-sm font-semibold tracking-wide text-indigo-500 transition-colors hover:text-indigo-700 hover:underline hover:underline-offset-4"
            >
              {session ? "Sign out" : "Sign in"}
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
export default Header;
