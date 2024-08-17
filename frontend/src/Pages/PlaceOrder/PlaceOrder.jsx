import { useContext,  useEffect,  useState } from "react";
import { StoreContext } from "../../context/StoreContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const PlaceOrder = () => {
  const { getTotalCartAmount,token,food_list,cartItems,url } = useContext(StoreContext);

  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zip_code: "",
    country: "",
    phone: "",
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData(data => ({...data, [name]: value}));
  }

  

  const placeOrder = async (event) => {
    event.preventDefault();
    let orderItems = [];
    food_list.map((item)=>{
      if(cartItems[item._id]>0){
        let itemInfo = item;
        itemInfo["quantity"] = cartItems[item._id];
        orderItems.push(itemInfo);
      }
    })
    let orderData = {
      address : data,
      items : orderItems,
      amount : getTotalCartAmount() + 2
    }
    let response = await axios.post(url+"/api/order/place",orderData,{headers:{token}})
    console.log(response.data)
    if(response.data.success){
      const {session_url} = response.data;
      window.location.replace(session_url);
    }else{
      alert("Order failed")
    }
  }


  const navigate =  useNavigate();

  useEffect(()=>{
    if(!token){
      navigate("/cart")
    }else if(getTotalCartAmount()===0){
      navigate("/cart")
    }
  },[token])
   
        


  return (
    <form onSubmit={placeOrder} className="grid md:grid-cols-3    gap-12  mt-14">
      <div className="md:col-span-2 p-3  flex flex-col items-center justify-center">
        <p className="title mb-4 text-3xl font-semibold">Delivery Information</p>
        <div className=" flex flex-col gap-3 w-4/5">
          <div className="flex  gap-3">
            <input
              name="firstName"
              onChange={onChangeHandler}
              value={data.firstName}
              type="text"
              placeholder="First Name"
              required
              className="border-2 w-full  border-red-900 p-1 rounded-lg outline-none"
            />
            <input
              name="lastName"
              onChange={onChangeHandler}
              value={data.lastName}
              type="text"
              placeholder="Last Name"
              required
              className="border-2  w-full border-red-900 p-1 rounded-lg outline-none"
            />
          </div>
          <input
            name="email"
            onChange={onChangeHandler}
            value={data.email}
            type="email"
            placeholder="Email address"
            required  
            className="border-2 border-red-900 p-1 rounded-lg outline-none"
          />
          <input
            name="street"
            onChange={onChangeHandler}
            value={data.street}
            type="text"
            placeholder="Street"
            required
            className="border-2 border-red-900 p-1 rounded-lg outline-none"
          />
          <div className="flex  gap-3">
            <input
              name="city"
              onChange={onChangeHandler}
              value={data.city}
              type="text"
              placeholder="City"
              required
              className="border-2 w-full border-red-900 p-1 rounded-lg outline-none"
            />
            <input
              name="state"
              onChange={onChangeHandler}
              value={data.state}
              type="text"
              placeholder="State"
              required
              className="border-2 w-full border-red-900 p-1 rounded-lg outline-none"
            />
          </div>
          <div className="flex  gap-3">
            <input
              name="zip_code"
              onChange={onChangeHandler}
              value={data.zip_code}
              type="text"
              placeholder="Zip Code"
              className="border-2 w-full border-red-900 p-1 rounded-lg outline-none"
            />
            <input
              name="country"
              onChange={onChangeHandler}
              value={data.country}
              type="text"
              placeholder="Country"
              required
              className="border-2 w-full border-red-900 p-1 rounded-lg outline-none"
            />
          </div>
          <input
            name="phone"
            onChange={onChangeHandler}
            value={data.phone}
            type="text"
            placeholder="Phone"
            required
            className="border-2 border-red-900 p-1 rounded-lg outline-none"
          />
        </div>
      </div>
      <div className="md:col-span-1 flex items-center justify-center ">
        <div className="flex flex-col  p-3 w-4/5">
          <h2 className="text-red-950 text-lg font-semibold ">Cart Totals</h2>
          <div className="flex justify-between border-b-2 mt-2">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <div className="flex justify-between border-b-2 mt-2 ">
              <p>Shipping</p>
              <p>${getTotalCartAmount()===0?0:2}</p>
            </div>
            <div className="flex justify-between border-b-2 mt-2 ">
              <b>Total</b>
              <b>${getTotalCartAmount()===0?0:getTotalCartAmount() + 2}</b>
            </div>
          <button type="submit" className="bg-red-900 hover:bg-red-700 text-white py-1 mt-4 rounded-lg ">
            Proceed To Payment
          </button>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
