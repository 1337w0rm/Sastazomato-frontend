import {
    useState,
    createContext,
    useContext,
    useEffect,
    useReducer,
} from 'react';
const Context = createContext();
import axios from 'axios';
import { useAuthQuery } from '../utils/auth';

const ContextProvider = ({ children }) => {
    const [loader, setLoader] = useState(false);
    axios.defaults.baseURL = import.meta.env.VITE_API_URL;
    axios.defaults.withCredentials = true;
    useAuthQuery();
    return (
        <Context.Provider value={{ loader, setLoader }}>
            {children}
        </Context.Provider>
    );
};

export const contextStore = () => useContext(Context);

export default ContextProvider;
