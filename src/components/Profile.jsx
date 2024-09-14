import { Link } from 'react-router-dom';
import { useAuthQuery } from '../utils/auth';
import { useState } from 'react';
import ProfileUpdateModal from './ProfileUpdateModal';
const ProfilePage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
    const { data } = useAuthQuery();
    const user = data.user;
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="max-w-12xl mx-auto">
                <Link
                    to="/"
                    className="flex items-center text-blue-600 hover:text-blue-800 mb-6 transition duration-300 ease-in-out"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-2"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            fillRule="evenodd"
                            d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                            clipRule="evenodd"
                        />
                    </svg>
                    Back to Home
                </Link>
                <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                    {/* Header */}
                    <div className="bg-gradient-to-r from-black to-red-500 p-6 text-white">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <div className="w-24 h-24 bg-white rounded-full border-4 border-white overflow-hidden">
                                    <img
                                        src="/api/placeholder/150/150"
                                        alt="Profile"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="ml-6">
                                    <h1 className="text-3xl font-bold">
                                        {user.name || 'No Name Provided'}
                                    </h1>
                                    <p className="text-sm opacity-75">
                                        @{user.username}
                                    </p>
                                </div>
                            </div>
                            <button
                                onClick={openModal}
                                className="relative top-4 right-4 bg-white text-orange-500 p-2 rounded-full hover:bg-orange-100 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-300"
                                aria-label="Edit profile"
                            >
                                Update Profile
                            </button>
                        </div>
                    </div>

                    {/* Profile Content */}
                    <div className="p-6">
                        {/* User Info */}
                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold mb-4">
                                Personal Information
                            </h2>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <p className="text-sm text-gray-600">
                                        Email
                                    </p>
                                    <p className="font-medium">
                                        {user.email || 'Email not provided'}
                                    </p>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-600">
                                        Phone
                                    </p>
                                    <p className="font-medium">
                                        {user.phone ||
                                            'Phone number not provided'}
                                    </p>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-600">
                                        Address
                                    </p>
                                    <p className="font-medium">
                                        {user.address || 'Address not saved'}
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Order History */}
                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold mb-4">
                                Recent Orders
                            </h2>
                            <div className="space-y-4">
                                {[1, 2, 3].map((order) => (
                                    <div
                                        key={order}
                                        className="border rounded-lg p-4 flex justify-between items-center"
                                    >
                                        <div>
                                            <p className="font-medium">
                                                Order #{1000 + order}
                                            </p>
                                            <p className="text-sm text-gray-600">
                                                2 items • $24.99
                                            </p>
                                        </div>
                                        <span className="text-sm text-green-600 font-medium">
                                            Delivered
                                        </span>
                                    </div>
                                ))}
                            </div>
                            <button className="mt-4 text-orange-500 font-medium hover:underline">
                                View all orders
                            </button>
                        </section>
                        <ProfileUpdateModal
                            isOpen={isModalOpen}
                            onClose={closeModal}
                            currentUser={user}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;
