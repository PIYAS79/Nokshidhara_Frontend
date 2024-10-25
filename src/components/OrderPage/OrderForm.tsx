import Box from '../../assets/packeg.svg'


const OrderForm = () => {
    return (
        <div className="bg-[#D9D9D9] p-[3.12rem] ">
            <div className="content_container bg-white p-[3.12rem] rounded-2xl mx-auto">
                <p className="text-[3rem] font-extrabold text-center">ক্যাশ অন ডেলিভারিতে<br />
                    অর্ডার করতে আপনার তথ্য দিন</p>
                <form className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-[1.5rem] mb-2">আপনার নাম <span className="text-red-500">*</span></span>
                        </label>
                        <input type="text" className="input input-bordered border-black outline-none" required />
                    </div>
                    <div className="form-control mt-8">
                        <label className="label">
                            <span className="label-text text-[1.5rem] mb-2">ফোন নাম্বার <span className="text-red-500">*</span></span>
                        </label>
                        <input type="text" className="input input-bordered border-black outline-none" required />
                    </div>
                    <div className="form-control mt-8">
                        <label className="label">
                            <span className="label-text text-[1.5rem] mb-2">ঠিকানা <span className="text-red-500">*</span></span>
                        </label>
                        <input type="text" className="input input-bordered border-black outline-none" required />
                    </div>

                    {/* <input type="checkbox" defaultChecked className="checkbox checkbox-lg" /> */}
                    <label className="label mt-8">
                        <span className="label-text text-[1.5rem] mb-2">প্যাকেজ সিলেক্ট করুন <span className="text-red-500">*</span></span>
                    </label>
                    <ul className="border border-black p-5 rounded-2xl flex flex-col gap-3 bg-[#D9D9D9]">
                        <li className="flex gap-8 border-b border-black pb-2">
                            <input type="checkbox" defaultChecked className="checkbox checkbox-lg" />
                            <label htmlFor="" className="text-[1.5rem]"> ১০ পিস নকশীকাঁথা ২ টি ইউরিন ম্যাট কম্বো প্যাকেজ</label>
                        </li>
                        <li className="flex gap-8 border-b border-black pb-2">
                            <input type="checkbox" defaultChecked className="checkbox checkbox-lg" />
                            <label htmlFor="" className="text-[1.5rem]"> ৬ পিস নকশীকাঁথা ১ টি ইউরিন ম্যাট কম্বো প্যাকেজ</label>
                        </li>
                        <li className="flex gap-8 border-b border-black pb-2">
                            <input type="checkbox" defaultChecked className="checkbox checkbox-lg" />
                            <label htmlFor="" className="text-[1.5rem]">  ১০ পিস পিন্ট কাঁথা ২ টি ইউরিন ম্যাট কম্বো প্যাকেজ</label>
                        </li>
                        <li className="flex gap-8">
                            <input type="checkbox" defaultChecked className="checkbox checkbox-lg" />
                            <label htmlFor="" className="text-[1.5rem]"> ৬ পিস পিন্ট কাঁথা ১ টি ইউরিন ম্যাট কম্বো প্যাকেজ</label>
                        </li>
                    </ul>

                    <div className="my-10">
                        <hr className="block" />
                        <div className="my-5 flex items-center ">
                            <img src={Box} width={75} className='block' alt="" />
                            <p className="text-[1.75rem] font-bold ml-5">বেবি নকশীকাঁথা  ১০ পিস ২ টি ইউরিন ম্যাট কম্বো প্যাকেজ</p>
                        </div>
                        <hr className="block" />
                    </div>

                    <ul className="border border-black p-5 rounded-2xl flex flex-col gap-3 bg-[#D9D9D9]">
                        <li className="flex justify-between">
                            <label htmlFor="" className="text-[1.5rem]"> সাব টোটাল</label>
                            <label htmlFor="" className="text-[1.5rem]"> Tk 1999.00</label>
                        </li>
                        <li className="flex justify-between border-b border-black pb-2">
                        <label htmlFor="" className="text-[1.5rem]"> ডেলিভারি চার্জ</label>
                            <label htmlFor="" className="text-[1.5rem]"> Tk 130.00</label>
                        </li>
                        <li className="flex gap-8 justify-between ">
                            <label htmlFor="" className="text-[1.5rem] font-black"> সর্বমোট</label>
                            <label htmlFor="" className="text-[1.5rem] font-black">  Tk 2130.00</label>
                        </li>
                    </ul>



                    <div className="form-control mt-8">
                        <label className="label">
                            <span className="label-text text-[1.5rem] mb-2">Order Note <span className="text-red-500">*</span></span>
                        </label>
                        <textarea rows={5} className="input input-bordered border-black outline-none" required />
                    </div>








                    <div className="form-control mt-6">
                        <button className=" mx-auto rounded-xl py-3 px-8 deepPurple text-white text-[1.5rem]">আপনার অর্ডার টি কনফার্ম করতে ক্লিক করুন</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default OrderForm
