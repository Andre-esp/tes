import React from "react";
import ReactDOM from "react-dom";

import Counter from "count/Counter"
import Header from "header/Header"

import "./index.css";

const App = () => (
  <>
  <div>Name: host11232</div>
    <Header />
    <Counter />
  </>
    
);
ReactDOM.render(<App />, document.getElementById("app"));
