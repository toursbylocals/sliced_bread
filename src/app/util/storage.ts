import fs from 'fs';
import path from 'path';

const filePath = path.resolve(process.cwd(), 'src/app/data/orders.json');

export function getAllOrders() {
  const data = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(data);
}

export function saveOrder(order: any) {
  const orders = getAllOrders();
  orders.push(order);
  fs.writeFileSync(filePath, JSON.stringify(orders, null, 2));
}

export function getOrderByRef(id: string) {
  const orders = getAllOrders();
  return orders.find((o: any) => o.id === id);
}