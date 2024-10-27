import { FormEvent, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { useUpdatePackageMutation } from "../redux/api/packageApi";
import Swal from "sweetalert2";

const Dash_PackaeUpdatePage = () => {
    const { data } = useLoaderData() as any;
    const [package_name, setPackageName] = useState(data?.package_name);
    const [package_price, setPackagePrice] = useState(data?.package_price);
    const [package_status, setPackageStatus] = useState(data?.package_status);
    const [updatePackageFnc] = useUpdatePackageMutation();
    const navigate = useNavigate();
    const handleOnSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const updatedPackage = {
            package_name,
            package_price,
            package_status
        };
        try {
            const result = await updatePackageFnc({ data: updatedPackage, pid: data?._id });
            console.log(result);
            if (result.data) {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: "Successfully Updated !",
                    showConfirmButton: false,
                    timer: 1500,
                });
                navigate(-1);
            }

        } catch (err: any) {
            console.log(err);
        }

    };

    return (
        <div className='max-w-lg mx-auto '>
            <div className="mt-5 textDeepPurple text-[32px] flex justify-center items-center">
                Update Package
            </div>
            <form onSubmit={handleOnSubmit} className="card-body pt-0">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Package Name</span>
                    </label>
                    <input
                        onChange={e => setPackageName(e.target.value)}
                        value={package_name}
                        type="text"
                        placeholder="name"
                        className="input input-bordered"
                        required
                    />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Package Price</span>
                    </label>
                    <input
                        onChange={e => setPackagePrice(Number(e.target.value))}
                        value={package_price}
                        type="number"
                        placeholder="price"
                        className="input input-bordered"
                        required
                    />
                </div>

                {/* Package Status */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text textDeepPurple">Package Status</span>
                    </label>
                    <div className='flex gap-2'>
                        <div className='flex items-center gap-2'>
                            <input
                                type="radio"
                                name="package-status"
                                className="radio radio-success"
                                checked={package_status === "ACTIVE"}
                                onChange={() => setPackageStatus("ACTIVE")}
                            />
                            <span>ACTIVE</span>
                        </div>

                        <div className='flex items-center gap-2'>
                            <input
                                type="radio"
                                name="package-status"
                                className="radio radio-error"
                                checked={package_status === "BLOCK"}
                                onChange={() => setPackageStatus("BLOCK")}
                            />
                            <span>BLOCK</span>
                        </div>
                    </div>
                </div>

                <div className="form-control mt-6">
                    <button className="btn deepPurple hover:bg-purple-600 text-white font-sans">
                        Update
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Dash_PackaeUpdatePage;
