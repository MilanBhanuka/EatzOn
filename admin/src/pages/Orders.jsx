import PropTypes from "prop-types";
import { useState } from "react";
import axios from "axios"; 
import { toast } from "react-toastify";
import { useEffect } from "react";
import { assets } from "../assets/assets";

const Orders = ({url}) => {

  const [orders, setOrders] = useState([]);

  const fetchAllOrders = async () => {
    const response = await axios.get(url+"/api/order/list");

    if (response.data.success) {
      setOrders(response.data.data);
      console.log(response.data.data);
    }else{
      toast.error(response.data.message);
    }
  };

  const statusHandler = async (event, orderId) => {
    const response = await axios.post(url+"/api/order/status", {
      orderId,
      status: event.target.value,
    });
    if(response.data.success){
      await fetchAllOrders();
    }
  }

  useEffect(() => {
    fetchAllOrders();
  }, []);

  return (
    <div className=" p-6 rounded-lg  mx-auto">
  <h1 className="text-2xl font-bold mb-6 text-gray-800">Orders</h1>
  <div className="space-y-6">
    {orders.map((order, index) => (
      <div
        key={index}
        className="flex items-center bg-red-50 p-4 rounded-lg shadow-md"
      >
        <img
          src={assets.parcel_icon}
          alt="parcel"
          className="w-16 h-16 mr-4"
        />
        <div className="flex-1">
          <p className="font-semibold text-gray-700 mb-2">
            {order.items.map((item, index) => (
              <span key={index}>
                {item.name} x {item.quantity}
                {index !== order.items.length - 1 && ", "}
              </span>
            ))}
          </p>
          <p className="text-gray-600">{`${order.address.firstName} ${order.address.lastName}`}</p>
          <div className="text-sm text-gray-500  ">
            <p>{order.address.street},{order.address.city}, {order.address.state},{order.address.zip_code},{order.address.country}</p>
          </div>
          <p className="text-gray-600 ">{order.address.phone}</p>
        </div>
        <div className="text-right">
          <p className="text-sm text-gray-600">Items: {order.items.length}</p>
          <p className="text-lg font-bold text-gray-800">Amount: ${order.amount}</p>
          <select onChange={(event)=>statusHandler(event,order._id)} value={order.status} className="mt-2 p-1 text-sm bg-white border border-gray-300 rounded-lg">
            <option value="Food Processing">Food Processing</option>
            <option value="Out for Delivery">Out for Delivery</option>
            <option value="Delivered">Delivered</option>
          </select>
        </div>
      </div>
    ))}
  </div>
</div>

  )
}


Orders.propTypes = {
  url: PropTypes.string.isRequired, 
};

export default Orders
