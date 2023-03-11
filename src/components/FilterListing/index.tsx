import React from "react";

const FilterListing = () => {
  return (
    <>
      <div className="flex">
        <div className="mb:block hidden flex-1">{/* space div */}</div>
        <div className="flex-1">
          <h2 className="mb-10 text-2xl font-medium uppercase leading-10">
            Featured Listing
          </h2>
        </div>

        <article className="hidden flex-1 items-center justify-end space-x-4 md:flex">
          <select
            id="type"
            name="type"
            className="w-44 rounded-full border border-gray-200 bg-gray-50 py-2 px-6"
          >
            <option value="">Select service</option>
            <option>Rent</option>
            <option>Sell</option>
          </select>
          <select
            id="type"
            name="type"
            className="w-44 rounded-full border border-gray-200 bg-gray-50 py-2 px-6"
          >
            <option>Newest First</option>
          </select>
        </article>
      </div>
    </>
  );
};

export default FilterListing;
