import React from "react";
import Routing from "./Routing";
import Navbar from "./Navbar/Navbar";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Routing />
    </div>
  );
};

export default App;
