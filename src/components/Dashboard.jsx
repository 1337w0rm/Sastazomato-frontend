import ProductsContainer from './Products';
import Search from './Search';
import { useEffect, useState } from 'react';
import { useProductsQuery, useCartQuery } from '../utils/auth';
import Loader from './Loader';
import { contextStore } from '../context';

const Dashboard = () => {
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const { data: cart } = useCartQuery();
    const { data: products, isLoading, isFetched } = useProductsQuery();
    const { setLoader } = contextStore();

    useEffect(() => {
        if (!isLoading) {
            const result = products.filter((product) =>
                product.name.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setFilteredProducts(result);
        }
    }, [searchTerm, products]);

    if (isLoading) setLoader(true);
    else setLoader(false);

    return (
        <>
            <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <ProductsContainer
                cart={cart}
                filteredProducts={filteredProducts}
            />
        </>
    );
};

export default Dashboard;
