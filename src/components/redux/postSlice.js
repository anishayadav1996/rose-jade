import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Fetch popular posts
export const fetchPopularPosts = createAsyncThunk(
  'posts/fetchPopularPosts',
  async () => {
    const response = await axios.get('http://localhost:8080/api/blog/popular'); // Replace with your API endpoint
    return response.data;
  }
);

// Fetch latest posts
export const fetchLatestPosts = createAsyncThunk(
  'posts/fetchLatestPosts',
  async () => {
    const response = await axios.get('http://localhost:8080/api/blog/latestblog'); // Replace with your API endpoint
    return response.data;
  }
);
export const fetchRelatedPosts = createAsyncThunk(
  'posts/fetchRelatedPosts',
  async (postId) => {
    const response = await axios.get(`http://localhost:8080/api/blog/related/${postId}`); // Replace with your API endpoint
    return response.data;
  }
);

const postSlice = createSlice({
  name: 'posts',
  initialState: {
    popularPosts: [],
    latestPosts: [],
    relatedPosts: [],
    status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Popular Posts
      .addCase(fetchPopularPosts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPopularPosts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.popularPosts = action.payload;
      })
      .addCase(fetchPopularPosts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      // Latest Posts
      .addCase(fetchLatestPosts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchLatestPosts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.latestPosts = action.payload;
      })
      .addCase(fetchLatestPosts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
//Related
      .addCase(fetchRelatedPosts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchRelatedPosts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.relatedPosts = action.payload;
      })
      .addCase(fetchRelatedPosts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default postSlice.reducer;
