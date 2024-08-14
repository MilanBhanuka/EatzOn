import FoodModel from "../models/foodModel.js";
import fs from "fs";

// add food item
const addFood = async(req, res) => {
        let image_filename = `${req.file.filename}`;

        const food = new FoodModel({
                name: req.body.name,
                description: req.body.description,
                price: req.body.price,
                category: req.body.category,
                image: image_filename      
        })
        try{
                await food.save();
                res.json({success:true,message:"Food Item Added Successfully"});
        }catch(error){
                console.log(error);
                res.json({success:false,message:"Error in Adding Food Item"});
        }
}



//  all food list
const listFood = async(req, res) => {
        try{
                const food = await FoodModel.find({});
                res.json({success:true,data:food});
        }
        catch(error){
                console.log(error);
                res.json({success:false,message:"Error in Fetching Food Items"});
        }             
}


// remove food item
const removeFood = async(req, res) => {
        try{
                const food = await FoodModel.findById(req.body.id);
                fs.unlink(`uploads/${food.image}`,()=>{});

                await FoodModel.findByIdAndDelete(req.body.id);
                res.json({success:true,message:"Food Item Removed Successfully"});
        }catch(error){
                console.log(error);
                res.json({success:false,message:"Error in Removing Food Item"});
        }
}


export{
        addFood,
        listFood,
        removeFood
}