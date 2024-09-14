import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Home from './components/Home';
import ErrorPage from './errorPage';
import Login from './components/Login';
import Cart from './components/Cart';
import Protected from './components/Protected';
import ProfilePage from './components/Profile';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            { index: true, element: <Protected element={<Home />} /> },
            {
                path: 'login',
                element: <Login />,
            },
            { path: 'cart', element: <Protected element={<Cart />} /> },
            {
                path: 'profile',
                element: <Protected element={<ProfilePage />} />,
            },
        ],
        errorElement: <ErrorPage />,
    },
]);

export default router;
