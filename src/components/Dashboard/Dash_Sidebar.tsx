import { useDispatch } from "react-redux"
import { NavLink, useNavigate } from "react-router-dom"
import { removeAdmin } from "../../redux/features/authSlice";


const Dash_Sidebar = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogoutAdmin = () => {
    dispatch(removeAdmin(undefined));
    navigate('/');
  }


  return (
    <nav className="p-3 w-full">
      <NavLink to={'panel'} className="block p-2 text-center font-sans rounded-lg w-full text-white deepPurple">Admin Panel</NavLink>
      <NavLink to={'order'} className="block p-2 text-center font-sans rounded-lg w-full text-white deepPurple mt-4">Orders</NavLink>
      <NavLink to={'processing'} className="block p-2 text-center font-sans rounded-lg w-full text-white deepPurple mt-4">Processing Orders</NavLink>
      <NavLink to={'details'} className="block p-2 text-center font-sans rounded-lg w-full text-white deepPurple mt-4">Package Details</NavLink>
      <NavLink to={'/'} className="block p-2 text-center font-sans rounded-lg w-full text-white deepPurple mt-4">Homepage</NavLink>
      <button onClick={handleLogoutAdmin} className="block p-2 text-center font-sans rounded-lg w-full text-white bg-red-700 font-bold mt-4">LOGOUT</button>
    </nav>
  )
}

export default Dash_Sidebar
