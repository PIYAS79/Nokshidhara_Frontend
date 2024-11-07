
import Swal from "sweetalert2";
import { Single_Order_Type } from "../components/Global/Order_types";
import { useGetAllOrderQuery, useUpdateOrderMutation } from "../redux/api/orderApi";

const Dash_ProcessPage = () => {
  const { data: x } = useGetAllOrderQuery(undefined);
  const orders = x?.filter((one: Single_Order_Type) => one?.status === "PROCESSING");

  const [updateOrderStatusFnc] = useUpdateOrderMutation();

  const handleClickCancleOrder = async (oid: string) => {
    try {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Cancel it!"
      }).then(async (result) => {
        if (result.isConfirmed) {
          const result = await updateOrderStatusFnc({ data: { status: "CANCELLED" }, oid });
          console.log(result);
          if (result.data) {
            Swal.fire({
              title: "Cancelled !",
              text: "Your file has been cancelled.",
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

  const handleClickCompleteOrder = async (oid: string) => {
    try {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Complete it!"
      }).then(async (result) => {
        if (result.isConfirmed) {
          const result = await updateOrderStatusFnc({ data: { status: "DELIVERED" }, oid });
          console.log(result);
          if (result.data) {
            Swal.fire({
              title: "Delivered !",
              text: "Your file has been delivered.",
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
    <div className="h-full overflow-y-scroll w-full">
      <h1 className="text-center text-3xl font-semibold textDeepPurple mt-3">Processing Orders</h1>
      <div className="overflow-x-auto md:m-5">
        <table className="table text-xs md:text-md">
          {/* head */}
          <thead className="deepPurple text-white font-sans">
            <tr>
              <th>Order ID</th>
              <th>Date & Time</th>
              <th>Name</th>
              <th>Phone</th>
              <th>Package ID</th>
              <th>Total Price</th>
              <th>Edit Status</th>
            </tr>
          </thead>
          <tbody>
            {orders?.map((order: Single_Order_Type, index: number) => (
              <tr className="hover" key={order._id}>
                <th>{order.orderNo}</th>
                <td>{order.dateAndTime}</td>
                <td>{order.name}</td>
                <td>{order.phone}</td>
                <td>{order.packageNo.join(", ")}</td> {/* Join package numbers if it's an array */}
                <td>{order.totalPrice}</td>
                <td>
                  <span onClick={() => handleClickCancleOrder(order._id)} className="bg-red-700 text-sm font-light text-white px-2 rounded-lg cursor-pointer">Cancel</span>
                  <span onClick={() => handleClickCompleteOrder(order._id)} className="bg-green-700 text-sm font-light text-white px-2 rounded-lg ml-1 cursor-pointer">Complete</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dash_ProcessPage;
