import mongoose from 'mongoose';

const dbConnect = async () => {
    await mongoose.connect("mongodb://localhost:27017/psyche");
    console.log("Connected to DB");
}

declare global {
    var connected: boolean;
}

export default dbConnect;