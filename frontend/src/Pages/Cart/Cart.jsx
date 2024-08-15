import { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import { assets } from "../../assets/assets";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, food_list, removeFromCart, getTotalCartAmount } =
    useContext(StoreContext);

  const navigate = useNavigate();

  return (
    <div className="mt-10 p-6 text-lg">
      <div className="cart-items">
        <div className="grid grid-cols-8 bg-red-400 justify-center items-center rounded-lg mb-2 py-1">
          <p className="col-span-2 justify-center flex">Image</p>
          <p className="col-span-2 justify-center flex">Name</p>
          <p className="col-span-1 justify-center flex">Price</p>
          <p className="col-span-1 justify-center flex">Quantity</p>
          <p className="col-span-1 justify-center flex">Total</p>
          <p className="col-span-1 justify-center flex">Remove</p>
        </div>
        <div className="gap-1 flex flex-col">
          {food_list.map((item, index) => {
            if (cartItems[item._id] > 0) {
              return (
                <div
                  key={index}
                  className="grid grid-cols-8 bg-red-100 justify-center items-center rounded-lg "
                >
                  <img
                    className="col-span-2 h-24 rounded-l-lg"
                    src={item.image}
                    alt="food"
                  />
                  <p className="col-span-2 justify-center flex ">{item.name}</p>
                  <p className="col-span-1 justify-center flex">
                    ${item.price}
                  </p>
                  <p className="col-span-1 justify-center flex">
                    {cartItems[item._id]}
                  </p>
                  <p className="col-span-1 justify-center flex">
                    ${item.price * cartItems[item._id]}
                  </p>
                  <button
                    className="col-span-1 justify-center flex "
                    onClick={() => removeFromCart(item._id)}
                  >
                    <img
                      src={assets.cross_icon}
                      alt="cross"
                      className="w-3 cursor-pointer"
                    />
                  </button>
                </div>
              );
            }
          })}
        </div>
      </div>

      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2  justify-between gap-5">
        <div className="flex flex-col shadow-lg p-3 rounded-lg">
          <h2 className="text-red-950 text-lg font-semibold ">Cart Totals</h2>
          <div>
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
          </div>
          <button
            onClick={() => navigate("/placeorder")}
            className="bg-red-900 hover:bg-red-700 py-1 mt-4 rounded-lg lg:w-1/3"
          >
            Proceed To Checkout
          </button>
        </div>
        <div className="flex flex-col shadow-lg p-3 rounded-lg">
          <div className="flex flex-col">
            <p className="mb-3">
              If you have a coupon code, please apply it below.
            </p>
            <div className="flex">
              <input
                className="border-2 border-red-900 p-1 rounded-l-lg outline-none "
                type="text"
                placeholder="Promocode"
              />
              <button className="bg-red-900 rounded-r-lg px-4 hover:bg-red-700  ">
                Apply
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
