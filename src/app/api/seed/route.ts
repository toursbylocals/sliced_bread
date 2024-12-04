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

    try {
        await dbConnect();
        await seedDefaultProduct(); 
        const products = await Product.find();
        return NextResponse.json(products);
    } catch (error) {
        console.error("Error in seeding:", error);      
    }
}

export async function seedDefaultProduct() {
    const DEFAULT_PRODUCT = {
        _id: "674d1dcedf54d406eff22c88",
        name: { en: "Blue Water 0.5L", fr: "Eau Bleue 0,5L" },
        "price": 10.99
    };

    try {
        const productCount = await Product.countDocuments();
        if (productCount === 0) {
            await Product.create(DEFAULT_PRODUCT);
            console.log("Default product inserted.");
        } else {
            console.log("Products already exist in the database.");
        }
    } catch (error) {
        console.error("Error seeding default product:", error);
    }
}
