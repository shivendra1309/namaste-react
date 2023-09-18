{
  /* <div id="parent">
    <div id="child">
        <h1>hi shiv! This is h1</h1>
        <div id="gc">
            <h2>this is h2</h2>
        </div> 
    </div>
    <div id="bro">
        <p>This the the 1st p.</p>
    </div> 
</div> */
}

const heading = React.createElement("div", { id: "parent" }, [
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", {}, [
      "Hi Shiv!, This is H1",
      React.createElement(
        "div",
        { id: "gc" },
        React.createElement("h2", {}, "This is H2")
      ),
    ]),
    React.createElement(
      "div",
      { id: "bro" },
      React.createElement("p", {}, "This is the 1st P.")
    )
  ),
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
