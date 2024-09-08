import { Link } from 'react-router-dom';
import { useCartQuery } from '../utils/auth';
import { contextStore } from '../context';
const Navbar = () => {
    const { data: cart, isLoading } = useCartQuery();
    const { setLoader } = contextStore();
    if (isLoading) setLoader(true);
    else setLoader(false);
    return (
        <div className="top-0 py-1 lg:py-2 w-full bg-transparent lg:relative z-50 dark:bg-gray-900">
            <nav className="z-10 sticky top-0 left-0 right-0 max-w-4xl xl:max-w-5xl mx-auto px-5 py-2.5 lg:border-none lg:py-4">
                <div className="flex items-center justify-between">
                    <Link to="/">
                        <button>
                            <div className="flex items-center space-x-2">
                                <h2 className="text-black dark:text-white font-bold text-2xl">
                                    SastaZomato
                                </h2>
                            </div>
                        </button>
                    </Link>
                    <div className="hidden lg:block">
                        <ul className="flex space-x-10 text-base font-bold text-black/60 dark:text-white">
                            <li className="hover:underline hover:underline-offset-4 hover:w-fit transition-all duration-100 ease-linear">
                                <Link to="/">
                                    <div class="inline-block p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-200">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            class="h-6 w-6 text-gray-700"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                                            />
                                        </svg>
                                    </div>
                                </Link>
                            </li>
                            <li className="hover:underline hover:underline-offset-4 hover:w-fit transition-all duration-100 ease-linear">
                                <Link to="/cart">
                                    <div class="relative inline-block p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-200">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            class="h-6 w-6 text-gray-700"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                                            />
                                        </svg>

                                        <span class="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                                            {cart?.items.length}
                                        </span>
                                    </div>
                                </Link>
                            </li>
                            <li className="hover:underline hover:underline-offset-4 hover:w-fit transition-all duration-100 ease-linear">
                                <a href="#">
                                    <div class="inline-block p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-200">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            class="h-6 w-6 text-gray-700"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                            />
                                        </svg>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
