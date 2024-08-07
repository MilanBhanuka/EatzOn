import { useState } from "react";
import { assets } from "./../assets/assets";
import PropTypes from 'prop-types';

const FoodItem = ({ id, name, price, description, image }) => {


        const [itemCount, setItemCount] = useState(0);

  return (
    <div className=" rounded-lg hover:scale-105 shadow-lg">
      <div className="food-item-imge">
        <img className="rounded-t-lg" src={image} alt="" />
        {
                itemCount === 0
                ?<img src={assets.add_icon_white} alt="" className="absolute w-9 bottom-24 right-2 cursor-pointer rounded-full " onClick={()=>setItemCount(prev=>prev+1)} />
                :<div className="absolute  bottom-24 right-3 flex items-center gap-2 p-2 rounded-full bg-white ">
                        <img src={assets.remove_icon_red} alt="" className="" onClick={()=>setItemCount(prev=>prev-1)} />
                        <p className="">{itemCount}</p>
                        <img src={assets.add_icon_green} alt="" className="" onClick={()=>setItemCount(prev=>prev+1)} />
                </div>
        }
      </div>
      <div className="px-4 py-1">
        <div className="flex justify-between align-baseline ">
          <h2 className="text-red-900 font-semibold text-sm md:text-lg">{name}</h2>
          <img src={assets.rating_starts} alt="star" className=" w-10 h-3 md:w-20 md:h-5" />
        </div>
        <p className="text-xs ">{description}</p>
        <p className="text-xs md:text-sm text-red-700 font-semibold">${price}</p>
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
