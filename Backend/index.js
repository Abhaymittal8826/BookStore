import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";
   
dotenv.config();

const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;

const app = express();


  const connectToDatabase = async () => {
  try {
    await mongoose.connect(URI);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log("Error connecting to MongoDB:", error);
  }
};


connectToDatabase();

app.use(cors());
app.use(express.json());

// connect to mongoDB


// defining routes
app.use("/book", bookRoute);
app.use("/user", userRoute);

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});