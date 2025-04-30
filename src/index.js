// src/index.js
import React from "react";
import ReactDOM from "react-dom";
import { Router, browserHistory, applyRouterMiddleware } from "react-router";
import { useScroll } from "react-router-scroll";
import createRoutes from "./routes/createRoutes";
import "./App.css";

const routes = createRoutes();

ReactDOM.render(
  <Router
    history={browserHistory}
    routes={routes}
    render={applyRouterMiddleware(useScroll())}
  />,
  document.getElementById("root")
);
