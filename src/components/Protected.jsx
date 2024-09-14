import { Navigate } from 'react-router-dom';
import { useAuthQuery } from '../utils/userAPI';
import { contextStore } from '../context';

const Protected = ({ element }) => {
    const { data: user, isLoading } = useAuthQuery();
    if (isLoading) return null;
    return user.isAuthenticated ? element : <Navigate to="/login" />;
};

export default Protected;
