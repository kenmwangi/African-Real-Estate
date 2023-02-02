import Link from "next/link";

const navigationLinks = [
  { id: 1, href: "/home", title: "Home" },
  { id: 2, href: "/buy", title: "Buy" },
  { id: 3, href: "/sell", title: "Sell" },
  { id: 4, href: "/listing", title: "Listings" },
];

const extraInformation = [
  { id: 1, href: "/listing", title: "Property" },
  { id: 2, href: "/", title: "FAQ" },
  { id: 3, href: "/contact", title: "Contact Us" },
];

export default function Footer() {
  return (
    <footer className="relative">
      <div
        className="absolute inset-0 -top-20 h-20 bg-cover bg-bottom bg-no-repeat"
        style={{
          backgroundImage: "url('/building_trees.png')",
        }}
      ></div>
      <div className="mb-3 bg-gray-800 px-6 pt-24">
        <div className="mx-auto max-w-6xl">
          <div className="space-y-8 md:flex md:space-y-0">
            <div className="space-y-8 md:flex md:w-8/12 md:space-y-0">
              <div className="md:w-1/2">
                <h4 className="font-heading text-xl font-semibold uppercase text-white">
                  Contact Info
                </h4>
                <div className="mt-6 leading-9 text-gray-300">
                  <p>
                    <strong>Email: </strong> Africanrealestate0@gmail.com
                  </p>
                  <p>
                    <strong>Call: </strong> +254 732945534{" "}
                  </p>
                  <p>
                    <strong>Whatsapp:</strong> +254 732945534
                  </p>
                </div>
              </div>
              <div className="md:w-1/2">
                <h4 className="font-heading text-xl font-semibold uppercase text-white">
                  Navigations
                </h4>
                <nav className="mt-6 space-y-3 md:flex md:space-y-0">
                  <div className="flex flex-col space-y-3 md:w-1/2">
                    {navigationLinks.map((navigationLink) => {
                      const { id, href, title } = navigationLink;
                      return (
                        <Link
                          href={href}
                          className="hover:underline-offset-3 text-gray-300 transition-colors hover:text-white hover:underline"
                          key={id}
                        >
                          {title}
                        </Link>
                      );
                    })}
                  </div>
                </nav>
              </div>
            </div>
            <div className="flex flex-col space-y-3 md:w-4/12">
              <h4 className="font-heading text-xl font-semibold uppercase text-white">
                For More Information
              </h4>
              {extraInformation.map((info) => {
                const { id, href, title } = info;
                return (
                  <Link
                    href={href}
                    className="hover:underline-offset-3 text-gray-300 transition-colors hover:text-white hover:underline"
                    key={id}
                  >
                    {title}
                  </Link>
                );
              })}
            </div>
          </div>
          <div className="mt-8 border-t border-gray-700 py-8 md:flex md:items-center md:justify-between">
            <div className="flex space-x-6 md:order-2">
              <Link
                href="https://www.facebook.com/Mungai-Kihara-101809194942449/"
                target="_blank"
                rel="noopener"
                className="text-gray-400 hover:text-gray-300"
              >
                <span className="sr-only">Facebook</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>

              <Link
                href="https://www.instagram.com/mungaikihara/
                "
                target="_blank"
                rel="noopener"
                className="text-gray-400 hover:text-gray-300"
              >
                <span className="sr-only">Instagram</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>

              <Link
                href="https://www.youtube.com/channel/UCYNcbhzUIOLNpK0V5T1CsDg"
                target="_blank"
                rel="noopener"
                className="text-gray-400 hover:text-gray-300"
              >
                <span className="sr-only">YouTube</span>
                <svg
                  className="h-10 w-10"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" />
                </svg>
              </Link>
            </div>
            <p className="leading-wide mt-8 text-base tracking-wide text-gray-400 md:order-1 md:mt-0">
              African Real Estate &copy; {new Date().getFullYear()}, All Rights
              Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
