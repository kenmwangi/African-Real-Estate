import React, { useState } from "react";

const CreateProperty = () => {
  const [title, setTitle] = useState("");
<<<<<<< HEAD
  return (
    <div>
      <textarea
        name="title"
        value={title}
        placeholder="Property Title"
      ></textarea>
    </div>
=======
  const [isDisabled, setIsDisabled] = useState(false);
  return (
    <>
      <form className="my-8 rounded-md bg-gray-200 p-8">
        {/* <h2 className="text-lg lg:text-2xl text-slate-700 font-semibold">Create a Listing</h2> */}
        <div className="my-4 flex flex-col">
          <textarea
            name="title"
            placeholder="Property Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="my-2 rounded-md bg-white p-4 text-lg"
          ></textarea>
        </div>
        <div className={`flex items-center justify-between gap-2`}>
          <p
            className={`text-sm font-bold  ${
              title.length > 300 ? "text-rose-500" : "text-slate-500"
            }`}
          >{`${title.length}/300`}</p>
          <button
            className="rounded-lg bg-indigo-500 py-2 px-6 text-sm font-semibold text-white disabled:opacity-25"
            type="submit"
            disabled={isDisabled}
          >
            Post Property
          </button>
        </div>
      </form>
    </>
>>>>>>> e0d9ca0 (fixed importation errors)
  );
};

export default CreateProperty;
