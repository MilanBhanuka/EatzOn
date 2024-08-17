
import axios from 'axios';
import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from 'react';


export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {

    const [cartItems, setCartItems] = useState([]);
    const url = "http://localhost:4000";
    const [token,setToken] = useState("");
    const [food_list, setFoodList] = useState([]);

    const addToCart = async (itemId) => {
        // Add item to cart in the frontend
        if(!cartItems[itemId]){
            setCartItems(prev=>({...prev, [itemId]:1}))
        }
        else{
            setCartItems((prev)=>({...prev, [itemId]:prev[itemId]+1}))
        }

        // Add item to cart in the backend
        if(token){
            await axios.post(url+"/api/cart/add",{itemId},{headers:{token}})
        }
    }


    const removeFromCart = async (itemId) => {
        // Remove item from cart in the frontend
        setCartItems((prev)=>({...prev, [itemId]:prev[itemId]-1}))

        // Remove item from cart in the backend
        if(token){
            await axios.post(url+"/api/cart/remove",{itemId},{headers:{token}})
        }
    }


    // Calculate total amount of cart
    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for(const item in cartItems){
           if(cartItems[item]>0){
            let itemInfo = food_list.find((product)=>product._id===item);
            totalAmount += itemInfo.price*cartItems[item];
           }
        }
        return totalAmount;
    }

 

    // Calculate total number of items in the cart
    const getTotalCartItems = () => {
        let totalItems = 0;
        for(const item in cartItems){
            if(cartItems[item]>0){
                totalItems += cartItems[item];
            }
        }
        return totalItems;
    }


    // Fetch food list from the backend
    const fetchFoodList = async () => {
        const response = await axios.get(url+"/api/food/list");
        setFoodList(response.data.data);
    }


    // Load cart data from the backend
    const loadCartData = async (token) => {
        const response = await axios.post(url+"/api/cart/get",{}, {headers:{token}});
        setCartItems(response.data.cartData);
    }


    useEffect(()=>{
        async function loadData(){
            await fetchFoodList();
            if(localStorage.getItem("token")){
                setToken(localStorage.getItem("token"))
                await loadCartData(localStorage.getItem("token"));
            }
        }
        loadData();
    },[])


    const contextValue = {
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
        getTotalCartItems,
        url,
        token,
        setToken

    };

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    );
};

StoreContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default StoreContextProvider;
