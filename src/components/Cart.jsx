import CartItem from './CartItem';
import { Link, useNavigate } from 'react-router-dom';
import { useCartQuery } from '../utils/userAPI';
import notify from '../utils/notify';
import { usePlacedOrderMutation } from '../utils/orderAPI';

const Cart = () => {
    const { data: cart } = useCartQuery();
    const navigate = useNavigate();

    if (!cart) return null;

    const placedOrderMutation = usePlacedOrderMutation();

    if (placedOrderMutation.isSuccess) navigate('/orderplaced');
    const handleOrderPlaced = (event) => {
        if (cart.items.length === 0) {
            event.preventDefault();
            notify('error', 'Cart is empty');
            return;
        }

        placedOrderMutation.mutate();
    };
    const itemTotalCost = cart.items.reduce((totalCost, item) => {
        return totalCost + item.product.discountedPrice * item.quantity;
    }, 0);

    return (
        <div className="container mx-auto p-4 font-sans">
            <Link
                to="/"
                className="flex items-center text-blue-600 hover:text-blue-800 mb-6 transition duration-300 ease-in-out"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                >
                    <path
                        fillRule="evenodd"
                        d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                        clipRule="evenodd"
                    />
                </svg>
                Back to Home
            </Link>
            <div className="flex flex-col lg:flex-row gap-8">
                <div className="lg:w-2/3">
                    <div className="flex justify-between items-center mb-6">
                        <h1 className="text-2xl font-bold">Shopping Cart</h1>
                        <span className="text-lg">
                            {cart.items.length} Items
                        </span>
                    </div>
                    <div className="space-y-6">
                        {cart.items.map((item) => (
                            <CartItem key={item._id} item={item} />
                        ))}
                    </div>
                </div>
                <div className="lg:w-1/3">
                    <div className="bg-white p-6 rounded-lg shadow">
                        <h2 className="text-xl font-bold mb-4">
                            Order Summary
                        </h2>
                        <div className="space-y-4">
                            <div className="flex justify-between">
                                <span>ITEMS {cart.items.length}</span>
                                <span className="font-semibold">
                                    Rs. {itemTotalCost}
                                </span>
                            </div>
                            <div>
                                <p className="mb-2">SHIPPING</p>
                                <select className="w-full border rounded px-3 py-2 text-sm">
                                    <option>Free Shipping</option>
                                </select>
                            </div>
                            <div>
                                <p className="mb-2">PROMO CODE</p>
                                <div className="flex space-x-2">
                                    <input
                                        type="text"
                                        placeholder="Enter your code"
                                        className="flex-grow border rounded px-3 py-2 text-sm"
                                    />
                                    <button className="bg-red-500 text-white px-4 py-2 rounded text-sm">
                                        APPLY
                                    </button>
                                </div>
                            </div>
                            <div className="border-t pt-4 mt-4">
                                <div className="flex justify-between">
                                    <span className="font-semibold">
                                        TOTAL COST
                                    </span>
                                    <span className="font-bold">
                                        RS. {itemTotalCost + 40}
                                    </span>
                                </div>
                            </div>
                            <button
                                onClick={handleOrderPlaced}
                                className="w-full bg-green-500 text-white py-3 rounded-lg font-semibold mt-4"
                            >
                                Checkout
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
