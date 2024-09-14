import { ToastContainer } from 'react-toastify';
import { Outlet } from 'react-router-dom';
import './App.css';
import { contextStore } from './context';
import Loader from './components/Loader';
import { useIsFetching } from '@tanstack/react-query';
function App() {
    const isFetching = useIsFetching();
    return (
        <>
            {isFetching > 0 && <Loader />}
            <ToastContainer />
            <Outlet />
        </>
    );
}

export default App;
