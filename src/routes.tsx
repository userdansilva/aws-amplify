import { createBrowserRouter } from "react-router-dom";
import { Dashboard } from "./pages/dashboard";
import { SignIn } from "./pages/signIn";

const router = createBrowserRouter([
  {
    path: "/signin",
    element: <SignIn />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
]);

export { router };
