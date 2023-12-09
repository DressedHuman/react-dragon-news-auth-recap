import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import ErrorPage from "../layouts/ErrorPage";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import News from "../pages/News/News";
import PrivateRoute from "./PrivateRoute";
import Category from "../pages/Category/Category";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Root/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: '/',
                element: <Home/>,
                loader: () => fetch('/news.json'),
            },
            {
                path: '/news/:id',
                loader: () => fetch('/news.json'),
                element: <PrivateRoute><News /></PrivateRoute>
            },
            {
                path: '/category/:id',
                loader: () => fetch('/news.json'),
                element: <PrivateRoute><Category /></PrivateRoute>
            },
            {
                path: '/login',
                element: <Login />,
            },
            {
                path: '/register',
                element: <Register/>,
            }
        ]
    }
]);

export default routes;