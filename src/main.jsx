import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// * 1 - Configurando router
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
// * Routes components
import Home from "./routes/Home.jsx";
import Contact from "./routes/Contact.jsx";
import App from "./App.jsx";
import ErrorPage from "./routes/ErrorPage.jsx";
import ContactDetails from "./routes/ContactDetails.jsx";
import Name from "./routes/Name.jsx";
import NameDetail from "./routes/NameDetail.jsx";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home />,
//   },
//   {
//     path: "contact",
//     element: <Contact />,
//   },
// ]);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // * Página de erro
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      // * 5 - Nested Routes (Rotas Aninhadas) - Identificador único
      {
        path: "/contact/:id",
        element: <ContactDetails />,
      },
      // * 7 -  Navigate para páginas não existentes
      {
        path: "oldcontact",
        element: <Navigate to="/contact" />,
      },
      // * 8 - Parâmetro opcional
      {
        path: "name/",
        element: <Name />,
      },
      {
        path: "/name-detail",
        element: <NameDetail />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
