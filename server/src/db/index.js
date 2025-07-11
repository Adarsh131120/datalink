import mongoose from "mongoose";
 

import dotenv from "dotenv";

dotenv.config();

const  connectDB = async () => {
        try{
            const connectioninstance = await mongoose.connect(`${process.env.MONGO_URI}/${process.env.DB_NAME}`);
            console.log(`MongoDB connected: ${connectioninstance.connection.host}`);
        }catch(err){
            console.log(err);
            process.exit(1);
        }
}

export default connectDB;


