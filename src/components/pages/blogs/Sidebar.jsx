import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCategories } from '../../redux/categorySlice';
import { useNavigate } from 'react-router-dom';
import { fetchLatestPosts } from '../../redux/postSlice';
import { fetchBlogByCategory } from '../../redux/blogSlice';


function Sidebar({ postId }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [categoryInput, setCategoryInput] = useState('');
  const [activeTab, setActiveTab] = useState('recent');
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Access state from the Redux store
  const { categories, status: categoryStatus, error: categoryError } = useSelector(
    (state) => state.categories
  );
  const { latestPosts, popularBlogs, relatedBlogs, status: postStatus, error: postError } = useSelector((state) => state.posts);
  const { categoryBlogs, status: blogStatus, error: blogError } = useSelector((state) => state.blogs);


  // Determine which posts to display
  // const posts = selectedCategory
  // ? categoryBlogs
  // : activeTab === 'recent'
  // ? latestPosts
  // : [];

  const posts =
  activeTab === 'recent'
    ? latestPosts
    : activeTab === 'popular'
    ? popularBlogs
    : activeTab === 'related'
    ? relatedBlogs
    : selectedCategory
    ? categoryBlogs
    : [];

  // Fetch categories and posts when the component loads
  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchLatestPosts());
   // dispatch(fetchPopularBlogs());
  }, [dispatch]);

  // useEffect(() => {
  //   if (activeTab === 'related' && postId) {
  //    dispatch(fetchRelatedBlogs(postId));
  //   }
  // }, [dispatch, activeTab, postId]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSearch = (e) => {
    e.preventDefault();

    if (categoryInput.trim()) {
      const selectedCategory = categories.find(
        (cat) => cat.category_name.toLowerCase() === categoryInput.trim().toLowerCase()
      );

      if (selectedCategory) {
        setSelectedCategory(selectedCategory.category_id);
        dispatch(fetchBlogByCategory(selectedCategory.category_id));
        navigate(`/blogs/category/${selectedCategory.category_id}`);
      } else {
        alert('Category not found.');
      }
    } else {
      alert('Please input a valid category name.');
    }
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category.category_id); // Set selected category
    dispatch(fetchBlogByCategory(category.category_id)); // Fetch blogs by category
    console.log(handleCategoryClick);
    navigate(`/blogs/category/${category.category_id}`); // Navigate to category page
  };


  return (
    <div className="w-96 mt-20 z-50">
      {/* Search Form */}
      <div>
        <form onSubmit={handleSearch}>
          <div className="shadow-md py-8 rounded-xl mb-8 grid grid-cols-12 px-6">
            <input
              type="search"
              placeholder="Search..."
              value={categoryInput}
              onChange={(e) => setCategoryInput(e.target.value)}
              className="bg-gray-light px-4 py-2 rounded-l-md col-span-8 outline-none"
            />
            <button
              type="submit"
              className="bg-primary px-4 py-2 rounded-r-md col-span-4 text-white"
            >
              Search
            </button>
          </div>
        </form>
      </div>

      {/* Categories */}
      <div className="h-full px-3 py-4 max-w-sm rounded-xl overflow-hidden shadow-lg bg-gray-100">
        <p className="ms-3 text-h3 font-bold text-primary">Category</p>
        <ul className="space-y-2 font-medium mt-4">
        {categoryStatus === 'loading' && <p>Loading categories...</p>}
          {categoryStatus === 'failed' && <p className="text-primary">{categoryError}</p>}
          {categoryStatus === 'succeeded' &&
            categories.map((category) => (
              <li key={category.category_id}>
                <button
                  onClick={() => handleCategoryClick(category)}
                  className="flex items-center p-2 rounded-lg"
                >
                  <p onClick={scrollToTop}>{category.category_name}</p>
                </button>
              </li>
            ))}
        </ul>
      </div>

      {/* Posts */}
      <div className="h-full px-3 py-4 max-w-sm rounded-xl overflow-hidden shadow-lg bg-gray-100">
        <div className="flex space-x-4 mb-4">
          <button
            className={`px-4 py-2 rounded-md ${
              activeTab === 'recent' ? 'bg-primary text-white' : 'bg-primary'
            }`}
            onClick={() => setActiveTab('recent')}
          >
            Recent
          </button>
          {/* <button
            className={`px-4 py-2 rounded-md ${
              activeTab === 'popular' ? 'bg-primary text-white' : 'bg-primary'
            }`}
            onClick={() => setActiveTab('popular')}
          >
            Popular
          </button>
          <button
            className={`px-4 py-2 rounded-md ${
              activeTab === 'related' ? 'bg-primary text-white' : 'bg-primary'
            }`}
            onClick={() => setActiveTab('related')}
          >
            Related
          </button> */}
        </div>
        <div>
        {postStatus === 'loading' && <p>Loading posts...</p>}
          {postError && <p className="text-primary">{postError}</p>}
          {Array.isArray(posts) && posts.length === 0 && <p>No posts available.</p>}
          {Array.isArray(posts) &&
            posts.map((post) => (
              <div key={post.blog_id} className="flex items-start mb-4">
                <img
                  src={post.blog_feature_image || 'https://via.placeholder.com/50'}
                  alt={post.blog_title}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <a href={`/blogs/${post.blog_slug}`} onClick={scrollToTop}>
                    <h3 className="text-h5 mb-1">{post.blog_title}</h3>
                  </a>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
