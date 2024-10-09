import mongoose from "mongoose";

let connected = false;

const connectDB = async () => {
  // Only fields specified in schema will be saved to db
  mongoose.set("strictQuery", true);

  // If database is already connected, don't connect again
  if (connected) {
    console.log("MongoDB is conncted");
    return;
  }

  // Connect to MOngoDB
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    connected = true;
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
