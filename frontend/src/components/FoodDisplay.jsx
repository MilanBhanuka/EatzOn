import { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import FoodItem from "./FoodItem";


const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);

  return (
    <div className=" mx-20 mt-10" id="food-display">
      <h2 className="text-black font-bold text-2xl">Top dishes near you</h2>
        <div className="grid grid-cols-3 md:grid-cols-4 gap-10 mt-5">
          {food_list.map((item, index) => {
                return <FoodItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image}/>      
          })}
          </div>
    </div>
  );
};



export default FoodDisplay;
