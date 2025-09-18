import App from "../App";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import ProductPage from "../pages/ProductsPage";
import ContactPage from "../pages/ContactPage";
import DetailProduct from "../pages/DetailProduct";
import { createBrowserRouter } from "react-router";

const AppRoutes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "product",
        element: <ProductPage />,
      },
      {
        path: "product/:id",
        element: <DetailProduct />,
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
    ],
  },
]);

export default AppRoutes;
