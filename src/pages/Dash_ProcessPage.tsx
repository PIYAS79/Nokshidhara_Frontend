import React from 'react'
import Web_Modal from '../components/Global/Web_Modal';

const Dash_ProcessPage = () => {
  return (
    <div>
      <h1 className="text-center text-3xl font-semibold textDeepPurple mt-3">Processing Orders </h1>
      <div className="overflow-x-auto m-5">
        <table className="table">
          {/* head */}
          <thead className="deepPurple text-white font-sans">
            <tr>
              <th>Order ID</th>
              <th>Date & Time</th>
              <th>Name</th>
              <th>Phone</th>
              {/* <th>Address</th> */}
              {/* <th>Order Note</th> */}
              <th>Package ID</th>
              <th>Total Price</th>
              <th>Edit Status</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr className="hover">
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              {/* <td>Blue</td> */}
              {/* <td>Blue</td> */}
              <td>
                {/* Open the modal using document.getElementById('ID').showModal() method */}
                <button
                  onClick={() => {
                    const modal = document.getElementById('my_modal_message');
                    if (modal instanceof HTMLDialogElement) {
                      modal.showModal();
                    }
                  }}
                >
                  See Note
                </button>
                <Web_Modal />
              </td>
              <td>Blue</td>
              <td>Blue</td>
              <td>
              <span className="bg-red-600 font-light text-white px-1 rounded-lg">cancel</span>
              <span className="bg-green-600 font-light text-white px-1 rounded-lg ml-1">comeplete</span>
              </td>
            </tr>
            {/* row 2 */}
            <tr className="hover">
              <th>2</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>Blue</td>
              <td>Blue</td>
              {/* <td>Blue</td> */}
              {/* <td>Blue</td> */}
              <td>Blue</td>
              <td>
              <span className="bg-red-600 font-light text-white px-1 rounded-lg">cancel</span>
              <span className="bg-green-600 font-light text-white px-1 rounded-lg ml-1">comeplete</span>
              </td>
            </tr>
            {/* row 3 */}
            <tr className="hover">
              <th>3</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>Blue</td>
              <td>Blue</td>
              <td>Blue</td>
              {/* <td>Blue</td> */}
              {/* <td>Blue</td> */}
              <td>
                <span className="bg-red-600 font-light text-white px-1 rounded-lg">cancel</span>
                <span className="bg-green-600 font-light text-white px-1 rounded-lg ml-1">comeplete</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Dash_ProcessPage
