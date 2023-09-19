import React from "react";
import  ReactDOM from "react-dom";

const heading = React.createElement("h1",{}, "hi shiv!");
const root2 = ReactDOM.createRoot(document.getElementById("root1"));
root2.render(heading);