import { saveOrder } from '../../util/storage';
import { NextRequest, NextResponse } from 'next/server';
import { v4 as uuidv4 } from 'uuid';

export async function POST(req: NextRequest) {
  const data = await req.json();
  if (!data.city || !data.province || !data.country) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
  }
  const id = "ORDER-" + uuidv4().slice(0, 6);
  const order = { ...data, id, createdAt: new Date().toISOString() };
  saveOrder(order);
  return NextResponse.json({ id, quantity: order.quantity, name: order.name }, { status: 200 });
}