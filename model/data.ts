import mongoose, { Schema } from "mongoose";

export interface IData extends Document {
    type: string
    description: string
    amount: number
}

const dataSchema: Schema<IData> = new mongoose.Schema({
  type: {
    type: String,
    enum: ["+", "-"],
    required: true
  },
  description:{
    type: String,
    required: [true,"Description required"]
  },
  amount:{
    type: Number,
    required:true
  }
},{timestamps:true});

export default mongoose.models.Data || mongoose.model("Data", dataSchema);
