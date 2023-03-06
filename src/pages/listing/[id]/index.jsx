import GenericHero from "../../../components/GenericHero";
import PropertyCard from "../../../components/FeaturedListingCard";
import Image from "next/image";
import { useSession } from "@supabase/auth-helpers-react";
import { supabase } from "../../../services/supabase";
import {
  BiBed,
  BiHomeCircle,
  BiSwim,
  BiBath,
  BiWind,
  BiCar,
  BiPodcast,
} from "react-icons/bi";
// import { supabase } from "src/services/supabase";
import Head from "next/head";

const PropertyDetails = ({ house }) => {
  const session = useSession();
  // const supabase = useSupabaseClient();
  console.log(house);
  return (
    <div>
      <Head>
        <title>African Real Estate | {house?.title ?? "House"}</title>
        <meta
          name="description"
          content="Own this property at an afford rate"
        />
      </Head>
      <GenericHero title={house?.title} description="Newyork, USA" />
      <div className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="space-y-6 md:flex md:justify-between md:space-x-12 md:space-y-0">
            <div className="flex flex-1 space-x-8">
              <div className="flex items-end space-x-5">
                <div className="flex flex-col ">
                  <span className="mb-2 text-sm font-semibold uppercase text-gray-600">
                    {house?.price}
                  </span>
                  <span className="flex items-baseline text-4xl font-semibold text-red-400">
                    <span> $600 </span>
                    <sup className="-top-0.5 pl-1 text-xs text-gray-500">
                      /MO
                    </sup>
                  </span>
                </div>
                <div className="flex h-full items-end text-xl">+</div>
                <div className="flex flex-col font-semibold">
                  <span className="mb-2 text-sm font-semibold uppercase text-gray-600">
                    Maintenance
                  </span>
                  <span className="text-4xl text-red-400">
                    <span>$75</span>
                    <sup className="-top-0.5 pl-1 text-xs text-gray-500 ">
                      /MO
                    </sup>
                  </span>
                </div>
              </div>
              <div className="w-px bg-gray-200"></div>
              <div className="flex flex-col">
                <span className="mb-2 text-sm font-semibold uppercase text-gray-600">
                  Deposit
                </span>
                <span className="text-4xl font-semibold text-gray-800">
                  <span>$2000</span>
                  <sup className="-top-0.5 pl-1 text-xs text-gray-500 ">
                    /YEAR
                  </sup>
                </span>
              </div>
            </div>

            <div className="flex flex-col space-y-6 md:flex-row md:items-end md:space-x-6 md:space-y-0">
              <button className="rounded-full bg-cyan-100 px-8 py-4 font-medium text-cyan-500 focus:outline-none">
                Request Callback
              </button>
              <button className="rounded-full bg-lime-500 px-8 py-4 font-medium text-white focus:outline-none">
                Book Now
              </button>
            </div>
          </div>
          <div>
            <div className="mt-10 grid aspect-[16/7] grid-rows-2 gap-4 md:grid-cols-2 lg:grid-cols-3">
              <div className="relative col-span-2 row-span-2">
                <Image
                  src="/photos/property5.jpg"
                  layout="fill"
                  objectFit="cover"
                />
              </div>

              <div className="relative ">
                <Image
                  src="/photos/property6.jpg"
                  layout="fill"
                  objectFit="cover"
                />
              </div>

              <div className="relative ">
                <Image
                  src="/photos/property9.jpg"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
          </div>
          <div className="md:px-20">
            <div className="pt-20">
              <h4 className="font-heading text-xl uppercase">Overview</h4>
              <p className="mt-4 leading-9 text-gray-600">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industrys standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book. It has
                survived not only five centuries.
              </p>
            </div>
            <div className="pt-24">
              <h4 className="font-heading text-xl uppercase">Amenities</h4>
              <div className="mt-8 grid gap-6 md:grid-cols-3">
                <div className="flex items-center space-x-3">
                  <BiBed className="h-5 w-5 text-red-400" />
                  <span className="font-medium">2 Bedrooms</span>
                </div>
                <div className="flex items-center space-x-3">
                  <BiBath className="h-5 w-5 text-red-400" />
                  <span className="font-medium">2 Bathrooms</span>
                </div>
                <div className="flex items-center space-x-3">
                  <BiHomeCircle className="h-5 w-5 text-red-400" />
                  <span className="font-medium">Kitchen</span>
                </div>
                <div className="flex items-center space-x-3">
                  <BiSwim className="h-5 w-5 text-red-400" />
                  <span className="font-medium">Swimming Pool</span>
                </div>
                <div className="flex items-center space-x-3">
                  <BiWind className="h-5 w-5 text-red-400" />
                  <span className="font-medium">Central Heating</span>
                </div>
                <div className="flex items-center space-x-3">
                  <BiPodcast className="h-5 w-5 text-red-400" />
                  <span className="font-medium">Garden</span>
                </div>
                <div className="flex items-center space-x-3">
                  <BiCar className="h-5 w-5 text-red-400" />
                  <span className="font-medium">Car Parking</span>
                </div>
              </div>
            </div>
          </div>
          <h4 className="font-heading mt-20 text-xl uppercase">gallery</h4>
          <div className="mt-6 grid gap-8 md:grid-cols-3">
            <div className="aspect-square relative">
              <Image
                src="/photos/property1.jpg"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="aspect-square relative">
              <Image
                src="/photos/property3.jpg"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="aspect-square relative">
              <Image
                src="/photos/property2.jpg"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
          <div className="pt-20">
            <div className="">
              <h4 className="font-heading text-xl uppercase">Location Map</h4>
            </div>

            <div className="aspect-video relative mt-6">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d37633.65975720456!2d-73.88896464710062!3d40.67982311122512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25c445213731d%3A0x19566ced90a1b555!2sCypress%20Hills%2C%20Brooklyn%2C%20NY%2011233%2C%20USA!5e0!3m2!1sen!2sin!4v1654532259365!5m2!1sen!2sin"
                width="1152"
                height="648"
                className="h-full w-full border-0"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          <div className="pt-20">
            <h4 className="font-heading text-xl uppercase">Share:</h4>
            <div className="mt-5">
              <div className="flex space-x-6 md:order-2">
                <a href="#" className="text-gray-400 hover:text-gray-300">
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
                </a>

                <a href="#" className="text-gray-400 hover:text-gray-300">
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
                </a>

                <a href="#" className="text-gray-400 hover:text-gray-300">
                  <span className="sr-only">Twitter</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>

                <a href="#" className="text-gray-400 hover:text-gray-300">
                  <span className="sr-only">GitHub</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>

                <a href="#" className="text-gray-400 hover:text-gray-300">
                  <span className="sr-only">Dribbble</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-emerland-50 px-6 pb-40">
        <div className="mx-auto max-w-6xl">
          <div className="">
            <h4 className="font-heading text-xl uppercase">
              Related properties
            </h4>
          </div>
          <div className="mt-6 grid gap-8 md:grid-cols-3">
            {property.map((item, index) => (
              <PropertyCard key={index + item.name} {...item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const property = [
  {
    name: "2 BHK Villa",
    price: "$140,650",
    image: "/photos/property2.jpg",
    type: "Buy",
    location: "Los Angeles",
    beds: "2",
    baths: "2",
    area: "2,000 SF",
  },
  {
    name: "1 BHK Independent House",
    price: "$1499",
    image: "/photos/property3.jpg",
    type: "Rent",
    location: "San Francisco",
    beds: "1",
    baths: "1",
    area: "1,000 SF",
  },
  {
    name: "2 BHK Apartment",
    price: "$2999",
    image: "/photos/property4.jpg",
    type: "Rent",
    location: "Los Angeles",
    beds: "2",
    baths: "2",
    area: "2,000 SF",
  },
];

export default PropertyDetails;

export function getStaticPaths() {
  return {
    paths: [],
    fallback: true,
  };
}

export async function getStaticProps() {
  const { data: house } = await supabase.from("houses").select("*");

  return {
    props: {
      house,
    },
  };
}
