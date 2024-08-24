const Search = ({ searchTerm, setSearchTerm }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="relative isolate overflow-hidden bg-white px-6 py-20 text-center sm:px-16">
                <p className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    Find your favourite food with SastaZomato.
                </p>

                <form action="" onSubmit={handleSubmit}>
                    <label
                        className="mx-auto mt-8 relative bg-white min-w-sm max-w-2xl flex flex-col md:flex-row items-center justify-center border py-2 px-2 rounded-2xl gap-2 shadow-2xl focus-within:border-gray-300"
                        htmlFor="search-bar"
                    >
                        <input
                            id="search-bar"
                            placeholder="Search your favourite food..."
                            name="q"
                            className="px-6 py-2 w-full rounded-md flex-1 outline-none bg-white"
                            required=""
                            value={searchTerm}
                            onChange={(event) =>
                                setSearchTerm(event.target.value)
                            }
                        />
                    </label>
                </form>

                <svg
                    viewBox="0 0 1024 1024"
                    className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
                    aria-hidden="true"
                >
                    <circle
                        cx="512"
                        cy="512"
                        r="512"
                        fill="url(#827591b1-ce8c-4110-b064-7cb85a0b1217)"
                        fillOpacity="0.7"
                    ></circle>
                    <defs>
                        <radialGradient id="827591b1-ce8c-4110-b064-7cb85a0b1217">
                            <stop stopColor="#3b82f6"></stop>
                            <stop offset="1" stopColor="#1d4ed8"></stop>
                        </radialGradient>
                    </defs>
                </svg>
            </div>
        </div>
    );
};

export default Search;
