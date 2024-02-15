// store.ts
import { configureStore } from '@reduxjs/toolkit';
import authSlice from "./authSlice";

// configureStore은 여러개의 리듀서를 관리해줌
export const store = configureStore({
    reducer: {
        api: authSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;
