// store.ts
import { configureStore } from '@reduxjs/toolkit';
import authSlice from "./authSlice";
import videosSlice from './videosSlice';

// configureStore은 여러개의 리듀서를 관리해줌
export const store = configureStore({
    reducer: {
        getAuth: authSlice,
        getVideos: videosSlice
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

