import './App.css';
import { useState } from "react";

// import Component, { Component1, Component2 } from "./DefaultAndNamedExports"
import FunctionalComponent from "./FunctionalComponent";
import ClassComponent from "./ClassComponent";

function App() {
  const [total, setTotal] = useState(0);

  const handleUpdateTotal = (val) => {
    setTotal(current => current + val);
  };

  return (
    <div className="App">
      <h3>App Component</h3>
      <p>Total Count: {total}</p>
      <hr />
      {/* <Component1 />
      <Component2 />
      <Component /> */}
      <FunctionalComponent updateTotal={handleUpdateTotal} />
      <hr />
      <ClassComponent updateTotal={handleUpdateTotal} />
      <hr />
    </div>
  );
}

export default App;
