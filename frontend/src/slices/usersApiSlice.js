import { USERS_URL_URL } from "../constants";
import { apiSlice } from './apiSlice';

export const usersApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (data) => ({
                url: USER_URL / auth,
                method: 'POST',
                body: data,
            }),
        }),

    }),

});

export const { useLoginMutation } = usersApiSliceApiSlice;