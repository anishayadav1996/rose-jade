
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
export const fetchBlogs = createAsyncThunk('/blog/fetchBlog', async () => {
  const response = await axios.get('http://localhost:8080/api/blog/fetchblog'); 
  console.log(response)
  return response.data;
});


// Thunk for fetching an individual blog
export const getIndividualBlog = createAsyncThunk(
  'blog/fetchIndividualBlog',
  async (blogSlug) => { // Accept `blogSlug` as an argument
    const response = await axios.get(`http://localhost:8080/api/blog/individualBlog/${blogSlug}`);
    return response.data;
  }
);



const blogSlice = createSlice({
  name: 'blogs',
  initialState: {
    blogs: [],
    status: 'idle', 
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlogs.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchBlogs.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.blogs = action.payload;
      })
      .addCase(fetchBlogs.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(getIndividualBlog.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getIndividualBlog.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.blogs = action.payload; // Store the fetched blog in the state
      })
      .addCase(getIndividualBlog.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default blogSlice.reducer;
