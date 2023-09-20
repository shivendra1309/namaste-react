import React from "react";
import ReactDOM from "react-dom/client";

const ReactElement = <h1>This is an element</h1>;
const ReactComponent = () => <h1>This is an reactComponent</h1>;
const ReactComponent1 = () => <h1>This is react component 1</h1>;
const ReactComponent2 = () =>{ 
  return(
  <div className="container">
    <ReactComponent />
    <h1>This is reactComponent2</h1>
    <ReactComponent1 />
  </div>
);
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<ReactComponent2 />);
