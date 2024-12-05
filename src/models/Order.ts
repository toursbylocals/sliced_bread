import mongoose, { Document, Schema } from "mongoose";

export interface IOrder extends Document {
  _id: string;
  name: string;
  quantity: number;
  city: string;
  stateProvince: string;
  country: string;
  createdAt: Date;
}

const OrderSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    quantity: { type: Number, required: true },
    city: { type: String, required: true },
    stateProvince: { type: String, required: true },
    country: { type: String, required: true },
  },
  { timestamps: true },
);

export default mongoose.models.Order ||
  mongoose.model<IOrder>("Order", OrderSchema);
