import { Navigate } from 'react-router-dom';
import { useAuthQuery } from '../utils/auth';

const Protected = ({ element }) => {
    const { data: isAuthenticated } = useAuthQuery();
    return isAuthenticated ? element : <Navigate to="/login" />;
};

export default Protected;
