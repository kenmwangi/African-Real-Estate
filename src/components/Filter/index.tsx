import React, { useState } from "react";

const FilterProperty = () => {
  const [showFilter, setShowFilter] = useState(true);
  const [bedroom, setBedroom] = useState(2);
  const [kitchen, setKitchen] = useState(1);
  const [bathrooms, setBathrooms] = useState(1);

  return (
    <section className="mb-7 rounded-sm border bg-white shadow-lg">
      <div className="border-b px-6 py-4">
        <h3 className="flex text-lg uppercase text-indigo-700">
          <span>Filter Section</span>
          <button
            onClick={() => setShowFilter(!showFilter)}
            className="ml-auto text-sm text-gray-500 lg:hidden"
          >
            <span className="font-medium text-slate-900">
              {showFilter ? "Hide" : "Show"}
            </span>
          </button>
        </h3>
      </div>
      <article
        className={`space-y-10 px-6 py-10 ${showFilter ? "" : "hidden"}`}
      >
        <div>
          <h3 className="font-semibold uppercase">Property Type</h3>
          <select
            name="type"
            id="type"
            className="mt-4 w-full rounded-sm border-gray-200 px-6 py-3"
          >
            <option value="property">Select Property</option>
            <option value="villa">Villa</option>
            <option value="mansion">Mansion</option>
            <option value="apartment">Apartment</option>
          </select>
        </div>

        {/* Facilities */}
        <div>
          <h3 className="font-semibold uppercase">Facilities</h3>
          <table className="mt-4 w-full">
            <tbody>
              <tr>
                <td className="py-2 text-gray-700">Bedroom</td>
                <td className="flex items-end justify-end space-x-5 py-2 text-right font-medium text-gray-500">
                  <button
                    className="focus:outline-none"
                    onClick={() => setBedroom(Math.max(bedroom - 1, 0))}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="h-6 w-6 text-rose-600"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </button>
                  <span className="text-lg font-bold text-slate-900 lg:text-xl">
                    {bedroom}
                  </span>
                  <button
                    className=" focus:outline-none"
                    onClick={() => setBedroom(Math.max(bedroom + 1, 0))}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="h-6 w-6 text-green-600"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </button>
                </td>
              </tr>
              {/* Bathrooms */}
              <tr>
                <td className="py-2 text-gray-500">Bathroom</td>
                <td className="flex items-end justify-end space-x-5 py-2 text-right font-medium text-gray-500">
                  <button
                    className="focus:outline-none"
                    onClick={() => setBathrooms(Math.max(bathrooms - 1, 0))}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="h-6 w-6 text-rose-500"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </button>
                  <span className="margin-auto text-lg font-bold text-slate-900 lg:text-xl">
                    {bathrooms}
                  </span>
                  <button
                    className="focus:outline-none"
                    onClick={() => setBathrooms(bathrooms + 1)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="h-6 w-6 text-green-600"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </button>
                </td>
              </tr>
              {/* Kitchen */}
              <tr>
                <td className="py-2 text-gray-500">Kitchen</td>
                <td className="space-x-5 py-2 text-right font-medium text-gray-500">
                  <button
                    className="focus:outline-none"
                    onClick={() => setKitchen(Math.max(kitchen - 1, 0))}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="h-6 w-6 text-rose-500"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </button>
                  <span className="margin-auto text-lg font-bold text-slate-900 lg:text-xl">
                    {kitchen}
                  </span>
                  <button
                    className="focus:outline-none"
                    onClick={() => setKitchen(kitchen + 1)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="h-6 w-6 text-green-600"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </button>
                </td>
              </tr>
              {/* Select Addition Features */}
              <tr>
                <td className="py-2 text-gray-600">Living Room</td>
                <td className="py-2 text-right">
                  <input
                    type="checkbox"
                    name=""
                    id=""
                    className="h-5 w-5 rounded border-gray-300 text-rose-600 shadow-sm focus:border-rose-300 focus:ring focus:ring-rose-200 focus:ring-opacity-50 focus:ring-offset-0"
                  />
                </td>
              </tr>
              <tr>
                <td className="py-2 text-gray-600">Swimming Pool</td>
                <td className="py-2 text-right">
                  <input
                    type="checkbox"
                    name=""
                    id=""
                    className="h-5 w-5 rounded border-gray-300 text-rose-600 shadow-sm focus:border-rose-300 focus:ring focus:ring-rose-200 focus:ring-opacity-50 focus:ring-offset-0"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="flex flex-1 items-center justify-center pt-7">
          <button className="rounded-full bg-indigo-600 py-3 px-7 font-medium text-white transition-colors hover:bg-indigo-800 focus:outline-none">
            Search Now
          </button>
        </div>
      </article>
    </section>
  );
};

export default FilterProperty;
