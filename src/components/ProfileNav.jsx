import { useState } from 'react';
import { userLogoutMutation } from '../utils/userAPI';
import { Link, useNavigate } from 'react-router-dom';
const ProfileNav = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const logoutMutation = userLogoutMutation();
    const navigate = useNavigate();

    const logoutHandler = (event) => {
        event.preventDefault();
        try {
            logoutMutation.mutateAsync();
            navigate('/login');
        } catch (err) {
            console.log(err);
        }
    };
    return (
        <div className="inline-block p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-200">
            <button onClick={() => setIsModalOpen(!isModalOpen)}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-gray-700"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                </svg>
            </button>

            {isModalOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                    <Link
                        to="/profile"
                        href="#profile"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                        Profile
                    </Link>
                    <a
                        href="#logout"
                        onClick={logoutHandler}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                        Logout
                    </a>
                </div>
            )}
        </div>
    );
};

export default ProfileNav;
