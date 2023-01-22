import {configureStore} from "@reduxjs/toolkit";
import {postApi} from './postApi'
import postListReducer from './slice/postList'


export const store = configureStore({
    reducer: {
        postList: postListReducer,
        [postApi.reducerPath]: postApi.reducer,
    },

    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(postApi.middleware),

});
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
