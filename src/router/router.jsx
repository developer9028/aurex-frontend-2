import { createBrowserRouter } from "react-router";
import Layout from "../layout/Layout";
import Home from "../pages/Home/Home";
import Dashboard from "../pages/Dashboard/Dashboard";
import Stake from "../pages/Stake/Stake";
import Rewards from "../pages/Rewards/Rewards";
import NodeSale from "../pages/NodeSale/NodeSale";

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
]);

export default router;