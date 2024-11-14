import mongoose, { Schema, Document } from "mongoose";
import { IMessage, MessageSchema } from "./Message";
import { emailRegex } from "@/const";

export interface IUser extends Document {
  userName: string;
  email: string;
  password: string;
  verifycode: string;
  verifyCodeExpiry: Date;
  isVarified: boolean;
  isAcceptingMessage: boolean;
  messages: IMessage[];
}

const UserSchema: Schema<IUser> = new mongoose.Schema({
  userName: {
    type: String,
    required: [true, "username is required"],
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: [true, "email is required"],
    unique: true,
    trim: true,
    match: [emailRegex, "Please enter a valid email"],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
  verifycode: {
    type: String,
    required: [true, "verifycode is required"],
  },
  verifyCodeExpiry: {
    type: Date,
    required: [true, "verifyCodeExpiry is required"],
  },
  isVarified: {
    type: Boolean,
    default: false,
  },
  isAcceptingMessage: {
    type: Boolean,
    default: true,
  },
  messages: [MessageSchema],
});

const User =
  (mongoose.models.User as mongoose.Model<IUser>) ||
  mongoose.model<IUser>("User", UserSchema);

export default User;
