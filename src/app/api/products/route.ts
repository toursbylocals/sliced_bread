import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongo';
import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({
  name: {
    type: Map,
    of: String, // A Map of language keys (e.g., 'en', 'fr') and their respective product names
    required: true,
  },
  price: {
    type: Number,
    required: true,
  }
});

const Product = mongoose.models.Product || mongoose.model('Product', ProductSchema);

export async function GET() {

  await dbConnect();

  const products = await Product.find();
  
  return NextResponse.json(products);
}
