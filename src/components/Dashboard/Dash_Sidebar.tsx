import { NavLink } from "react-router-dom"


const Dash_Sidebar = () => {
  return (
    <nav className="p-3 w-full">
      <NavLink to={'panel'} className="block p-2 text-center font-sans rounded-lg w-full text-white deepPurple">Admin Panel</NavLink>
      <NavLink to={'order'} className="block p-2 text-center font-sans rounded-lg w-full text-white deepPurple mt-4">Orders</NavLink>
      <NavLink to={'processing'} className="block p-2 text-center font-sans rounded-lg w-full text-white deepPurple mt-4">Processing Orders</NavLink>
      <NavLink to={'details'} className="block p-2 text-center font-sans rounded-lg w-full text-white deepPurple mt-4">Package Details</NavLink>
      <NavLink to={'/'} className="block p-2 text-center font-sans rounded-lg w-full text-white deepPurple mt-4">Homepage</NavLink>
    </nav>
  )
}

export default Dash_Sidebar
