// src/routes/createRoutes.js
import App from "../App"; // Import the App component
import Page1Route from "../pages/Page1";
import Page2Route from "../pages/Page2";
import Page3Route from "../pages/Page3";

export const createRoutes = () => ({
  path: "/",
  component: App, // Use the App component directly
  indexRoute: Page1Route(), // Use the route definition for Page 1
  childRoutes: [Page1Route(), Page2Route(), Page3Route()],
});

export default createRoutes;
