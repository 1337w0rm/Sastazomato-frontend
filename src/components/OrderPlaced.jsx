import { useQueryClient } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
export default function OrderPlaced() {
    const queryClient = useQueryClient();
    const orderDetails = queryClient.getQueryData(['lastOrder']);

    const orderDate = new Date(orderDetails.orderDate);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = orderDate.toLocaleString('en-US', options);

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-md">
                <div className="text-center mb-6">
                    <svg
                        className="w-16 h-16 text-green-500 mx-auto mb-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                    </svg>
                    <h1 className="text-2xl font-bold text-gray-800">
                        Order Placed!
                    </h1>
                    <p className="text-gray-600">
                        Thank you for your purchase.
                    </p>
                </div>

                <div className="border-t border-b border-gray-200 py-4 mb-4">
                    <div className="flex justify-between mb-2">
                        <span className="font-semibold">Order ID:</span>
                        <span>#{orderDetails.orderId}</span>
                    </div>
                    <div className="flex justify-between mb-2">
                        <span className="font-semibold">Date:</span>
                        <span>{formattedDate}</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="font-semibold">Total:</span>
                        <span>{orderDetails.totalAmount}</span>
                    </div>
                </div>

                <div className="mb-6">
                    <h2 className="text-lg font-semibold mb-2">Order Items:</h2>
                    <ul>
                        {orderDetails.items.map((item, index) => (
                            <li
                                key={index}
                                className="flex justify-between mb-2"
                            >
                                <span>
                                    {item.product.name} (x{item.quantity})
                                </span>
                                <span>{item.product.discountedPrice}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <Link to="/orders">
                    <button className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-150 ease-in-out">
                        View All Orders
                    </button>
                </Link>
            </div>
        </div>
    );
}
