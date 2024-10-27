import { useState } from "react"; // Import useState for local state management
import { Single_Order_Type } from "../components/Global/Order_types";
import { useGetAllOrderQuery } from "../redux/api/orderApi";

const Dashboard_OrderPage = () => {
  const { data: orders } = useGetAllOrderQuery(undefined);
  const [isModalOpen, setIsModalOpen] = useState(false); 
  const [selectedOrderNote, setSelectedOrderNote] = useState(""); 

  const openModal = (note: string) => {
    setSelectedOrderNote(note); 
    setIsModalOpen(true); 
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="h-full overflow-y-scroll">
      <h1 className="text-center text-3xl font-semibold textDeepPurple mt-3">
        Order Details
      </h1>
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
            {/* Map over orders to display each order */}
            {orders?.map((order: Single_Order_Type) => (
              <tr key={order._id} className="hover">
                <th>{order.orderNo}</th>
                <td>{order.dateAndTime}</td>
                <td>{order.name}</td>
                <td>{order.phone}</td>
                <td>{order.address}</td>
                <td>
                  {/* Button to see order note */}
                  <button
                    onClick={() => openModal(order.orderNote)} // Pass the order note to openModal
                    className="text-blue-800 font-sans hover:underline"
                  >
                    See Note
                  </button>
                </td>
                <td>{order.packageNo.join(", ")}</td> {/* Join package numbers if it's an array */}
                <td>${order.totalPrice.toFixed(2)}</td> {/* Format price */}
                <td className="font-sans text-xs font-semibold">
                  <span className={
                    order.status === "DELIVERED" ? "text-green-600 font-bold" :
                      order.status === "CANCELLED" ? "text-red-600 font-bold" :
                        order.status === "PROCESSING" ? "text-blue-600 font-bold" :
                          "text-gray-600 font-bold"
                  }>
                    {order.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal for displaying order note */}
      {isModalOpen && (
        <dialog open className="modal">
          <div className="modal-box lightPurple text-black">
            <h3 className="font-bold text-lg textDeepPurple">Order Note</h3>
            <p className="py-0">{selectedOrderNote}</p>
            <div className="modal-action">
              <button onClick={closeModal} className="btn deepPurple border-none text-white">Close</button>
            </div>
          </div>
        </dialog>
      )}
    </div>
  );
};

export default Dashboard_OrderPage;
