import LogginScreens from "./components";
import { createBrowserRouter } from "react-router-dom";

export const loginRouter = createBrowserRouter(
  [
    {
        path: "/",
        element: <div>Tela principal</div>
    },

    {
        path: "/login",
        element: <LogginScreens/>
    }

],

  {
    basename: '/vendas-online'
  }

);