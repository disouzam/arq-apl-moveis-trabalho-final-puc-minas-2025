import {useApi } from '..';

export function useProductionOrdersService() {
    const { get } = useApi();
    const baseApi = "productionOrders";

    const getProductionOrders = async () => {
        debugger;

        const { data } = await get(`${baseApi}`);

        return data;
    };

    return {
        getProductionOrders
    };
}