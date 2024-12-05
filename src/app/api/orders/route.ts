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
    const { name, city, state, country, product, quantity } = data;  
    const address = { city, state, country };
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
    return NextResponse.json(
      {
        message: 'Failed to place order.',
        error: (error as Error).message
      },
      { status: 500 }
    );
  }
}

export async function GET(req: Request) {
  try {
    await dbConnect();

    const url = new URL(req.url);
    const orderId = url.searchParams.get('orderId');

    if (!orderId) {
      return NextResponse.json(
        { message: 'Order ID is required.' },
        { status: 400 } 
      );
    }

    const order = await Order.findById(orderId);

    if (!order) {
      return NextResponse.json(
        { message: 'Order not found.' },
        { status: 404 }
      );
    }

    return NextResponse.json(order);
  } catch (error) {
    return NextResponse.json(
      {
        message: 'Failed to retrieve order.',
        error: (error as Error).message
      },
      { status: 500 }
    );
  }
}
