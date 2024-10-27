import React, { useState } from 'react';
import Box from '../../assets/packeg.svg';
import { useGetAllPackageQuery } from '../../redux/api/packageApi';
import { Single_Package_Type } from '../Global/package_type';
import { useCreateOrderMutation } from '../../redux/api/orderApi';



const OrderForm = () => {
    const [createOrderFnc] = useCreateOrderMutation();
    const { data: x } = useGetAllPackageQuery(undefined);
    const packages = x?.filter((one: Single_Package_Type) => one.package_status === "ACTIVE");

    const [selectedPackages, setSelectedPackages] = useState<{ id: string; price: number }[]>([]);
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [address, setAddress] = useState('');
    const [orderNote, setOrderNote] = useState('');
    const [showPopup, setShowPopup] = useState(false); 
    
    const handlePackageChange = (packageId: string, packagePrice: number) => {
        setSelectedPackages(prevSelected => {
            const isSelected = prevSelected.find(pkg => pkg.id === packageId);
            if (isSelected) {
                return prevSelected.filter(pkg => pkg.id !== packageId);
            } else {
                return [...prevSelected, { id: packageId, price: packagePrice }];
            }
        });
    };

    // Calculate total price based on selected packages
    const totalPrice = selectedPackages.reduce((total, pkg) => total + pkg.price, 0);

    // Handle form submission
    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        const formData = {
            name,
            phone: phoneNumber,
            address,
            orderNote,
            packageId: selectedPackages.map(pkg => pkg.id)
        };

        try {
            const result = await createOrderFnc(formData);
            console.log(result);
            if (result?.data?.success) {
                setShowPopup(true);
                setTimeout(() => setShowPopup(false), 2000);
            }
        } catch (err: any) {
            console.log(err);
        }
        
        resetForm();
    };

    const resetForm = () => {
        setName('');
        setPhoneNumber('');
        setAddress('');
        setOrderNote('');
        setSelectedPackages([]);
    };

    return (
        <div className="bg-[#D9D9D9] p-[3.12rem] ">
            <div className="content_container bg-white p-[3.12rem] rounded-2xl mx-auto">
                <p className="text-[3rem] font-extrabold text-center">ক্যাশ অন ডেলিভারিতে<br />
                    অর্ডার করতে আপনার তথ্য দিন</p>
                <form className="card-body" onSubmit={handleSubmit}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-[1.5rem] mb-2">আপনার নাম <span className="text-red-500">*</span></span>
                        </label>
                        <input
                            type="text"
                            className="input input-bordered border-black outline-none"
                            value={name}
                            onChange={e => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-control mt-8">
                        <label className="label">
                            <span className="label-text text-[1.5rem] mb-2">ফোন নাম্বার <span className="text-red-500">*</span></span>
                        </label>
                        <input
                            type="text"
                            className="input input-bordered border-black outline-none"
                            value={phoneNumber}
                            onChange={e => setPhoneNumber(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-control mt-8">
                        <label className="label">
                            <span className="label-text text-[1.5rem] mb-2">ঠিকানা <span className="text-red-500">*</span></span>
                        </label>
                        <input
                            type="text"
                            className="input input-bordered border-black outline-none"
                            value={address}
                            onChange={e => setAddress(e.target.value)}
                            required
                        />
                    </div>

                    <label className="label mt-8">
                        <span className="label-text text-[1.5rem] mb-2">প্যাকেজ সিলেক্ট করুন <span className="text-red-500">*</span></span>
                    </label>
                    <ul className="border border-black p-5 rounded-2xl flex flex-col gap-3 bg-[#D9D9D9]">
                        {
                            packages?.map((one: Single_Package_Type, index: number) => {
                                return (
                                    <li key={one._id} className={`flex justify-between items-center pb-2 ${index === packages.length - 1 ? '' : 'border-b border-black'}`}>
                                        <div className='flex gap-8'>
                                            <input
                                                type="checkbox"
                                                onChange={() => handlePackageChange(one._id, one.package_price)}
                                                className="checkbox checkbox-lg"
                                            />
                                            <label htmlFor="" className="text-[1.5rem]">{one.package_name}</label>
                                        </div>
                                        <div className='flex justify-center items-center'>
                                            <span className='text-2xl'>৳ </span>{one.package_price}
                                        </div>
                                    </li>
                                )
                            })
                        }
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
                            <label htmlFor="" className="text-[1.5rem]"> Tk {totalPrice.toFixed(2)}</label>
                        </li>
                        <li className="flex justify-between border-b border-black pb-2">
                            <label htmlFor="" className="text-[1.5rem]"> ডেলিভারি চার্জ</label>
                            <label htmlFor="" className="text-[1.5rem]"> Tk 130.00</label>
                        </li>
                        <li className="flex gap-8 justify-between ">
                            <label htmlFor="" className="text-[1.5rem] font-black"> সর্বমোট</label>
                            <label htmlFor="" className="text-[1.5rem] font-black"> Tk {(totalPrice + 130).toFixed(2)}</label>
                        </li>
                    </ul>

                    <div className="form-control mt-8">
                        <label className="label">
                            <span className="label-text text-[1.5rem] mb-2">Order Note <span className="text-red-500">*</span></span>
                        </label>
                        <textarea
                            rows={5}
                            className="input input-bordered border-black outline-none"
                            value={orderNote}
                            onChange={e => setOrderNote(e.target.value)}
                            required
                        />
                    </div>

                    <div className="form-control mt-6">
                        <button className="mx-auto rounded-xl py-3 px-8 deepPurple text-white text-[1.5rem]" type="submit">আপনার অর্ডার টি কনফার্ম করতে ক্লিক করুন</button>
                    </div>
                </form>
            </div>
            {showPopup && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <img src="https://png.pngtree.com/png-clipart/20220819/ourmid/pngtree-funny-dog-png-image_6116136.png" alt="Order Successful" className="w-1/3 rounded-lg" />
                </div>
            )}
        </div>
    )
}

export default OrderForm;
