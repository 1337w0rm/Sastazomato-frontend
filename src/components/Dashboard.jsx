import ProductsContainer from './Products';
import Search from './Search';
import { useEffect, useState } from 'react';
import { useProductsQuery, useCartQuery } from '../utils/auth';
import { SyncLoader } from 'react-spinners';

const Dashboard = () => {
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const { data: cart } = useCartQuery();
    const { data: products, isLoading, isError } = useProductsQuery();

    useEffect(() => {
        if (!isLoading) {
            const result = products.filter((product) =>
                product.name.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setFilteredProducts(result);
        }
    }, [searchTerm, products]);

    if (isLoading) {
        return (
            <div
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100vw',
                    height: '100vh',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    zIndex: 9999,
                }}
            >
                <SyncLoader color="#ffffff" size={60} />
            </div>
        );
    }

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
