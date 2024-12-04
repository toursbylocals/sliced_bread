/* eslint-disable max-statements */
import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongo';
import mongoose from 'mongoose';

const OrderSchema = new mongoose.Schema({
  name: String,
  product: String,
  quantity: Number,
  address: {
    city: String,
    state: String,
    country: String,
  }
});

const Order = mongoose.models.Order || mongoose.model('Order', OrderSchema);

export async function POST(req: Request) {
  try {
    await dbConnect();

  const data = await req.json();

  // Wrap the address properties into the address object
  const { name, city, state, country, product, quantity } = data;
  
  const address = { city, state, country }; // Combine city, state, and country into the address object

  // Create the order with the address field
  const order = await Order.create({
    name,
    product,
    quantity,
    address
  });

    return NextResponse.json({
      message: 'Order placed successfully!',
      order,
    });
  } catch (error) {
    // Handle errors gracefully
    return NextResponse.json(
      {
        message: 'Failed to place order.',
        error: error.message,
      },
      { status: 500 }
    );
  }
}

export async function GET(req: Request) {
  try {
    // Connect to the database
    await dbConnect();

    // Extract the order ID from the request URL query parameters
    const url = new URL(req.url);
    const orderId = url.searchParams.get('orderId');

    if (!orderId) {
      return NextResponse.json(
        { message: 'Order ID is required.' },
        { status: 400 } // Bad Request
      );
    }

    // Fetch the order by ID
    const order = await Order.findById(orderId);

    if (!order) {
      return NextResponse.json(
        { message: 'Order not found.' },
        { status: 404 } // Not Found
      );
    }

    // Return the order
    return NextResponse.json(order);
  } catch (error) {
    // Handle errors
    return NextResponse.json(
      {
        message: 'Failed to retrieve order.',
        error: error.message,
      },
      { status: 500 } // Internal Server Error
    );
  }
}
