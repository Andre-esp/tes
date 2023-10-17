import React from "react";
import ReactDOM from "react-dom";

import Header from "./Header";

// import style from "./header-css.module.css";

const App = () => (
  <div className="container">
    <div>Name: header</div>
    <Header />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
