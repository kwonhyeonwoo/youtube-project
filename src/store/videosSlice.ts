import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export interface VideosData {
    videoUrl: string | null;
    title: string | null;
    description: string | null;
    hashtags: [string | null];
    meta: {
        views: number | 0,
    },
    dateTime: string;
    owner: {
        avatar: string;
        email: string;
        name: string;
        nickName: string;
    }
    _id: string;
}

export const videosData = createAsyncThunk<VideosData[], void>(
    'videos/fetch',
    async () => {
        const response = await fetch('http://localhost:4000/video');
        const data = await response.json();
        console.log('videos', data);
        return data;
    }
);

interface VideoState {
    data: VideosData[] | null;
    loading: boolean;
    error: string | null;
};

const initialState: VideoState = {
    data: null,
    loading: false,
    error: null,
}
export const videosSlice = createSlice({
    name: "videos",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(videosData.pending, (state) => {
                state.loading = true
            })
            .addCase(videosData.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload
            })
            .addCase(videosData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'error '
            })
    }
});

export default videosSlice.reducer