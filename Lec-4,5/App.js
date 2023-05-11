import React from "react";
import ReactDOM from "react-dom/client";

// Creating an element
// const heading = React.createElement(
//   "h1",
//   {
//     id: "main-heading",
//     key: "main-heading",
//   },
//   "Hello World!"
// );

// const heading = (
//   <h1 id="main-heading" key="main-heading">Hello World!</h1>
// )

const Heading = () => (
  <h1 id="main-heading" key="main-heading">
    Hello World!
  </h1>
);

// const description = React.createElement(
//   "p",
//   {
//     id: "description",
//     key: "description",
//   },
//   "I've optimized my app using npm and parcel. I've configured babbel."
// );

// const description = (
//   <p id="description" key="description">I've optimized my app using npm and parcel. I've configured babbel.</p>
// )

const Description = () => (
  <p id="description" key="description">I've optimized my app using npm and parcel. I've configured babbel.</p>
)

// Creating a container
// const container = React.createElement(
//   "div",
//   {
//     id: "container",
//   },
//   [heading, description]
// );

const Container = () => (
  <div id="container">
    <Heading />
    <Description />
  </div>
);

// Defining the root of the document
const root = ReactDOM.createRoot(document.getElementById("root"));

// Adding container element to the root, all the content inside the root will be replaced
root.render(<Container />);
