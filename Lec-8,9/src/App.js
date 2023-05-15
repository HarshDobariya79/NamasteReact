import react from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header.js";
import Home from "./components/Home.js";
import About from "./components/About.js";
import Footer from "./components/Footer.js";
import Error from "./components/Error.js";
import Dynamic from "./components/Dynamic.js";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

const appRouter = createBrowserRouter([
    { 
        path: "/",
        element: <AppLayout />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/:id",
                element: <Dynamic />
            }
        ]
    }]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
