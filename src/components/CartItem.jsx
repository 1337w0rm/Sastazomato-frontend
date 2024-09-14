import { contextStore } from '../context';
import {
    useCartQuantityUpdateMutation,
    useDeleteFromCartMutation,
} from '../utils/cartAPI';
const CartItem = ({ item }) => {
    const { product, quantity } = item;
    const deleteFromCartMutation = useDeleteFromCartMutation();
    const updateCartQuantityMutation = useCartQuantityUpdateMutation();

    return (
        <div className="flex items-center space-x-4 bg-white p-4 rounded-lg shadow">
            <img
                src={product.img}
                alt={product.name}
                className="w-24 h-24 object-cover rounded"
            />
            <div className="flex-grow">
                <p className="text-sm text-gray-500">{product.brand}</p>
                <h2 className="text-lg font-semibold">{product.name}</h2>
                <div className="flex items-center justify-between mt-2">
                    <select
                        defaultValue={quantity}
                        onChange={(e) =>
                            updateCartQuantityMutation.mutateAsync({
                                id: product.id,
                                quantity: e.target.value,
                            })
                        }
                        className="border rounded px-2 py-1 text-sm"
                    >
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                    </select>
                    <span className="font-semibold">
                        Rs. {product.discountedPrice * quantity}
                    </span>
                </div>
            </div>
            <div className="flex flex-col space-y-2">
                <button className="p-2 bg-gray-100 rounded-full">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            fillRule="evenodd"
                            d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                            clipRule="evenodd"
                        />
                    </svg>
                </button>
                <button
                    onClick={() =>
                        deleteFromCartMutation.mutateAsync(product.id)
                    }
                    className="p-2 bg-gray-100 rounded-full"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            fillRule="evenodd"
                            d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                            clipRule="evenodd"
                        />
                    </svg>
                </button>
            </div>
        </div>
    );
};
export default CartItem;
