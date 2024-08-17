import { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import FoodItem from "./FoodItem";
import PropTypes from 'prop-types';


const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);

  return (
    <div className=" md:mx-20 mx-10 mt-10 flex flex-col justify-center items-center" id="food-display">
      <h2 className="text-black font-bold text-2xl ">Top dishes near you</h2>
        <div className="flex flex-wrap gap-10 mt-5">
          {food_list.map((item, index) => {
                if(category==="All" || category===item.category){
                        return <FoodItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image}/>      
                }
          })}
          </div>
    </div>
  );
};

FoodDisplay.propTypes = {
        category: PropTypes.string.isRequired,
        };

export default FoodDisplay;
