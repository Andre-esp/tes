import React from "react";
import ReactDOM from "react-dom";

import Counter from "count/Counter"
import Header from "header/Header"

import "./index.css";

const App = () => (
  <>
  <div>Name: host123</div>
    <Header />
    <Counter />
    <div>conflict2.1</div>
    <div>conflict2.2</div>
    <div>conflict</div>
    <div>conflict1</div>
  </>
    
);
ReactDOM.render(<App />, document.getElementById("app"));
