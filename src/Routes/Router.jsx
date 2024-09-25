import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import NotFound from "../Pages/NotFound";
import Dashboard from "../Layout/Dashboard";
import ViewTrade from "../components/ViewTrade";
import DashboardHome from "../Pages/Dashboard/DashboardHome";
import AddData from "../components/AddData";
import Login from "../Pages/Login/Login";
import SingUp from "../Pages/Login/SingUp";
import ProtectedRoute from "./ProtectedRoute";
import Home from "../Pages/Home/Home";
import Products from "../Pages/Products/Products";
import Contact from "../Pages/Contact/Contact";
import Blog from "../Pages/Blog/Blog";
import AboutUs from "../Pages/About/AboutUs";
import MembershipPage from "../Pages/Membership/MembershipPage";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/about',
                element: <AboutUs />
            },
            {
                path: '/products',
                element: <Products />
            },
            {
                path: '/membership',
                element: <MembershipPage />
            },
            {
                path: '/contact',
                element: <Contact />
            },
            {
                path: '/blog',
                element: <Blog />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/singup",
                element: <SingUp />
            },
            {
                path: '*',
                element: <NotFound />
            }
        ]
    },

    {
        path: 'dashboard',
        element: <ProtectedRoute><Dashboard /></ProtectedRoute>,
        children: [
            {
                path: "home",
                element: <DashboardHome />
            },
            {
                path: "addTrade",
                element: <AddData />
            },
            {
                path: "allTrades",
                element: <ViewTrade />
            },
            {
                path: '*',
                element: <NotFound />
            }

        ]
    }
]);