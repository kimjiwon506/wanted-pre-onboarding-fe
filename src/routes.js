import { Navigate, useRoutes } from "react-router-dom";
import Login from "./pages/Login";
import Join from './pages/Join'
import Todo from "./pages/Todo";


const Routes = () => {
  return useRoutes([
    {
      path: "/",
      element: <Join />
    },
    {
      path: "/signin",
      element: <Login />,
    },
    {
      path: "/todos",
      element: <Todo />,
    },
    // {
    //   path: "/todos", 
    //   element: <Todo />,
    // },
    {
      path: "*",
      element: <Navigate to={"/"} replace />,
    },
  ]);
};

export default Routes;
