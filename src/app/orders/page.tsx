'use client';

import React, { useEffect, useState } from 'react';
import { Button, Card, CardBody } from '@nextui-org/react';
import { Order } from '@/lib/interfaces/Order';
import { useRouter } from 'next/navigation';
import SearchBar from '../components/UI/search-bar';
import OrdersTable from '../components/UI/order-table';
import { BiLeftArrowCircle } from 'react-icons/bi';
const filterOrders = (orders: Order[], query: string): Order[] => {
  if (!query) return orders;
  const lowerCaseQuery = query.toLowerCase();

  return orders.filter(
    (order) =>
      order.name?.toLowerCase().includes(lowerCaseQuery) ||
      order.confirmationNumber?.toLowerCase().includes(lowerCaseQuery) ||
      order.generatedName?.toLowerCase().includes(lowerCaseQuery) ||
      order.city?.toLowerCase().includes(lowerCaseQuery) ||
      order.id.toString().includes(lowerCaseQuery)
  );
};
const OrderList: React.FC = () => {
  const [loadedOrders, setLoadedOrders] = useState<Order[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredOrders, setFilteredOrders] = useState<Order[]>([]);
  const router = useRouter();

  useEffect(() => {
    const storedOrders: Order[] = Object.keys(localStorage)
      .filter((key) => key.startsWith('order-'))
      .map((key) => {
        const orderData = localStorage.getItem(key);

        return orderData ? JSON.parse(orderData) : null;
      })
      .filter(Boolean) as Order[];

    setLoadedOrders(storedOrders);
  }, []);
  useEffect(() => {
    setFilteredOrders(loadedOrders); // Reset filtered orders when orders are loaded
  }, [loadedOrders]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;

    setSearchTerm(query);
    setFilteredOrders(filterOrders(loadedOrders, query));
  };

  const handleClear = () => {
    setSearchTerm('');
    setFilteredOrders(loadedOrders);
  };

  const handleRowClick = (orderId: string) => {
    router.push(`/orders/${orderId}`);
  };

  return (
    <section className="container mx-auto px-4 py-12">
      <Card className="max-w-6xl mx-auto">
        <CardBody>
          {loadedOrders.length > 0 && (
            <SearchBar
              searchTerm={searchTerm}
              onSearch={handleSearch}
              onClear={handleClear}
            />
          )}
          <OrdersTable orders={filteredOrders} onRowClick={handleRowClick} />
        </CardBody>
      </Card>

      <div className="flex items-center justify-center">
        <Button
          onPress={() => router.push('/')}
          className="mt-4 bg-primaryGreen  text-white"
        >
          <BiLeftArrowCircle /> Return Home
        </Button>
      </div>
    </section>
  );
};

export default OrderList;
