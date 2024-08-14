import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useEffect } from "react";
import PropTypes from "prop-types";

const List = ({url}) => {

  const [list, setList] = useState([]);

  const fetchList = async () => {
    try {
      const response = await axios.get(`${url}/api/food/list`);
      if (response.data.success) {
        setList(response.data.data || []); // Ensure list is always an array
      } else {
        toast.error("Error");
      }
    } catch (error) {
      toast.error("Error fetching data",error);
      setList([]); // Fallback to empty array in case of error
    }
  };

  const removeFood = async (foodId) => {
    try {
      const response = await axios.post(`${url}/api/food/remove`, { id: foodId });
      await fetchList(); // Refresh the list after removing an item
      if (response.data.success) {
        toast.success(response.data.message)
      }
    } catch (error) {
      toast.error("Error removing item",error);
    }
  };

  useEffect(() => {
    fetchList(); // Fetch the list only once when the component mounts
  }, []);

  return (
    <div className="mt-8 p-6">
      <h1 className="text-red-900 text-4xl">All Products</h1>
      <div className="cart-items">
        <div className="grid grid-cols-8 bg-red-400 justify-center items-center rounded-lg mb-2 py-2 font-semibold">
          <p className="col-span-2 justify-center flex">Image</p>
          <p className="col-span-2 justify-center flex">Name</p>
          <p className="col-span-2 justify-center flex">Category</p>
          <p className="col-span-1 justify-center flex">Price</p>
          <p className="col-span-1 justify-center flex">Action</p>
        </div>
        <div className="gap-1 flex flex-col">
          {list && list.length > 0 ? (
            list.map((item, index) => (
              <div
                key={index}
                className="grid grid-cols-8 md:text-lg justify-center rounded-lg items-center bg-red-50 hover:bg-red-300"
              >
                <div className="col-span-2 w-32 h-32">
                  <img
                    className="h-32 rounded-l-lg object-cover"
                    src={`${url}/images/` + item.image}
                    alt="food"
                  />
                </div>
                <p className="col-span-2 justify-center flex">{item.name}</p>
                <p className="col-span-2 justify-center flex">{item.category}</p>
                <p className="col-span-1 justify-center flex">${item.price}</p>

                <button
                  className="col-span-1 justify-center flex"
                  onClick={() => removeFood(item._id)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                    />
                  </svg>
                </button>
              </div>
            ))
          ) : (
            <p>No items available</p>
          )}
        </div>
      </div>
    </div>
  );
};

List.propTypes = {
  url: PropTypes.string.isRequired, // Add prop validation for 'url' prop
};


export default List;
