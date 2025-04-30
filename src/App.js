// src/App.js
import React from "react";
import { Link, IndexLink } from "react-router";
// import {
//   dummyFunctionFromModule,
//   dummyVariable,
// } from "./pages/Page1/page1Module"; // Import from the module
import Component1 from "./Components/Component1";
const App = ({ children, location }) => {
  const showSidebar =
    location.pathname === "/" || location.pathname === "/page1";

  return (
    <div className="app-container">
      {showSidebar && (
        <nav>
          <ul>
            <li>
              <IndexLink to="/" activeClassName="active">
                Page 1
              </IndexLink>
            </li>
            <li>
              <Link to="/page2" activeClassName="active">
                Page 2
              </Link>
            </li>
            <li>
              <Link to="/page3" activeClassName="active">
                Page 3
              </Link>
            </li>
            {/* Dummy links to fill the sidenav */}
            {Array.from({ length: 20 }, (_, i) => (
              <li key={i + 3}>
                <a href="#">Dummy Item{i + 1}</a>
              </li>
            ))}
          </ul>
        </nav>
      )}
      <p>Data from module: {moduleData}</p> <Component1 />
      {/* Display data from the function */}
      {/* {<p>Variable from module: {dummyVariable}</p>} */}
      <main style={showSidebar ? {} : { width: "100%" }}>{children}</main>
    </div>
  );
};

export default App;
