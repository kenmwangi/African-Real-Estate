import React from "react";
import CreateProperty from "src/components/CreateProperty";
import Editor from "../../components/editor";
const SellYourPropertyPage = () => {
  return (
    <div className="mx-auto mb-20 mt-20 flex h-full max-w-4xl items-center justify-center px-10">
      {/* <Editor /> */}
      <CreateProperty />
    </div>
  );
};

export default SellYourPropertyPage;
