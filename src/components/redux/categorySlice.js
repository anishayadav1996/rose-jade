import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async thunk to fetch categories
export const fetchCategories = createAsyncThunk(
  'categories/fetchCategories',
  async () => {
    const response = await axios.get('http://localhost:8080/api/blog/fetchcategory'); 
    return response.data; 
  }
);

// export const fetchBlogByCategory = createAsyncThunk(
//   'blogs/fetchblogByCategory',
//   async (categoryId, { rejectWithValue }) => {
//     try {
//       const response = await axios.get(`http://localhost:8080/api/blog/category/${categoryId}`);
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error.response?.data || 'Failed to fetch category blogs');
//     }
//   }
// );


// Slice for categories
const categorySlice = createSlice({
  name: 'categories',
  initialState: {
    categories: [],
  //  categoryBlogs: [],
    status: 'idle', 
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.categories = action.payload; // 
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      // .addCase(fetchBlogByCategory.pending, (state) => {
      //   state.status = 'loading';
      // })
      // .addCase(fetchBlogByCategory.fulfilled, (state, action) => {
      //   state.status = 'succeeded';
      //   state.categoryBlogs = action.payload; // Store category-specific blogs
      // })
      // .addCase(fetchBlogByCategory.rejected, (state, action) => {
      //   state.status = 'failed';
      //   state.error = action.error.message;
      // });

  },
});

export default categorySlice.reducer;
