import React, { useState } from "react";

const SearchInputs = () => {
  
  return (
    <div>
      <form
        action="/listing"
        className="overflow-hidden rounded bg-white shadow-lg md:flex md:items-center"
      >
        <select
          id="type"
          name="type"
          className="font-heading w-full border-t-0 border-b border-l-0 border-r-0 border-gray-300 bg-white py-6 pl-5 pr-12 ring-black focus:border-gray-300 focus:shadow-none focus:outline-none focus:ring-0 md:w-auto md:border-b-0 md:border-r md:pl-8"
        >
          <option value="type">Type</option>
          <option>Buy</option>
          <option>Sell</option>
        </select>
        <select
          id="location"
          name="location"
          className="font-heading w-full border-t-0 border-b border-l-0 border-r-0 border-gray-300 bg-white py-6 pl-5 pr-12 ring-black focus:border-gray-300 focus:shadow-none focus:outline-none focus:ring-0 md:w-auto md:border-b-0 md:border-r md:pl-8"
        >
          <option>Location</option>
          <option>Karen</option>
          <option>Tilisi</option>
          <option>Syokimau</option>
          <option>Kitengela</option>
        </select>
        <select
          id="property_type"
          name="property_type"
          className="font-heading w-full border-t-0 border-b border-l-0 border-r-0 border-gray-300 bg-white py-6 pl-5 pr-12 ring-black focus:border-gray-300 focus:shadow-none focus:outline-none focus:ring-0 md:w-auto md:border-b-0 md:border-r md:pl-8"
        >
          <option>Property Type</option>
          <option>Apartment</option>
          <option>Villa</option>
        </select>
        <select
          id="budget"
          name="budget"
          className="font-heading w-full border-t-0 border-b border-l-0 border-r-0 border-gray-300 bg-white py-6 pl-5 pr-12 ring-black focus:border-gray-300 focus:shadow-none focus:outline-none focus:ring-0 md:w-auto md:border-b-0 md:border-r md:pl-8"
        >
          <option>Budget</option>
          <option>Below $100k</option>
          <option>$100k - $1M</option>
        </select>
        <div className="flex flex-1 items-center justify-center px-4 py-4 md:py-0">
          <button className="rounded-full bg-indigo-500 py-3 px-7 font-medium text-white transition-colors hover:bg-indigo-600">
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchInputs;
