import mongoose, { Schema, Document } from "mongoose";

export interface IMessage extends Document {
  content: string;
  createdAt: Date;
}

export const MessageSchema: Schema<IMessage> = new Schema({
  content: {
    type: String,
    required: [true, "content should not be empty"],
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

const Message =
  (mongoose.models.Message as mongoose.Model<IMessage>) ||
  mongoose.model<IMessage>("Message", MessageSchema);

export default Message;
