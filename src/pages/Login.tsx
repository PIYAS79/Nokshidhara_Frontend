import logo from '../assets/NakshiDharaMain 0.png'




const Login = () => {
  return (
    <div className='max-w-lg flex flex-col justify-center  mx-auto'>

      <div className=' flex justify-center'>
      <img src={logo} width={150} alt="" />
      </div>
      <form className="card-body pt-0">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" required />
        </div>
        <div className="form-control mt-6">
          <button className="btn deepPurple hover:bg-purple-600 text-white font-sans">LOGIN</button>
        </div>
      </form>


    </div>
  )
}

export default Login
