import dns from "dns";

dns.setServers(["1.1.1.1", "8.8.8.8"]);
import mongoose from "mongoose";

const connectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("Database Connected")
    } catch (error) {
        console.log(`Database Error ${error}`);
        
    }
}

export default connectDb