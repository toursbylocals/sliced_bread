import { getOrderByRef } from '../../../util/storage';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  // Ensure the params are resolved asynchronously
  const { id } = await params;
  console.log('id', id)
  const order = await getOrderByRef(id);

  if (!order) {
    return NextResponse.json({ error: 'Order not found' }, { status: 404 });
  }

  return NextResponse.json(order);
}