import { Link, NavLink, Outlet, useNavigate } from "react-router-dom"
import whiteLogo from '../assets/white high.png'
import { useDispatch } from "react-redux"
import { removeAdmin } from "../redux/features/authSlice"



const Dashboard_RootPage = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogoutAdmin = () => {
        dispatch(removeAdmin(undefined));
        navigate('/');
    }


    return (
        <div className="drawer lg:drawer-open h-[100vh] overflow-y-hidden">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-start justify-center h-[calc(100vh)] md:h-[calc(100vh-0px)] ">
                <div className="h-[60px] md:h-[120px] deepPurple flex justify-between items-center w-full px-2 md:px-0">
                    <label htmlFor="my-drawer-2" className="btn lightPurple border-none textDeepPurple font-sans drawer-button lg:hidden">
                        Menu
                    </label>
                    <img className='w-[100px] md:w-[175px] mx-auto' src={whiteLogo} />
                </div>
                <Outlet />
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <nav className="menu lightPurple min-h-full w-72 p-4">
                    <div className="deepPurple flex justify-center items-center w-full mb-4 py-2 rounded-lg">
                        <Link to={'/'}>
                            <img className='w-[100px]' src={whiteLogo} />
                        </Link>
                    </div>
                    <NavLink to={'panel'} className="block p-2 text-center font-sans rounded-lg w-full text-white deepPurple">Admin Panel</NavLink>
                    <NavLink to={'order'} className="block p-2 text-center font-sans rounded-lg w-full text-white deepPurple mt-4">Orders</NavLink>
                    <NavLink to={'processing'} className="block p-2 text-center font-sans rounded-lg w-full text-white deepPurple mt-4">Processing Orders</NavLink>
                    <NavLink to={'details'} className="block p-2 text-center font-sans rounded-lg w-full text-white deepPurple mt-4">Package Details</NavLink>
                    <NavLink to={'/'} className="block p-2 text-center font-sans rounded-lg w-full text-white deepPurple mt-4">Homepage</NavLink>
                    <button onClick={handleLogoutAdmin} className="block p-2 text-center font-sans rounded-lg w-full text-white bg-red-700 font-bold mt-4">LOGOUT</button>
                </nav>
            </div>
        </div>
    )
}

export default Dashboard_RootPage
