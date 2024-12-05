import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongo';
import { seedDefaultProduct } from './seedDefaultProduct';

import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({
    name: {
        type: Map,
        of: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    }
});

const Product = mongoose.models.Product || mongoose.model('Product', ProductSchema);

// GET route handler
export async function GET() {
    try {
        await dbConnect();
        // Call the seed function inside GET
        await seedDefaultProduct(); 
        const products = await Product.find();

        return NextResponse.json(products);
    } catch (error) {
        console.error("Error in GET request:", error);
        
        return NextResponse.error();
    }
}
