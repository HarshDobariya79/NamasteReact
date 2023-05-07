import React from 'react';
import ReactDOM from'react-dom/client';

// Creating an element
const heading = React.createElement(
  "h1",
  {
    id: "main-heading",
  },
  "Hello World!"
);

const description = React.createElement(
  "p",
  {
    id: "description",
  },
  "I've optimized my app using npm and parcel."
);

// Creating a container
const container = React.createElement(
  "div",
  {
    id: "container",
  },
  [heading, description]
);

// Defining the root of the document
const root = ReactDOM.createRoot(document.getElementById("root"));

// Adding container element to the root, all the content inside the root will be replaced
root.render(container);
