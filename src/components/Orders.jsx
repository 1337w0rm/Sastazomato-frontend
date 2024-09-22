import { useGetOrderQuery } from '../utils/orderAPI';

export default function FoodDeliveryOrders() {
    const { data, isLoading } = useGetOrderQuery();
    if (isLoading) return null;
    const { orders: orders } = data;

    const options = { year: 'numeric', month: 'long', day: 'numeric' };

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6">Your Orders</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {orders.map((order) => (
                    <div
                        key={order.orderId}
                        className="bg-white rounded-lg shadow-md overflow-hidden"
                    >
                        <div className="p-6">
                            <div className="flex justify-between items-center mb-4">
                                <h2 className="text-xl font-semibold">
                                    #{order.orderId}
                                </h2>
                                <span
                                    className={`px-2 py-1 text-xs font-semibold rounded-full ${
                                        order.status === 'Delivered'
                                            ? 'bg-green-200 text-green-800'
                                            : order.status === 'On the way'
                                              ? 'bg-blue-200 text-blue-800'
                                              : 'bg-yellow-200 text-yellow-800'
                                    }`}
                                >
                                    {order.status}
                                </span>
                            </div>
                            <div className="mb-4">
                                <h3 className="text-sm font-semibold text-gray-600 mb-2">
                                    Order Items:
                                </h3>
                                <ul className="list-disc list-inside">
                                    {order.items.map((item, index) => (
                                        <li
                                            key={item.name}
                                            className="text-sm text-gray-600"
                                        >
                                            {item.product.name}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="flex justify-between items-center mb-4">
                                <div className="flex items-center">
                                    <span className="text-sm text-gray-600">
                                        {new Date(
                                            order.orderDate
                                        ).toLocaleString('en-US', options)}
                                    </span>
                                </div>
                                <div className="text-lg font-semibold">
                                    Rs {order.totalAmount.toFixed(2)}
                                </div>
                            </div>
                            <div className="flex items-center mb-2">
                                <span className="text-sm text-gray-600">
                                    {order.address}
                                </span>
                            </div>
                        </div>
                        {/*                         <div className="bg-gray-50 px-6 py-4">
                            <div className="flex items-center justify-between">
                                <span className="text-sm font-medium text-gray-600">
                                    Track Order
                                </span>
                                <button className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                                    View Details
                                </button>
                            </div>
                        </div> */}
                    </div>
                ))}
            </div>
        </div>
    );
}
