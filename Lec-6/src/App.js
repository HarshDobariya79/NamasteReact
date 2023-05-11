import React from "react";
import ReactDOM from "react-dom/client";
import Heading, { Content } from "./components/Heading.js";
import ToggleButton from "./components/ToggleButton.js";

const AppLayout = () => {
  return (
    <>
      <Heading />
      <Content />
      <ToggleButton />
    </>
  );
};

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(<AppLayout />);
