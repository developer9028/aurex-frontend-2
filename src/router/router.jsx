import { createBrowserRouter } from "react-router";
import Layout from "../layout/Layout";
import Home from "../pages/Home/Home";
import Dashboard from "../pages/Dashboard/Dashboard";
import Stake from "../pages/Stake/Stake";
import Rewards from "../pages/Rewards/Rewards";
import NodeSale from "../pages/NodeSale/NodeSale";
import AdminLogin from "../pages/AdminLogin/AdminLogin";
import AdminLayout from "../layout/AdminLayout";
import AdminDashboard from "../pages/AdminDashboard/AdminDashboard";
import AdminUpdate from "../pages/AdminUpdate/AdminUpdate";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "/node-sale",
                element: <NodeSale />
            },
            {
                path: "/dashboard",
                element: <Dashboard />
            },
            {
                path: "/stake",
                element: <Stake />
            },
            {
                path: "/rewards",
                element: <Rewards />
            },


        ]
    },
    {
        path: '/admin/login',
        element: <AdminLogin />
    },
    {
        path: '/admin',
        element: <AdminLayout />,
        children: [
            {
                path: 'dashboard',
                element: <AdminDashboard />
            },
            {
                path: 'update',
                element: <AdminUpdate />
            }
        ]
    }
]);

export default router;