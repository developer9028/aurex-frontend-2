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
import Swap from "../pages/Swap/Swap";
import AppLayout from "../layout/AppLayout";
import StakeDashboard from "../pages/StakeDashboard/StakeDashboard";
import SwapDashboard from "../pages/SwapDashboard/SwapDashboard";

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
                path: "/stake",
                element: <Stake />
            },
            {
                path: "/swap",
                element: <Swap />
            },
            {
                path: "/rewards",
                element: <Rewards />
            },
            {
                path: "/app",
                element: <AppLayout />,
                children: [
                    {
                        path: "dashboard",
                        element: <Dashboard />
                    },
                    {
                        path: "stake",
                        element: <StakeDashboard />
                    },
                    {
                        path: "swap",
                        element: <SwapDashboard />
                    },
                ]
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