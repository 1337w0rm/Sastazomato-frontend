import { useState } from 'react';
import {
    useAuthQuery,
    useLoginMutation,
    userRegisterMutation,
} from '../utils/auth';
import { Navigate } from 'react-router-dom';

const Login = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { data: user } = useAuthQuery();
    const loginMutation = useLoginMutation();
    const registerMutation = userRegisterMutation();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (isLogin) {
            try {
                loginMutation.mutateAsync({ username, password });
            } catch (err) {
                console.log(err);
            }
        } else {
            try {
                registerMutation.mutateAsync({ username, password });
                setIsLogin(false);
            } catch (err) {
                console.log(err);
            }
        }
    };

    return (
        <>
            {user.isAuthenticated ? (
                <Navigate to="/" />
            ) : (
                <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-md w-full space-y-8">
                        <div>
                            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                                {isLogin
                                    ? 'Sign in to your account'
                                    : 'Create a new account'}
                            </h2>
                        </div>
                        <form
                            className="mt-8 space-y-6"
                            onSubmit={handleSubmit}
                        >
                            <input type="hidden" name="remember" value="true" />
                            <div className="rounded-md shadow-sm -space-y-px">
                                <div className="mb-4 max-w-sm mx-auto mt-20">
                                    <label
                                        htmlFor="username"
                                        className="block text-gray-700 font-bold mb-2"
                                    >
                                        Username
                                    </label>
                                    <input
                                        id="username"
                                        name="username"
                                        type="text"
                                        autoComplete="false"
                                        required
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-red-500"
                                        placeholder="Username"
                                        value={username}
                                        onChange={(e) =>
                                            setUsername(e.target.value)
                                        }
                                    />
                                </div>
                                <div className="mb-4 max-w-sm mx-auto mt-20">
                                    <label
                                        htmlFor="password"
                                        className="block text-gray-700 font-bold mb-2"
                                    >
                                        Password
                                    </label>
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        autoComplete="current-password"
                                        required
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-red-500"
                                        placeholder="Password"
                                        value={password}
                                        onChange={(e) =>
                                            setPassword(e.target.value)
                                        }
                                    />
                                </div>
                            </div>

                            <div className="mb-4 max-w-sm mx-auto mt-20">
                                <button
                                    type="submit"
                                    className="flex flex-row items-center justify-center w-full px-4 py-4 mb-4 text-sm font-bold bg-green-300 leading-6 capitalize duration-100 transform rounded-sm shadow cursor-pointer focus:ring-4 focus:ring-green-500 focus:ring-opacity-50 focus:outline-none sm:mb-0 sm:w-auto sm:mr-4 md:pl-8 md:pr-6 xl:pl-12 xl:pr-10 hover:shadow-lg hover:-translate-y-1"
                                >
                                    {isLogin ? 'Sign in' : 'Sign up'}
                                </button>
                            </div>
                        </form>
                        <div className="text-sm text-center">
                            <a
                                href="#"
                                className="font-medium text-indigo-600 hover:text-indigo-500"
                                onClick={(e) => {
                                    e.preventDefault();
                                    setIsLogin(!isLogin);
                                }}
                            >
                                {isLogin
                                    ? 'Need an account? Sign up'
                                    : 'Already have an account? Sign in'}
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Login;
