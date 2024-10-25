import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import RootPage from "../pages/RootPage";
import OrderPage from "../pages/OrderPage";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";




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
        element: <Dashboard />
    }
])

export default router;