import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import App from "../App";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home/Home";
import Menu from "../pages/Menu/Menu";
import Order from "../pages/Order/Order";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import DashBoard from "../layout/DashBoard";
import Cart from "../pages/Dashboard/Cart/Cart";
import Users from "../pages/Dashboard/users/Users";
import AddItems from "../pages/Dashboard/AddItems/AddItems";
import AdminRoute from "./AdminRoute";
import ManageItems from "../pages/Dashboard/ManageItems/ManageItems";
import UpdateItem from "../pages/Dashboard/UpdateItem/UpdateItem";
import Payment from "../pages/Dashboard/payment/Payment";
import PaymentHistory from "../pages/Dashboard/PaymentHistory/PaymentHistory";


export const router = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/menu',
                element:<PrivateRoute><Menu></Menu></PrivateRoute>
            },
            {
                path:'/order/:category',
                element:<Order></Order>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            }

        ]

    },
    {
        path:'dashboard',
        element:<DashBoard></DashBoard>,
        children:[
            {
                path:'cart',
                element:<PrivateRoute><Cart></Cart></PrivateRoute>
            },
            {
                path:'payment',
                element:<Payment></Payment>
            },
            {
                path:'paymentHistory',
                element:<PaymentHistory></PaymentHistory>
            }
            ,
            {
                path:'users',
                element:<AdminRoute><Users></Users></AdminRoute>
            },
            {
                path:'addItems',
                element:<AdminRoute><AddItems></AddItems></AdminRoute>
            },
            {
                path:'manageItems',
                element:<AdminRoute><ManageItems></ManageItems></AdminRoute>
            },
            {
                path:'updateItem/:id',
                element:<AdminRoute><UpdateItem></UpdateItem></AdminRoute>,
                loader:({params})=>fetch(`http://localhost:5000/menu/${params.id}`)
            }
        ]
    }
])