import { ReactNode } from "react"
import { useAppSelector } from "../redux/hooks"
import { Navigate, useLocation } from "react-router-dom";



const Private_Page = ({ children }: { children: ReactNode }) => {

    const location = useLocation();
    const { email } = useAppSelector((state) => state.admin)
    if (email) {
        return children;
    }

    return <Navigate state={location?.pathname} to={'/login'} replace={true} />
}

export default Private_Page
