export default async function OrderPage({ params }: { params: { id: string } }) {
  // Await params to resolve the dynamic values
  const { id } = await params;

  // Fetch the order data from your API route
  const res = await fetch(`http://localhost:3000/api/order/${id}`);

  const order = await res.json();
  console.log('order', order);

  if (!order) {
    return <div>Order not found</div>;
  }

  return (
    <main className="p-8 max-w-3xl mx-auto font-sans text-gray-800">
      <header className="mb-10 text-center">
        <h1 className="text-3xl font-extrabold text-blue-800 mb-4">Order Details</h1>
        <p className="text-lg text-gray-600">Here are the details of your order</p>
      </header>

      <section className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
        <h2 className="text-2xl font-semibold text-blue-700 mb-4">Order ID: {order.id}</h2>

        <div className="space-y-4">
          <div className="flex justify-between">
            <span className="font-medium text-gray-700">Name:</span>
            <span className="text-gray-500">{order.name}</span>
          </div>

          <div className="flex justify-between">
            <span className="font-medium text-gray-700">Quantity:</span>
            <span className="text-gray-500">{order.quantity}</span>
          </div>

          <div className="flex justify-between">
            <span className="font-medium text-gray-700">City:</span>
            <span className="text-gray-500">{order.city}</span>
          </div>

          <div className="flex justify-between">
            <span className="font-medium text-gray-700">Province:</span>
            <span className="text-gray-500">{order.province}</span>
          </div>

          <div className="flex justify-between">
            <span className="font-medium text-gray-700">Country:</span>
            <span className="text-gray-500">{order.country}</span>
          </div>
        </div>

        <div className="mt-6">
          <h3 className="text-xl font-semibold text-blue-700 mb-2">Review Your Order</h3>
          <p className="text-gray-600">Is everything correct? If not, please contact us to update your order.</p>
        </div>
      </section>
    </main>
  );
}