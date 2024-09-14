import { Navigate } from 'react-router-dom';
import { useAuthQuery } from '../utils/auth';
import { contextStore } from '../context';

const Protected = ({ element }) => {
    const { data: isAuthenticated, isLoading } = useAuthQuery();
    if (isLoading) return null;
    return isAuthenticated ? element : <Navigate to="/login" />;
};

export default Protected;
