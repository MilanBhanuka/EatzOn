import mongoose from "mongoose";

export const connectDB = async () => {
        await mongoose.connect('mongodb+srv://vgmbhanuka2001:71571698@cluster0.ehgl9ux.mongodb.net/eatzon').then(() => console.log("MongoDB Connected"));
}