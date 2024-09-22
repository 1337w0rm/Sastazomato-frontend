import { Link } from 'react-router-dom';
export default function ErrorPage() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="max-w-md w-full px-6 py-8 bg-white shadow-lg rounded-lg text-center">
                <h1 className="text-6xl font-bold text-red-500 mb-4">Oops!</h1>
                <p className="text-2xl font-semibold text-gray-700 mb-6">
                    Something went wrong
                </p>
                <p className="text-gray-600 mb-8">
                    We're sorry, but it seems like we've encountered an
                    unexpected error.
                </p>
                <div className="space-y-4">
                    <Link
                        to="/"
                        className="block w-full bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded transition duration-300 ease-in-out"
                    >
                        Go Back Home
                    </Link>
                </div>
            </div>
        </div>
    );
}
