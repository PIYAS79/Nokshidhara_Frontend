import { FormEvent, useEffect, useState } from "react"
import { useGetDeliveryChargeQuery, useUpdateDeliveryChargeMutation } from "../../redux/api/chargeApi";
import Swal from "sweetalert2";

const Dash_Delivery_Sec = () => {

    const { data: chargeRes, isSuccess } = useGetDeliveryChargeQuery(undefined);
    const [updateChargeFnc] = useUpdateDeliveryChargeMutation();
    const [charge, setCharge] = useState(0);

    useEffect(() => {
        setCharge(chargeRes ? chargeRes[0]?.charge : 0)
    }, [chargeRes, isSuccess])

    const handleBannerSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            Swal.fire({
                title: "Are you sure?",
                text: "You want to update the delivery charge ?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, update it!"
            }).then(async (result) => {
                if (result.isConfirmed) {
                    const result = await updateChargeFnc({ data: { charge: charge }, cid: chargeRes[0]._id });
                    console.log(result);
                    if (result.data) {
                        Swal.fire({
                            title: "Updated !",
                            text: "Successfully Updated !",
                            icon: "success"
                        });
                    } else {
                        Swal.fire({
                            title: "Oops!",
                            text: "There is a server side error!",
                            icon: "error"
                        });
                    }
                }
            });
        } catch (err: any) {
            console.log(err);
        }
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
