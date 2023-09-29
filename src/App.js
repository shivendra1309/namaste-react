import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AboutUs from "./components/AboutUs";


const AppLayout = () => {
  return (
    <div className="app">
      <div className="header-app">
      <Header />
      </div>
      <div className="body-app">
      <Body />
      </div>
      
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path  :"/",
    element : <AppLayout />
  },
  {
    path : "/about",
    element : <AboutUs />
  },
  {
    path : "/contact",
    element : <h1>Contact Us</h1>
  },

]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);