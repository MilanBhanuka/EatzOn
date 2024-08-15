import userModel from "../models/userModel.js";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import validator from 'validator';


// login user
const loginUser = async (req, res) => {
        const { email, password } = req.body;
        try{
                const user = await userModel.findOne({email});

                // check if user exists
                if(!user){
                        return res.json({sucscess: false, message: "User Not Found"});
                }

                // check if password is correct
                const isMatch = await bcrypt.compare(password, user.password);

                if(!isMatch){
                        return res.json({sucscess: false, message: "Invalid Credentials"});
                }

                // create token
                const token = createToken(user._id);
                res.json({sucscess: true, token});

        }catch(error){
                console.log(error);
                res.json({sucscess: false, message: "Internal Server Error"});
        }
}


// create token
const createToken = (id) => {
        return jwt.sign({id}, process.env.JWT_SECRET);
}


// register user
const registerUser = async (req, res) => {
        const { name, password, email } = req.body;
        try{
                // check if user already exists
                const exists = await userModel.findOne({email});
                if(exists){
                        return res.json({sucscess: false, message: "User Already Exists"});
                }

                // validating email and password
                if(!validator.isEmail(email)){
                        return res.json({sucscess: false, message: "Please enter a valid email"});
                }
                if(password.length < 8){
                        return res.json({sucscess: false, message: "Password must be atleast 8 characters long"});
                }

                // hashing password
                const salt = await bcrypt.genSalt(10);
                const hashedPassword = await bcrypt.hash(password, salt);

                // creating new user
                const newUser = new userModel({
                        name: name,
                        email: email,
                        password: hashedPassword
                });

                // saving user to database
                const user = await newUser.save();
                const token = createToken(user._id);

                // sending response
                res.json({sucscess: true, token: token})


        }catch(error){
                console.log(error);
                res.json({sucscess: false, message: "Internal Server Error"});
        }
}


export { loginUser, registerUser };