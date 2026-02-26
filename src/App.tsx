import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { HyfixMainPage } from "./screens/HyfixMainPage";
import { HyfixMainPageScreen } from "./screens/HyfixMainPageScreen";
import { HyfixMainPageWrapper } from "./screens/HyfixMainPageWrapper/HyfixMainPageWrapper";
import { ContactPageScreen } from "./screens/ContactPageScreen/ContactPageScreen";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HyfixMainPageScreen />,
  },
  {
    path: "/home",
    element: <HyfixMainPageScreen />,
  },
  {
    path: "/applications",
    element: <HyfixMainPage />,
  },
  {
    path: "/about",
    element: <HyfixMainPageWrapper />,
  },
  {
    path: "/contact",
    element: <ContactPageScreen />,
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
