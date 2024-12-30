import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Fetch popular posts
// export const fetchPopularBlogs = createAsyncThunk(
//   'blogs/fetchPopularBlogs',
//   async () => {
//     const response = await axios.get('http://localhost:8080/api/blogs/popular');
//     return response.data;
//   }
// );

// Fetch latest posts
export const fetchLatestPosts = createAsyncThunk(
  'posts/fetchLatestPosts',
  async () => {
    const response = await axios.get('http://localhost:8080/api/blog/latestblog'); 
    return response.data;
  }
);
// export const fetchRelatedBlogs = createAsyncThunk(
//   'blogs/fetchRelatedBlogs',
//   async (postId) => {
//     const response = await axios.get(`http://localhost:8080/api/blogs/related/${postId}`);
//     return response.data;
//   }
// );

const postSlice = createSlice({
  name: 'posts',
  initialState: {
   // popularPosts: [],
    latestPosts: [],
   // relatedPosts: [],
    status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Popular Posts
      // .addCase(fetchPopularBlogs.pending, (state) => {
      //   state.status = 'loading';
      // })
      // .addCase(fetchPopularBlogs.fulfilled, (state, action) => {
      //   state.status = 'succeeded';
      //   state.popularPosts = action.payload;
      // })
      // .addCase(fetchPopularBlogs.rejected, (state, action) => {
      //   state.status = 'failed';
      //   state.error = action.error.message;
      // })
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
      // .addCase(fetchRelatedBlogs.pending, (state) => {
      //   state.status = 'loading';
      // })
      // .addCase(fetchRelatedBlogs.fulfilled, (state, action) => {
      //   state.status = 'succeeded';
      //   state.relatedPosts = action.payload;
      // })
      // .addCase(fetchRelatedBlogs.rejected, (state, action) => {
      //   state.status = 'failed';
      //   state.error = action.error.message;
      // });
  },
});

export default postSlice.reducer;
