import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import AllCars from "../../Pages/AllCars/AllCars";
import Blog from "../../Pages/Blog/Blog";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Products from "../../Pages/Products/Products";
import SignUp from "../../Pages/SignUp/SignUp";
import PrivetRoute from "../PrivetRoute/PrivetRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/blog',
                element: <PrivetRoute><Blog></Blog></PrivetRoute>
            },
            {
                path: '/productAll',
                element: <AllCars></AllCars>
            },
            {
                path: '/products/:car_id',
                loader: ({ params }) => fetch(`http://localhost:5000/products/${params.car_id}`),
                element: <Products></Products>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/Signup',
                element: <SignUp></SignUp>
            }
        ],
    }
])

export default router;