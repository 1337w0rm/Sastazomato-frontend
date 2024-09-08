import { Navigate } from 'react-router-dom';
import { useAuthQuery } from '../utils/auth';
import { contextStore } from '../context';

const Protected = ({ element }) => {
    const { data: isAuthenticated, isLoading } = useAuthQuery();
    const { setLoader } = contextStore();

    if (isLoading) setLoader(true);
    else {
        setLoader(false);
        return isAuthenticated ? element : <Navigate to="/login" />;
    }
};

export default Protected;
