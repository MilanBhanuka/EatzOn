import { menu_list } from "../assets/assets";

import PropTypes from 'prop-types';

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className="flex flex-col mt-8 md:mx-20 mx-10" id="explore-menu">
      <h1 className="text-black font-bold text-2xl ">ExploreOur Menu</h1>
      <p className="mb-4">Choose from a variety of delicious dishes </p>
      <div className="flex justify-between items-center gap-10 text-center overflow-x-scroll no-scrollbar">
        {menu_list.map((item, index) => {
          return (
            <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className="explore-menu-item cursor-pointer  min-w-36" >
              <img className={category===item.menu_name?" h-full w-full border-4 border-red-600 rounded-full":""} src={item.menu_image} alt="" />
              <h2 className="mt-3 text-red-950">{item.menu_name}</h2>
            </div>
          );
        })}
      </div>
      <hr className="mt-4 bg-red-950" />
    </div>
  );
}

ExploreMenu.propTypes = {
  category: PropTypes.string.isRequired,
  setCategory: PropTypes.func.isRequired
};

export default ExploreMenu;


