import { contextStore } from '../context';
import {
    useCartQuantityUpdateMutation,
    useDeleteFromCartMutation,
} from '../utils/cartAPI';
const CartItem = ({ item }) => {
    const { product, quantity } = item;
    const { setLoader } = contextStore();
    const deleteFromCartMutation = useDeleteFromCartMutation();
    const updateCartQuantityMutation = useCartQuantityUpdateMutation();

    if (deleteFromCartMutation.isLoading) setLoader(true);

    if (updateCartQuantityMutation.isLoading) setLoader(true);

    return (
        <div className="md:flex items-strech py-8 md:py-10 lg:py-8 border-t border-gray-50">
            <div className="md:w-4/12 2xl:w-1/4 w-full">
                <img
                    src={product.img}
                    alt="Black Leather Purse"
                    className="h-full object-center object-cover md:block hidden"
                />
                <img
                    src={product.img}
                    alt="Black Leather Purse"
                    className="md:hidden w-full h-full object-center object-cover"
                />
            </div>
            <div className="md:pl-3 md:w-8/12 2xl:w-3/4 flex flex-col justify-center">
                <p className="text-xs leading-3 text-gray-800 md:pt-0 pt-4">
                    {product.brand}
                </p>
                <div className="flex items-center justify-between w-full">
                    <p className="text-base font-black leading-none text-gray-800">
                        {product.name}
                    </p>
                    <div className="mb-6">
                        <label
                            htmlFor="quantity"
                            className="block text-sm font-medium text-gray-700 mb-1"
                        >
                            Qty
                        </label>

                        <select
                            defaultValue={quantity}
                            onChange={(e) =>
                                updateCartQuantityMutation.mutateAsync({
                                    id: product.id,
                                    quantity: e.target.value,
                                })
                            }
                            aria-label="Select quantity"
                            className="w-12 text-center rounded-md border-gray-300  shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        >
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                    </div>
                </div>

                <div className="flex items-center justify-between pt-5">
                    <div className="flex itemms-center gap-2">
                        <button className="bg-gray-200 flex gap-2 items-center  text-gray-800 px-6 py-2 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="size-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                                />
                            </svg>
                        </button>
                        <button
                            onClick={() =>
                                deleteFromCartMutation.mutateAsync(product.id)
                            }
                            className="text-slate-800 hover:text-blue-600 text-sm bg-white hover:bg-slate-100 border border-slate-200 rounded-r-lg font-medium px-4 py-2 inline-flex space-x-1 items-center"
                        >
                            <span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="w-6 h-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                    />
                                </svg>
                            </span>
                        </button>
                    </div>
                    <p className="text-base font-black leading-none text-gray-800">
                        Rs. {product.discountedPrice * quantity}
                    </p>
                </div>
            </div>
        </div>
    );
};
export default CartItem;
