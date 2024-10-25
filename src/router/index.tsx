import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import RootPage from "../pages/RootPage";
import OrderPage from "../pages/OrderPage";
import Login from "../pages/Login";
import Dashboard_RootPage from "../pages/Dashboard_RootPage";
import Dashboard_OrderPage from "../pages/Dashboard_OrderPage";
import Dash_ProcessPage from "../pages/Dash_ProcessPage";
import Dash_DetailsPage from "../pages/Dash_DetailsPage";
import Dashboard_PanelPage from "../pages/Dashboard_PanelPage";




const router = createBrowserRouter([
    {
        path: '/',
        element: <RootPage />,
        children: [
            {
                path: '/',
                element: <HomePage />
            },
            {
                path: '/order',
                element: <OrderPage />
            }
        ]
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/dashboard',
        element: <Dashboard_RootPage />,
        children: [
            {
                path: 'panel',
                element: <Dashboard_PanelPage />
            },
            {
                path: 'order',
                element: <Dashboard_OrderPage />
            },
            {
                path: 'processing',
                element: <Dash_ProcessPage />
            },
            {
                path: 'details',
                element: <Dash_DetailsPage />
            }
        ]
    }
])

export default router;