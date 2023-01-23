import { useState } from "react";

interface Input {
  name: string;
  price: number;
  // categories: MultiValue<{value: string; label: string}>
}

const initialInput = {
  name: "",
  price: 0,
  categories: [],
  file: undefined,
};

const MenuPage = () => {
  const [input, setInput] = useState(initialInput);
  return <div>MenuPage</div>;
};

export default MenuPage;
