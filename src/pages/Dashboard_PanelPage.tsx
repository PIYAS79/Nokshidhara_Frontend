

const Dashboard_PanelPage = () => {
  return (
    <div className="p-3 font-sans h-full overflow-y-scroll">
      <h1 className="text-center text-3xl font-semibold textDeepPurple ">Admin Panel</h1>
      <hr className="block my-3" />
      <div className="max-w-2xl  mx-auto w-full flex p-3 gap-10">
        <div className="w-[50%] lightPurple textDeepPurple aspect-square rounded-xl flex flex-col justify-around items-center">
          <h1 className="text-[2rem] font-semibold">Total Orders</h1>
          <h1 className="text-[5rem] font-bold -mt-16">00</h1>
        </div>
        <div className="w-[50%] lightPurple textDeepPurple aspect-square rounded-xl flex flex-col justify-around items-center">
          <h1 className="text-[2rem] font-semibold">Complete Orders</h1>
          <h1 className="text-[5rem] font-bold -mt-16">00</h1>
        </div>
      </div>





      <form className="card-body max-w-2xl mx-auto  mb-24">


        <div className="form-control">
          <label className="label">
            <span className="label-text text-[1rem] mb-2">Banner Photo Link 1 <span className="text-red-500">*</span></span>
          </label>
          <input type="text" className="input input-bordered border-black outline-none" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-[1rem] mb-2">Banner Photo Link 2 <span className="text-red-500">*</span></span>
          </label>
          <input type="text" className="input input-bordered border-black outline-none" required />
        </div>
      
        <div className="form-control">
          <label className="label">
            <span className="label-text text-[1rem] mb-2">Banner Photo Link 3 <span className="text-red-500">*</span></span>
          </label>
          <input type="text" className="input input-bordered border-black outline-none" required />
        </div>
      
        <div className="form-control">
          <label className="label">
            <span className="label-text text-[1rem] mb-2">Banner Photo Link 4 <span className="text-red-500">*</span></span>
          </label>
          <input type="text" className="input input-bordered border-black outline-none" required />
        </div>
      

        <div className="form-control mt-3">
          <button className=" mx-auto rounded-xl py-3 px-8 deepPurple text-white text-[1.5rem]">Submit Banner Photos</button>
        </div>
      </form>
    </div>
  )
}

export default Dashboard_PanelPage
