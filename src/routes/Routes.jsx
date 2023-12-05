import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import ErrorPage from "../layouts/ErrorPage";
import Login from "../pages/Login/Login";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Root/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: '/',
                element: <Home/>,
            },
            {
                path: '/login',
                element: <Login />,
            }
        ]
    }
]);

export default routes;