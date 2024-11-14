import { MONGO_URI } from "@/const";
import mongoose from "mongoose";

type ConnectionObject = {
  isconnected?: number;
};

const connection: ConnectionObject = {};

const dbConnection = async (): Promise<void> => {
  if (connection.isconnected) {
    console.log("already connected to DB");
    return;
  }

  try {
    const db = await mongoose.connect(MONGO_URI || "");
    connection.isconnected = db.connections[0].readyState;
    console.log("DB connected successfully ");
  } catch (error) {
    console.log("Error occred while connection to DB ", error);
    process.exit(1);
  }
};

export default dbConnection;
