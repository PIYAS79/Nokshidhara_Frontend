import { FormEvent, useState } from 'react';
import { AiOutlineDelete } from 'react-icons/ai';
import { useCreatePackageMutation, useDeletePackageMutation, useGetAllPackageQuery } from '../redux/api/packageApi';
import Swal from 'sweetalert2';
import { Single_Package_Type } from '../components/Global/package_type';
import { Link } from 'react-router-dom';

const Dash_DetailsPage = () => {
  const [package_name, setPackageName] = useState('');
  const [package_price, setPackagePrice] = useState(0);

  const [createPackageFnc] = useCreatePackageMutation();
  const { data: packages = [] } = useGetAllPackageQuery(undefined);
  const [deletePackageFnc] = useDeletePackageMutation();

  const closeModal = (modalId: string) => {
    const checkbox = document.getElementById(modalId) as HTMLInputElement;
    if (checkbox) {
      checkbox.checked = false;
    }
  };

  const handleClickSubmitPackage = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newPackage = { package_name, package_price };

    try {
      const data: any = await createPackageFnc(newPackage);
      console.log(data);

      if (data?.data?.success) {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: data.data.message,
          showConfirmButton: false,
          timer: 1500,
        });
        closeModal('my_modal_add_package');
      } else {
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: data.error?.data?.message || 'Failed to create package!',
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } catch (err) {
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'There is a server-side error!',
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  const delete_A_Package = async (pid: string) => {
    try {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true, 
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then(async (result) => {
        if (result.isConfirmed) {
          const result = await deletePackageFnc(pid);
          console.log(result);
          if (result.data) {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
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
  };

  return (
    <div className="p-3">
      <h1 className="text-center text-3xl font-semibold textDeepPurple mt-3">Package Details</h1>

      <div className="max-w-2xl mx-auto w-full bg-[#F5F5F5] p-3 rounded-lg mt-3">
        <h1 className="text-center text-xl font-semibold deepPurple font-sans rounded-lg text-white py-1">
          Packages <span>{`( ${packages.length} )`}</span>
        </h1>

        <div className="overflow-x-auto">
          <table className="table font-sans">
            <thead>
              <tr className="textDeepPurple">
                <th>Package No</th>
                <th>Package Name</th>
                <th>Package Price</th>
                <th>Status</th>
                <th>Actions</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {packages.map((one: Single_Package_Type) => (
                <tr key={one._id}>
                  <th>{one.package_no}</th>
                  <td className="border-l border-[#7C449A]">{one.package_name}</td>
                  <td className="border-l border-[#7C449A]">{one.package_price}</td>
                  {one.package_status === "BLOCK"?
                  <td className="border-l border-[#7C449A] text-red-700 font-semibold text-xs">HIDE</td>
                  :
                  <td className="border-l border-[#7C449A] text-green-700 font-semibold text-xs">ACTIVE</td>  
                
                }
                  <td className="border-l border-[#7C449A]">
                    <Link to={`/dashboard/details/${one._id}`}>
                      <button
                        className="cursor-pointer px-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-light">
                        edit
                      </button>
                    </Link>
                  </td>
                  <td className="border-l border-[#7C449A]">
                    <button className="px-3 text-red-700 text-xl hover:bg-red-300 rounded-lg font-light">
                      <AiOutlineDelete onClick={() => delete_A_Package(one._id)} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Add Package Modal */}
        <label
          htmlFor="my_modal_add_package"
          className="textDeepPurple font-semibold font-sans mt-5 block cursor-pointer"
        >
          + Add more package
        </label>

        <input type="checkbox" id="my_modal_add_package" className="modal-toggle" />
        <div className="modal" role="dialog">
          <form onSubmit={handleClickSubmitPackage} className="modal-box lightPurple">
            <button
              type="button"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => closeModal('my_modal_add_package')}
            >
              ✕
            </button>

            <h3 className="text-xl font-bold text-center font-sans textDeepPurple">Add New Package</h3>

            <div className="form-control">
              <label className="label">
                <span className="label-text textDeepPurple">Package Name</span>
              </label>
              <input
                onChange={(e) => setPackageName(e.target.value)}
                value={package_name}
                type="text"
                placeholder="name"
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text textDeepPurple">Package Price</span>
              </label>
              <input
                onChange={(e) => setPackagePrice(Number(e.target.value))}
                value={package_price}
                type="number"
                placeholder="price"
                className="input input-bordered"
                required
              />
            </div>

            <div className="modal-action">
              <button type="submit" className="btn border-none hover:bg-purple-600 deepPurple text-white mx-auto">
                Create Package
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Dash_DetailsPage;
