import React from "react";
import ReactDOM from "react-dom";

import Counter from "count/Counter"
import Header from "header/Header"

import "./index.css";

const App = () => (
  <>
  <div>Name: host</div>
    <Header />
    <Counter />
    <div>conflict1.1</div>
    <div>conflict1.2</div>
  </>
    
);
ReactDOM.render(<App />, document.getElementById("app"));
