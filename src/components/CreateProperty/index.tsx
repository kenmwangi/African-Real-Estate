import React, { useState } from "react";

const CreateProperty = () => {
  const [title, setTitle] = useState("");
  return (
    <div>
      <textarea
        name="title"
        value={title}
        placeholder="Property Title"
      ></textarea>
    </div>
  );
};

export default CreateProperty;
