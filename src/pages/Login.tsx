import { FormEvent, useState } from 'react';
import logo from '../assets/NakshiDharaMain 0.png'
import { useLoginUserMutation } from '../redux/api/authApi';
import { useAppDispatch } from '../redux/hooks';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { setUser } from '../redux/features/authSlice';
import Swal from 'sweetalert2';




const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginAdminFnc] = useLoginUserMutation();
  const dispatch = useAppDispatch();
  const location = useLocation();
  const navigate = useNavigate();


  const handleOnSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      // send data to login api route
      const data = await loginAdminFnc({
        email: email,
        password: password
      }).unwrap();
      console.log(data)
      if (data.success) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: data?.message,
          showConfirmButton: false,
          timer: 1500
        });
        const user = data.data;
        //   // set user to redux state
        dispatch(setUser(user));
        //   // after successfully login , then navigate to home route
        navigate(location?.state ? location?.state : '/dashboard/panel');
      }
    } catch (err: any) {
      console.log(err)
      Swal.fire({
        position: "center",
        icon: "error",
        title: err?.data?.message,
        showConfirmButton: false,
        timer: 1500
      });
    }
  }





  return (
    <div className='max-w-lg flex flex-col justify-center  mx-auto'>

      <div className=' flex justify-center'>
        <Link to={'/'}>
          <img src={logo} width={150} alt="" />
        </Link>
      </div>
      <form onSubmit={handleOnSubmit} className="card-body pt-0">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input onChange={e => setEmail(e.target.value)} value={email} type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input onChange={e => setPassword(e.target.value)} value={password} type="password" placeholder="password" className="input input-bordered" required />
        </div>
        <div className="form-control mt-6">
          <button className="btn deepPurple hover:bg-purple-600 text-white font-sans">LOGIN</button>
        </div>
      </form>


    </div>
  )
}

export default Login
