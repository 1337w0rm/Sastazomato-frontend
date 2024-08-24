import bagPlus from '../assets/bagPlus.svg';
import bagPlusFill from '../assets/bag-plus-fill.svg';
import {
    useAddToCartMutation,
    useDeleteFromCartMutation,
} from '../utils/cartAPI';

const Card = ({ product, cart }) => {
    const addToCartMutation = useAddToCartMutation();
    const deleteFromCartMutation = useDeleteFromCartMutation();
    const { name, brand, discountedPrice, originalPrice, img } = product;

    const itemInCart =
        cart.items.find((item) => item.product.id === product.id) || false;

    const handleCart = async () => {
        if (!itemInCart) {
            addToCartMutation.mutate(product.id);
        } else {
            deleteFromCartMutation.mutate(product.id);
        }
    };

    return (
        <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
            <img
                src={img}
                alt="Product"
                className="h-80 w-72 object-cover rounded-t-xl"
            />
            <div className="px-4 py-3 w-72">
                <span className="text-gray-400 mr-3 uppercase text-xs">
                    {brand}
                </span>
                <p className="text-lg font-bold text-black truncate block capitalize">
                    {name}
                </p>
                <div className="flex items-center">
                    <p className="text-lg font-semibold text-black cursor-auto my-3">
                        Rs.{discountedPrice}
                    </p>
                    <del>
                        <p className="text-sm text-gray-600 cursor-auto ml-2">
                            Rs.{originalPrice}
                        </p>
                    </del>
                    <div className="ml-auto" onClick={handleCart}>
                        <img src={itemInCart ? bagPlusFill : bagPlus} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
