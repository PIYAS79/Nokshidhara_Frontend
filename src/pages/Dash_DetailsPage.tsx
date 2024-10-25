import React from 'react'
import { AiOutlineDelete } from 'react-icons/ai'

const Dash_DetailsPage = () => {
  return (
    <div className='p-3'>
      <h1 className="text-center text-3xl font-semibold textDeepPurple mt-3">Package Details </h1>
      <div className="max-w-2xl  mx-auto w-full bg-[#F5F5F5] p-3 rounded-lg mt-3">
        <h1 className="text-center text-xl font-semibold deepPurple font-sans rounded-lg text-white py-1">Packages </h1>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr className='textDeepPurple'>
                <th>Package No</th>
                <th>Package Name</th>
                <th>Package Price</th>
                <th>Status</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr>
                <th>1</th>
                <td className='border-l border-[#7C449A]'>Brice Swyre</td>
                <td className='border-l border-[#7C449A]'>Tax Accountant</td>
                <td className='border-l border-[#7C449A]'>
                  {/* Open the modal using document.getElementById('ID').showModal() method */}
                  <button
                    className='cursor-pointer px-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-light'
                    onClick={() => {
                      const modal = document.getElementById('my_modal_edit_package');
                      if (modal instanceof HTMLDialogElement) {
                        modal.showModal();
                      }
                    }}
                  >
                    edit
                  </button>

                  <dialog id="my_modal_edit_package" className="modal">
                    <div className="modal-box">
                      {/* Close button */}
                      <button
                        type="button"
                        className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                        onClick={() => {
                          const modal = document.getElementById('my_modal_edit_package');
                          if (modal instanceof HTMLDialogElement) {
                            modal.close();
                          }
                        }}
                      >
                        ✕
                      </button>

                      <h3 className="text-xl font-bold text-center font-sans textDeepPurple">Edit Package</h3>

                      <form
                        method="dialog"
                        onSubmit={(e) => {
                          e.preventDefault(); // Prevent page reload
                          const modal = document.getElementById('my_modal_edit_package');
                          if (modal instanceof HTMLDialogElement) {
                            modal.close(); // Close the modal on form submission
                          }
                        }}
                      >
                        {/* Package Name */}
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text textDeepPurple">Package Name</span>
                          </label>
                          <input type="text" placeholder="name" className="input input-bordered" required />
                        </div>

                        {/* Package Price */}
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text textDeepPurple">Package Price</span>
                          </label>
                          <input type="number" placeholder="price" className="input input-bordered" required />
                        </div>

                        <div className="modal-action">
                          <button type="submit" className="btn border-none hover:bg-purple-600 deepPurple text-white mx-auto">
                            Create Package
                          </button>
                        </div>
                      </form>
                    </div>
                  </dialog>
                </td>

                <td className='border-l border-[#7C449A]'>
                  <button className=' px-3 text-red-700 text-xl hover:bg-red-300 rounded-lg font-light'><AiOutlineDelete /></button>
                </td>
              </tr>
              {/* row 2 */}
              <tr>
                <th>2</th>
                <td className='border-l border-[#7C449A]'>Brice Swyre</td>
                <td className='border-l border-[#7C449A]'>Tax Accountant</td>
                <td className='border-l border-[#7C449A]'>
                  <button className=' px-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-light'>edit</button>
                </td>
                <td className='border-l border-[#7C449A]'>
                  <button className=' px-3 text-red-700 text-xl hover:bg-red-300 rounded-lg font-light'><AiOutlineDelete /></button>
                </td>
              </tr>
              {/* row 3 */}
              <tr>
                <th>3</th>
                <td className='border-l border-[#7C449A]'>Brice Swyre</td>
                <td className='border-l border-[#7C449A]'>Tax Accountant</td>
                <td className='border-l border-[#7C449A]'>
                  <button className=' px-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-light'>edit</button>
                </td>
                <td className='border-l border-[#7C449A]'>
                  <button className=' px-3 text-red-700 text-xl hover:bg-red-300 rounded-lg font-light'><AiOutlineDelete /></button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* The button to open modal */}
        <label
          htmlFor="my_modal_add_package"
          className="textDeepPurple font-semibold font-sans mt-5 block cursor-pointer"
        >
          + Add more package
        </label>

        {/* Put this part before </body> tag */}
        <input type="checkbox" id="my_modal_add_package" className="modal-toggle" />
        <div className="modal" role="dialog">
          <form className="modal-box lightPurple">
            {/* Close button */}
            <button
              type="button"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => {
                const checkbox = document.getElementById('my_modal_add_package') as HTMLInputElement;
                if (checkbox) {
                  checkbox.checked = false;
                }
              }}
            >
              ✕
            </button>


            <h3 className="text-xl font-bold text-center font-sans textDeepPurple">
              Add New Package
            </h3>

            {/* Package Name */}
            <div className="form-control">
              <label className="label">
                <span className="label-text textDeepPurple">Package Name</span>
              </label>
              <input type="text" placeholder="name" className="input input-bordered" required />
            </div>

            {/* Package Price */}
            <div className="form-control">
              <label className="label">
                <span className="label-text textDeepPurple">Package Price</span>
              </label>
              <input type="number" placeholder="price" className="input input-bordered" required />
            </div>

            <div className="modal-action">
              <label
                htmlFor="my_modal_add_package"
                className="btn border-none hover:bg-purple-600 deepPurple text-white mx-auto"
              >
                Create Package
              </label>
            </div>
          </form>
        </div>

      </div>
    </div>
  )
}

export default Dash_DetailsPage
