import { Outlet } from "react-router-dom"
import Dash_Header from "../components/Dashboard/Dash_Header"
import Dash_Sidebar from "../components/Dashboard/Dash_Sidebar"


const Dashboard_RootPage = () => {
    return (
        <div className="h-[100vh] overflow-y-hidden">
            <Dash_Header />
            <div className="h-[calc(100vh-120px)]">
                <div className="flex h-full">
                    <div className="lightPurple w-[340px]">
                        <Dash_Sidebar/>
                    </div>
                    <div className="w-full h-full">
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard_RootPage
