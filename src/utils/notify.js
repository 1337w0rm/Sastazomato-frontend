import { toast, Bounce } from 'react-toastify';

const notify = (type, message) => {
    const config = {
        position: 'top-right',
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
        transition: Bounce,
    };

    switch (type) {
        case 'info':
            return toast.info(message, config);
        case 'success':
            return toast.success(message, config);
        case 'warning':
            return toast.warn(message, config);
        case 'error':
            return toast.error(message, config);
    }
};

export default notify;
