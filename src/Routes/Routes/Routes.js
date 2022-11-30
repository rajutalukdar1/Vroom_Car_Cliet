import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";
import AllCars from "../../Pages/AllCars/AllCars";
import Blog from "../../Pages/Blog/Blog";
import AddProducts from "../../Pages/Dashboard/AddProducts/AddProducts";
import AllSeller from "../../Pages/Dashboard/AllUsers/Admin/AllSeller";
import AllUsers from "../../Pages/Dashboard/AllUsers/AllUsers";
import MyBuyers from "../../Pages/Dashboard/AllUsers/Seller/MyBuyers";
import SellingProducts from "../../Pages/Dashboard/AllUsers/Seller/SellingProducts";
import MyProducts from "../../Pages/Dashboard/MyProducts/MyProducts";
import Payment from "../../Pages/Dashboard/Payment/Payment";
import ErrorPage from "../../Pages/ErrorPages/ErrorPage";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Products from "../../Pages/Products/Products";
import DisplayError from "../../Pages/Shared/DisplayError/DisplayError";
import SignUp from "../../Pages/SignUp/SignUp";
import AdminRoute from "../AdminRoute/AdminRoute";
import PrivetRoute from "../PrivetRoute/PrivetRoute";
import SellerRoute from "../SellerRoute/SellerRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <DisplayError></DisplayError>,
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
                element: <PrivetRoute><AllCars></AllCars></PrivetRoute>
            },
            {
                path: '/products/:car_id',
                loader: ({ params }) => fetch(`https://vroom-car-ass-12.vercel.app/products/${params.car_id}`),
                element: <PrivetRoute><Products></Products></PrivetRoute>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/Signup',
                element: <SignUp></SignUp>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivetRoute><DashboardLayout></DashboardLayout></PrivetRoute>,
        errorElement: <DisplayError></DisplayError>,
        children: [
            {
                path: '/dashboard',
                element: <MyProducts></MyProducts>
            },
            {
                path: '/dashboard/allusers',
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            {
                path: '/dashboard/allsellers',
                element: <AdminRoute><AllSeller></AllSeller></AdminRoute>
            },
            {
                path: '/dashboard/allbuyers',
                element: <AdminRoute><MyBuyers></MyBuyers></AdminRoute>
            },
            {
                path: '/dashboard/payment/:id',
                element: <Payment></Payment>,
                loader: ({ params }) => fetch(`https://vroom-car-ass-12.vercel.app/bookings/${params.id}`)
            },
            {
                path: '/dashboard/addproduct',
                element: <SellerRoute><AddProducts></AddProducts></SellerRoute>
            },
            {
                path: '/dashboard/sellingproducts',
                element: <SellerRoute><SellingProducts></SellingProducts></SellerRoute>
            },


        ]
    },
    {
        path: '*',
        element: <ErrorPage></ErrorPage>
    }
])

export default router;