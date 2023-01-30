import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Button from "src/components/Button";
import GenericHero from "src/components/GenericHero";

const ContactPage = () => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    control,
    setValue,
    formState: { errors, isSubmitSuccessful, isSubmitting },
  } = useForm({ mode: "onTouched" });

  //   states
  const [isSuccess, setIsSuccess] = useState(false);
  const [message, setMessage] = useState(false);

  // Access Key
  const accessKey = process.env.WEB3FORMS_KEY;

  return (
    <section className="pb-40">
      <GenericHero title="Contact Us" />
      <article className="px-6 py-12">
        <div className="mx-auto max-w-6xl">
          <div className="mt-6 space-y-5 md:flex md:items-center md:space-y-0 md:space-x-5">
            {/* <div className="flex flex-col items-center justify-center space-y-4 text-center md:w-1/3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-red-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <div>
                <h4 className="font-heading text-2xl uppercase">Address</h4>
                <p className="mt-2 leading-8 text-gray-700">
                  70 Bowman St. <br />
                  South Windsor, CT 06074
                </p>
              </div>
            </div> */}
            <div className="flex flex-col items-center justify-center space-y-4 text-center md:w-1/2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-red-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                />
              </svg>
              <div>
                <h4 className="font-heading text-2xl uppercase">
                  Email Address
                </h4>
                <p className="mt-2 leading-8 text-gray-700">
                  Africanrealestate0@gmail.com
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center space-y-4 text-center md:w-1/2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-red-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 3h5m0 0v5m0-5l-6 6M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z"
                />
              </svg>
              <div>
                <h4 className="font-heading text-2xl uppercase">CALL US</h4>

                <p className="mt-2 leading-8 text-gray-700">+254 732945534</p>
              </div>
            </div>
          </div>
          {/* Contact Form */}
          <section className="mt-20">
            <h2 className="text-center text-2xl uppercase leading-10">
              Reach Us
            </h2>
            <form className="mt-8">
              <input
                type="checkbox"
                id=""
                className="hidden"
                style={{ display: "none" }}
                {...register("botcheck")}
              ></input>

              <div className="grid gap-8 md:grid-cols-2">
                <input
                  type="text"
                  className={`border-0 border-b px-0  focus:ring-0 ${
                    errors.name
                      ? "border-red-600 focus:border-red-600 "
                      : "border-gray-400 focus:border-gray-900   "
                  }
                    `}
                  placeholder="Name*"
                  {...register("name", {
                    required: "Full name is required",
                    maxLength: 80,
                  })}
                />
                <input
                  type="email"
                  placeholder="Email*"
                  className={`border-0 border-b px-0  focus:ring-0 ${
                    errors.email
                      ? "border-red-600 focus:border-red-600 "
                      : "border-gray-400 focus:border-gray-900   "
                  }
                    `}
                  {...register("email", {
                    required: "Enter your email",
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: "Please enter a valid email",
                    },
                  })}
                />
                <input
                  type="text"
                  className={`border-0 border-b px-0  focus:ring-0 ${
                    errors.phone
                      ? "border-red-600 focus:border-red-600 "
                      : "border-gray-400 focus:border-gray-900   "
                  }
                    `}
                  placeholder="Phone*"
                  {...register("phone", {
                    required: "Enter your Phone",
                  })}
                />
                <select
                  id="type"
                  className={`border-0 border-b px-0  focus:ring-0 ${
                    errors.type
                      ? "border-red-600 focus:border-red-600 "
                      : "border-gray-400 focus:border-gray-900   "
                  }
                    `}
                  {...register("type", {
                    required: "Choose Type",
                  })}
                >
                  <option>Buy</option>
                  <option>Sell</option>
                </select>
                <textarea
                  className={`h-64 border-0 border-b px-0 focus:ring-0   md:col-span-2 ${
                    errors.message
                      ? "border-red-600 focus:border-red-600 "
                      : "border-gray-400 focus:border-gray-900   "
                  }
                    `}
                  placeholder="Message*"
                  {...register("message", {
                    required: "Enter your Message",
                  })}
                />
              </div>
              <div className="mt-8 flex items-center justify-center">
                <button
                  type="submit"
                  className="w-44 rounded-full bg-indigo-500 py-3 px-7 font-medium text-white transition-colors hover:bg-indigo-600"
                >
                  {isSubmitting ? (
                    <svg
                      className="mx-auto h-6 w-6 animate-spin text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                  ) : (
                    "Send Message"
                  )}
                </button>
              </div>
              {isSubmitSuccessful && isSuccess && (
                <div className="mt-3 text-center text-sm text-green-300">
                  {message || "Success. Message sent successfully"}
                </div>
              )}
              {isSubmitSuccessful && !isSuccess && (
                <div className="mt-3 text-center text-sm text-red-500">
                  {message || "Something went wrong. Please try later."}
                </div>
              )}
            </form>
          </section>
        </div>
      </article>
    </section>
  );
};

export default ContactPage;
