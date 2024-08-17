import { useContext } from "react";
import { assets } from "./../assets/assets";
import PropTypes from 'prop-types';
import { StoreContext } from "../context/StoreContext";

const FoodItem = ({ id, name, price, description, image }) => {

  const {cartItems, addToCart ,removeFromCart,url} = useContext(StoreContext);

  return (
    <div className="rounded-lg hover:scale-105 shadow-lg relative">
      <div className="food-item-image h-72 w-96">
        <img className="rounded-t-lg h-72 w-96 object-cover " src={url+"/images/"+image} alt={name} />
        {!cartItems[id] 
        ? (
          <img 
            src={assets.add_icon_white} 
            alt="Add" 
            className="absolute w-9 top-1 right-2 cursor-pointer rounded-full" 
            onClick={() => addToCart(id)} 
          />
        ) : (
          <div className="absolute  top-1 right-3 flex items-center gap-2 p-1 rounded-full bg-white">
            <img 
              src={assets.remove_icon_red} 
              alt="Remove" 
              className="cursor-pointer w-6" 
              onClick={() => removeFromCart(id)} 
            />
            <p className="">{cartItems[id]}</p>
            <img 
              src={assets.add_icon_green} 
              alt="Add" 
              className="cursor-pointer w-6" 
              onClick={() => addToCart(id)} 
            />
          </div>
        )}
      </div>
      <div className="px-4 py-3 h-full w-96">
        <div className="flex justify-between items-baseline">
          <h2 className="text-red-900 font-semibold text-sm md:text-xl">{name}</h2>
          <img src={assets.rating_starts} alt="star" className="w-10 h-3 md:w-20 md:h-5" />
        </div>
        <p className="text-s">{description}</p>
        <p className="text-s md:text-lg text-red-700 font-semibold">${price}</p>
      </div>
    </div>
  );
};

FoodItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};

export default FoodItem;
