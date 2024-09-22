import axios from 'axios';
import notify from './notify';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const addToCart = async (id) => {
    try {
        const response = await axios.post('/cart/add', { id });
        const message = response.data.message;
        notify('success', message);
    } catch (err) {
        const message = err.response.data.error;
        notify('error', message);
    }
};

const deleteCartItem = async (id) => {
    try {
        const response = await axios.delete(`/cart/delete/${id}`);
        const message = response.data.message;
        notify('success', message);
    } catch (err) {
        const message = err.response.data.error;
        notify('error', message);
    }
};

const updateCartQuantitiy = async ({ id, quantity }) => {
    try {
        const response = await axios.patch(`/cart/update/${id}`, { quantity });
        const message = response.data.message;
        notify('success', message);
    } catch (err) {
        const message = err.response.data.error;
        notify('error', message);
    }
};

export const useAddToCartMutation = (id) => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (id) => addToCart(id),
        onSuccess: () => {
            queryClient.invalidateQueries('cart');
        },
    });
};

export const useDeleteFromCartMutation = (id) => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (id) => deleteCartItem(id),
        onSuccess: () => {
            queryClient.invalidateQueries('cart');
        },
    });
};

export const useCartQuantityUpdateMutation = (id, quantity) => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (id, quantity) => updateCartQuantitiy(id, quantity),
        onSuccess: () => {
            queryClient.invalidateQueries(['cart']);
        },
    });
};
