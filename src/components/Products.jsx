import Card from './Card';

const ProductsContainer = ({ filteredProducts, cart }) => {
    return (
        <section
            id="productsContainer"
            className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5"
        >
            {filteredProducts.map((product) => {
                return <Card key={product.id} cart={cart} product={product} />;
            })}
        </section>
    );
};

export default ProductsContainer;
