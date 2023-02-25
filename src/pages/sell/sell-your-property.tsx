import React from "react";

import Container from "src/components/Container";

import CreateProperty from "src/components/CreateProperty";
import Editor from "../../components/editor";
const SellYourPropertyPage = () => {
  return (
    <Container className="mb-20 mt-20 px-10">
      {/* <Editor /> */}
      <CreateProperty />
    </Container>
  );
};

export default SellYourPropertyPage;
