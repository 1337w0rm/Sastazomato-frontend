import { SyncLoader } from 'react-spinners';
const Loader = () => {
    return (
        <div
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                zIndex: 9999,
            }}
        >
            <SyncLoader color="#ffffff" size={60} />
        </div>
    );
};

export default Loader;
