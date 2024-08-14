import { useState } from "react";
import PropTypes from "prop-types"; // Import prop-types library
import { assets } from "../assets/assets";
import axios from "axios";
import { toast } from 'react-toastify';

// import { useEffect } from "react";

const Add = ({url}) => {

  
  const [image, setImage] = useState(false);
  const [data, setData] = useState({
    name: "",
    description: "",
    category: "",
    price: ""
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData(data => ({...data, [name]: value}));
  }

  const onSubmitHandler = async (event) => {
    event.preventDefault(); 
    const formData = new FormData();
    formData.append("name",data.name)
    formData.append("description",data.description)
    formData.append("price",Number(data.price))
    formData.append("category",data.category)
    formData.append("image",image)

    const response = await axios.post(`${url}/api/food/add`,formData)

    if(response.data.success){
        setData({
          name: "",
          description: "",
          category: "",
          price: ""
        })
        setImage(false)
        toast.success(response.data.message)
    }else{
      toast.error(response.data.message)
    }
  }

  // useEffect(() => {
  //   console.log(data);
  // }, [data]);

  return (
    <div className="add w-full   flex justify-center text-xl  ">
      <form onSubmit={onSubmitHandler} className="w-3/4 mt-16 flex flex-col    ">
        <div className="add-img w-full flex flex-col justify-center items-center">
          <p>Upload Produc Image</p>
          <label htmlFor="image">
            <img src={image?URL.createObjectURL(image):assets.upload_area} alt="" className="h-40" />
          </label>
          <input onChange={(e)=>setImage(e.target.files[0])} type="file" id="image" name="image" hidden required />
        </div>
        <div className="add-product-name flex flex-col mt-2">
          <p>Product Name</p>
          <input
            onChange={onChangeHandler}
            value={data.name}
            type="text"
            name="name"
            required
            className="border-2 w-full  border-red-900 p-1 rounded-lg outline-none"
          />
        </div>
        <div className="add-product-description flex flex-col mt-2">
          <p>Product Description</p>
          <textarea
            onChange={onChangeHandler}
            value={data.description}
            name="description"
            required
            className="border-2 w-full  border-red-900 p-1 rounded-lg outline-none"
          ></textarea>
        </div>
        <div className="add-product-category flex flex-col mt-2">
          <p>Product Category</p>
          <select
            onChange={onChangeHandler}
            value={data.category}
            name="category"
            required
            className="border-2 w-full  border-red-900 p-1 rounded-lg outline-none"
          >
            <option value="Salad">Salad</option>
            <option value="Rolls">Rolls</option>
            <option value="Deserts">Deserts</option>
            <option value="Sandwich">Sandwich</option>
            <option value="Cake">Cake</option>
            <option value="Pure Veg">Pure Veg</option>
            <option value="Pasta">Pasta</option>
            <option value="Noodles">Noodles</option>
          </select>
        </div>
        <div className="add-product-price flex flex-col mt-2">
          <p>Product Price </p>
          <input
            onChange={onChangeHandler}
            value={data.price}
            type="number"
            name="price"
            required
            className="border-2 w-full  border-red-900 p-1 rounded-lg outline-none"
          />
        </div>
        <div className="add-product-quantity flex flex-col mt-2 justify-center items-center">
          <button
            type="submit"
            className="add-product-btn mt-4 bg-red-900 text-white hover:bg-red-800 p-2 rounded-lg w-1/2"
          >
            Add Product
          </button>
        </div>
      </form>
    </div>
  );
};
Add.propTypes = {
  url: PropTypes.string.isRequired, // Add prop validation for 'url' prop
};

export default Add;
