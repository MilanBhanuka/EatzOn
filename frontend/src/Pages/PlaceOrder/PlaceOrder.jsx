import { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";

const PlaceOrder = () => {
  const { getTotalCartAmount } = useContext(StoreContext);

  return (
    <form className="grid md:grid-cols-3    gap-12 mt-24">
      <div className="md:col-span-2 p-3">
        <p className="title">Delivery Information</p>
        <div className=" flex flex-col gap-3">
          <div className="flex  gap-3">
            <input
              type="text"
              placeholder="First Name"
              className="border-2 w-full  border-red-900 p-1 rounded-lg outline-none"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="border-2  w-full border-red-900 p-1 rounded-lg outline-none"
            />
          </div>
          <input
            type="email"
            placeholder="Email address"
            className="border-2 border-red-900 p-1 rounded-lg outline-none"
          />
          <input
            type="text"
            placeholder="Street"
            className="border-2 border-red-900 p-1 rounded-lg outline-none"
          />
          <div className="flex  gap-3">
            <input
              type="text"
              placeholder="City"
              className="border-2 w-full border-red-900 p-1 rounded-lg outline-none"
            />
            <input
              type="text"
              placeholder="State"
              className="border-2 w-full border-red-900 p-1 rounded-lg outline-none"
            />
          </div>
          <div className="flex  gap-3">
            <input
              type="text"
              placeholder="Zip Code"
              className="border-2 w-full border-red-900 p-1 rounded-lg outline-none"
            />
            <input
              type="text"
              placeholder="Country"
              className="border-2 w-full border-red-900 p-1 rounded-lg outline-none"
            />
          </div>
          <input
            type="text"
            placeholder="Phone"
            className="border-2 border-red-900 p-1 rounded-lg outline-none"
          />
        </div>
      </div>
      <div className="md:col-span-1 ">
        <div className="flex flex-col  p-3 ">
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
          <button className="bg-red-900 hover:bg-red-700 py-1 mt-4 rounded-lg ">
            Proceed To Payment
          </button>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
