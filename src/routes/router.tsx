import { createBrowserRouter } from "react-router-dom";
import Layout from "../common/widgets/layout/Layout";
import Home from "../modules/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);
