import { ToastContainer } from 'react-toastify';
import { Outlet } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import { useAuthQuery } from './utils/auth';
import { SyncLoader } from 'react-spinners';
import { contextStore } from './context';
import Loader from './components/Loader';

function App() {
    const { data: isAuthenticated } = useAuthQuery();
    const { loader } = contextStore();
    return (
        <>
            {loader && <Loader />}
            <ToastContainer />
            {isAuthenticated ? <Navbar /> : null}
            <Outlet />
        </>
    );
}

export default App;
