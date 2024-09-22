import axios from 'axios';
import notify from './notify';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

const placeOrder = async () => {
    try {
        const response = await axios.post('/order/neworder', {});
        return response.data;
    } catch (error) {
        notify('error', error.response.data.message);
    }
};

const getOrders = async () => {
    try {
        const response = await axios.get('/order');
        return response.data;
    } catch (error) {
        notify('error', error.response.data.message);
    }
};

export const usePlacedOrderMutation = () => {
    const queryClient = useQueryClient();
    return useMutation(placeOrder, {
        onSuccess: (data) => {
            queryClient.setQueryData(['lastOrder'], () => data.order);
        },
    });
};

export const useGetOrderQuery = () => {
    return useQuery({
        queryKey: ['orders'],
        queryFn: getOrders,
        staleTime: 0,
    });
};
