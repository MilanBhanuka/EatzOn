import { useContext, useEffect, useState } from "react";
import { StoreContext } from "../../context/StoreContext";
import axios from "axios";
import { assets } from "../../assets/assets";

const MyOrders = () => {
  const { url, token } = useContext(StoreContext);
  const [data, setData] = useState([]);

  const fetchOrders = async () => {
    const response = await axios.post(
      url + "/api/order/userorders",
      {},
      { headers: { token } }
    );
    setData(response.data.orders);
  };

  useEffect(() => {
    if (token) {
      fetchOrders();
    }
  }, [token]);

  return (
    <div className="flex flex-col justify-center items-center">
      <h2 className="text-3xl justify-center mt-5">My Orders</h2>
      <div className="flex flex-col gap-2 ">
        {data.map((order, index) => {
          return (
            <div key={index} className="grid grid-cols-10 items-center gap-2 text-sm  py-3 bg-red-100 mx-2 px-2 rounded-lg">
              <img className="col-span-1" src={assets.parcel_icon} alt="parcel icon" />
              <p className="col-span-4">{order.items.map((item,index)=>{
                if(index===order.items.length-1){
                  return item.name + " x " + item.quantity
                }
                else{
                  return item.name + " x " + item.quantity + ", "
                }
                  }
                )}</p>
                  <p className="col-span-1">${order.amount}</p>
                  <p className="col-span-1">Items : {order.items.length} </p>
                  <p className="col-span-2"><b className="text-green-700">{order.status}</b></p>
                  <button className="col-span-1 bg-red-400 rounded-full text-xs py-1">Track Order</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MyOrders;
