// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import blogReducer from './blogSlice';
import categoryReducer from './categorySlice';
import postReducer from './postSlice';

const store = configureStore({
  reducer: {
    blogs: blogReducer,
    categories: categoryReducer,
    posts: postReducer, 
  },
});

export default store;
