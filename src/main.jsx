import ReactDOM from "react-dom";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Homepage from "./Pages/HomePage/Homepage.jsx";
import About from "./Pages/AboutPage/About.jsx";
import Contacts from "./Pages/ContactPage/Contacts.jsx";
import WorksPage from "./Pages/WorksPage/WorksPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/works",
    element: <WorksPage />,
  },
  {
    path: "/contacts",
    element: <Contacts />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <RouterProvider router={router} />
  </>
);
