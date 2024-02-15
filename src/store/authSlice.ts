import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

interface AuthData {
    avatar: string;
    name: string;
    nickName: string;
    email: string;
    _id: string;
};

export const fetchData = createAsyncThunk<AuthData, void>(
    'data/fetch',
    async () => {
        const token = localStorage.getItem('token')
        const response = await fetch('http://localhost:4000/profile', {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token}`
            }
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data: AuthData = await response.json();
        console.log('data', data)
        return data;
    }
);



interface ApiState {
    data: AuthData | null;
    loading: boolean;
    error: string | null;
    id: string | null;
}

const initialState: ApiState = {
    data: null,
    loading: false,
    error: null,
    id: null,
};
export const apiSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchData.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchData.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Something went wrong';
            });
    },
});

export default apiSlice.reducer;