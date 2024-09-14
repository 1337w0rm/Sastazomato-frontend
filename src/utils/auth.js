import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import notify from './notify';

const login = async (data) => {
    const response = await axios.post('/user/login', data);
    return response.data;
};

const register = async (data) => {
    const response = await axios.post(`/user/register`, data);
    return response.data;
};

const checkAuth = async () => {
    try {
        const response = await axios.get('/user/status');
        return response.data.isAuthenticated;
    } catch (err) {
        return err.response.data.isAuthenticated;
    }
};

const logout = async () => {
    const response = await axios.post('/user/logout', {});
    return response.data;
};

const getProducts = async () => {
    const response = await axios.get('/products');
    return response.data;
};

export const getCart = async () => {
    const response = await axios.get('/cart');
    return response.data;
};

export const useLoginMutation = () => {
    const queryClient = useQueryClient();
    return useMutation(login, {
        onSuccess: (data) => {
            queryClient.setQueryData(['user'], data.user);
            notify('success', data.message);
            queryClient.invalidateQueries({
                queryKey: ['isAuthenticated'],
            });
            queryClient.prefetchQuery({
                queryKey: ['cart'],
                queryFn: getCart,
            });
            queryClient.prefetchQuery({
                queryKey: ['products'],
                queryFn: getProducts,
            });
        },
        onError: (err) => notify('error', err.response.data.error),
    });
};

export const userRegisterMutation = () => {
    return useMutation(register, {
        onSuccess: (data) => notify('success', data.message),
        onError: (err) => notify('error', err.response.data.error),
    });
};

export const userLogoutMutation = () => {
    const queryClient = useQueryClient();
    return useMutation(logout, {
        onSuccess: (data) => {
            notify('success', data.message);
            queryClient.invalidateQueries({ queryKey: ['isAuthenticated'] });
        },
        onError: (err) => notify('error', err.response.data.error),
    });
};

export const useAuthQuery = () => {
    return useQuery({
        queryKey: ['isAuthenticated'],
        queryFn: checkAuth,
        staleTime: 500,
        retry: 0,
    });
};

export const useProductsQuery = () => {
    return useQuery({
        queryKey: ['products'],
        queryFn: getProducts,
        staleTime: 3000,
    });
};

export const useCartQuery = () => {
    return useQuery({
        queryKey: ['cart'],
        queryFn: getCart,
        staleTime: Infinity,
    });
};
