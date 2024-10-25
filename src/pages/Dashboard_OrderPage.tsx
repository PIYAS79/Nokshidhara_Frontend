import Web_Modal from "../components/Global/Web_Modal"


const Dashboard_OrderPage = () => {
  return (
    <div>
      <h1 className="text-center text-3xl font-semibold textDeepPurple mt-3">Order Details</h1>
      <div className="overflow-x-auto m-5">
        <table className="table">
          {/* head */}
          <thead className="deepPurple text-white font-sans">
            <tr>
              <th>Order ID</th>
              <th>Date & Time</th>
              <th>Name</th>
              <th>Phone</th>
              <th>Address</th>
              <th>Order Note</th>
              <th>Package ID</th>
              <th>Total Price</th>
              <th>Order Status</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr className="hover">
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>Blue</td>
              <td>Blue</td>
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
                <span className="text-blue-600 font-bold">processing</span>
              </td>
            </tr>
            {/* row 2 */}
            <tr className="hover">
              <th>2</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>Blue</td>
              <td>Blue</td>
              <td>Blue</td>
              <td>Blue</td>
              <td>Blue</td>
              <td>
                <span className="text-blue-600 font-bold">processing</span>
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
              <td>Blue</td>
              <td>Blue</td>
              <td>
                <span className="text-green-600 font-bold">delevered</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Dashboard_OrderPage
