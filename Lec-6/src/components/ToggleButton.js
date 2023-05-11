import { useState } from "react";

const ToggleButton = () => {
  const [toggleButton, setToggleButton] = useState("Hello");
  return (
    <button
      onClick={() => {
        if (toggleButton == "Hello") {
          setToggleButton("World!");
        } else {
          setToggleButton("Hello");
        }
      }}
    >
      {toggleButton}
    </button>
  );
};

export default ToggleButton;
