import { FormEvent, useState } from "react"

const Dash_Delivery_Sec = () => {

    const [charge, setCharge] = useState(0);

    const handleBannerSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log("WOW")
    }

    return (
        <form onSubmit={handleBannerSubmit} className="card-body max-w-2xl mx-auto  ">
            <div className="form-control">
                <label className="label">
                    <span className="label-text text-[1rem] mb-2">Change Delivery Charg <span className="text-red-500">*</span></span>
                </label>
                <input onChange={e => setCharge(Number(e.target.value))} value={charge} type="text" className="input input-bordered border-black outline-none" required />
            </div>


            <div className="form-control mt-3">
                <button className=" mx-auto rounded-xl py-3 px-8 deepPurple text-white text-[1.5rem]">Change Delivery Charge</button>
            </div>
        </form>
    )
}

export default Dash_Delivery_Sec
