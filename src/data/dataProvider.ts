import { CrudFilters, DataProvider } from "@refinedev/core";
import { stringify } from "query-string";
import axiosInstance from "./utility";
import { mapOperator } from "./mapOperator";

const generateFilters = (filters?: CrudFilters) => {
    const queryFilters: { [key: string]: string } = {};

    filters?.map((filter): void => {
        if ("field" in filter) {
            const { field, operator, value } = filter;
            const mappedOperator = mapOperator(operator);
            queryFilters[`${field}${mappedOperator}`] = value;
        }
    });

    return queryFilters;
};



export const dataProvider = (apiUrl: string): DataProvider => ({
    
    // get the list of all the documents
    getList: async ({ resource, pagination, sorters, filters }) => {
        const url = `${apiUrl}/${resource}`;
        const { current = 1, pageSize = 10 } = pagination ?? {};

        const query: {
            _start?: number;
            _end?: number;
            _sort?: string;
            _order?: string;
        } = {
            _start: (current - 1) * pageSize,
            _end: current * pageSize,
        };

        if (sorters && sorters.length > 0) {
            query._sort = sorters[0].field;
            query._order = sorters[0].order;
        }

        const queryFilters = generateFilters(filters);

        const { data, headers } = await axiosInstance.get(
            `${url}?${stringify(query)}&${stringify(queryFilters)}`
        );

        const total = +headers["x-total-count"];

        return {
            data,
            total,
        };
    },
    
    // create a document
    create: async ({ resource, variables }) => {
        const url = `${apiUrl}/${resource}`;
        const { data } = await axiosInstance.post(url, variables);

        return {
            data,
        };
    },

    // update a document
    update: async ({ resource, id, variables }) => {
        const url = `${apiUrl}/${resource}/${id}`;
        console.log("API URL in update: " + url);
        const { data } = await axiosInstance.patch(url, variables);
        console.log(data)
        return {
            data,
        };
    },

    // Delete a document
    deleteOne: async ({ resource, id, variables }) => {
        const url = `${apiUrl}/${resource}/${id}`;

        const { data } = await axiosInstance.delete(url, {
            data: variables,
        });

        return {
            data,
        };
    },

    // get one document
    getOne: async ({ resource, id }) => {
        const url = `${apiUrl}/${resource}/${id}`;

        const { data } = await axiosInstance.get(url);

        return {
            data,
        };
    },

    // get api url
    getApiUrl: () => apiUrl,

    // get many documents
    getMany: async ({ resource, ids }) => {
        const { data } = await axiosInstance.get(
            `${apiUrl}/${resource}?${stringify({ id: ids })}`,
        );

        return {
            data,
        };
    },

    // create many documents
    createMany: async ({ resource, variables }) => {
        const url = `${apiUrl}/${resource}/bulk`;

        const { data } = await axiosInstance.post(url, { values: variables });

        return {
            data,
        };
    },

    // delete many documents
    deleteMany: async ({ resource, ids }) => {
        const url = `${apiUrl}/${resource}/bulk?ids=${ids.join(",")}`;
        const { data } = await axiosInstance.delete(url);

        return {
            data,
        };
    },

    // update many documents
    updateMany: async ({ resource, ids, variables }) => {
        const url = `${apiUrl}/${resource}/bulk`;
        const { data } = await axiosInstance.patch(url, { ids, variables });

        return {
            data,
        };
    },
});