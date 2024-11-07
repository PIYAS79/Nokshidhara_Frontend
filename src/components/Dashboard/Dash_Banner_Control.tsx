import { FormEvent, useEffect, useState } from "react";
import { useGetWebBannerLinksQuery, useUpdateBannerLinksMutation } from "../../redux/api/bannerApi";
import Swal from "sweetalert2";


const Dash_Banner_Control = () => {

    const { data: banner, isSuccess } = useGetWebBannerLinksQuery(undefined);
    const [udpateBannerLinkFnc]=useUpdateBannerLinksMutation();
    const [link1, setLink1] = useState("");
    const [link2, setLink2] = useState("");
    const [link3, setLink3] = useState("");
    const [link4, setLink4] = useState("");

    useEffect(() => {
        setLink1(banner ? banner[0]?.link[0] : "");
        setLink2(banner ? banner[0]?.link[1] : "");
        setLink3(banner ? banner[0]?.link[2] : "");
        setLink4(banner ? banner[0]?.link[3] : "");
    }, [banner, isSuccess])

    const handleBannerSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const sendedData = {data:{link:[link1,link2,link3,link4]},bid:banner[0]._id};
        try {
            Swal.fire({
              title: "Are you sure?",
              text: "🤔🤔🤔🤔🤔",
              icon: "warning",
              showCancelButton: true,
              confirmButtonColor: "#3085d6",
              cancelButtonColor: "#d33",
              confirmButtonText: "Yes, update it!"
            }).then(async (result) => {
              if (result.isConfirmed) {
                const result = await udpateBannerLinkFnc(sendedData);
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
        <form onSubmit={handleBannerSubmit} className="card-body w-full pt-5 md:pt-0 p-0 md:p-8 md:max-w-2xl mx-auto  ">
            <div className="form-control">
                <label className="label">
                    <span className="label-text text-[1rem] mb-2">Banner Photo Link 1 <span className="text-red-500">*</span></span>
                </label>
                <input onChange={e => setLink1(e.target.value)} value={link1} type="text" className="input input-bordered border-black outline-none" required />
            </div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text text-[1rem] mb-2">Banner Photo Link 2 <span className="text-red-500">*</span></span>
                </label>
                <input onChange={e => setLink2(e.target.value)} value={link2} type="text" className="input input-bordered border-black outline-none" required />
            </div>

            <div className="form-control">
                <label className="label">
                    <span className="label-text text-[1rem] mb-2">Banner Photo Link 3 <span className="text-red-500">*</span></span>
                </label>
                <input onChange={e => setLink3(e.target.value)} value={link3} type="text" className="input input-bordered border-black outline-none" required />
            </div>

            <div className="form-control">
                <label className="label">
                    <span className="label-text text-[1rem] mb-2">Banner Photo Link 4 <span className="text-red-500">*</span></span>
                </label>
                <input onChange={e => setLink4(e.target.value)} value={link4} type="text" className="input input-bordered border-black outline-none" required />
            </div>


            <div className="form-control mt-3">
                <button className=" mx-auto rounded-xl py-3 px-8 deepPurple text-white  md:text-[1.5rem]">Submit Banner Photos</button>
            </div>
        </form>
    )
}

export default Dash_Banner_Control
