import React, { Component } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import LoginComponent from "./components/LoginComponent";
import List from "./components/List";
import Form from "./components/Form";

ReactDOM.render(<App />, document.getElementById("root"));
ReactDOM.render(<LoginComponent />, document.getElementById("welcome"));
ReactDOM.render(<List />, document.getElementById("list"));
ReactDOM.render(<Form />, document.getElementById("form"));
