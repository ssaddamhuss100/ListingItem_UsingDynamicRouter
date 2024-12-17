import "./styles.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import { List } from "./pages/List";
import { Contact } from "./pages/Contact";
import { ItemDetails } from "./pages/ItemDetails";
import { NotFound } from "./pages/NotFound";

export default function App() {
  // Define the routes
  const router = createBrowserRouter([
    {
      path: "/", // Root route
      element: <Navbar />, // Navbar will be displayed for all routes
      children: [
        {
          index: true,
          element: <Home />, // Home page for the root path
        },
        { path: "/contact", element: <Contact /> }, // Contact page
        {
          path: "list", // List page and item details
          children: [
            { index: true, element: <List /> }, // List view
            { path: ":itemId", element: <ItemDetails /> } // Item details page
          ]
        }
      ]
    },
    {
      path: "*", // Catch-all route for undefined paths
      element: <NotFound /> // Show the NotFound page for unmatched paths
    }
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}
