import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCategories } from '../../redux/categorySlice';
import { fetchPopularPosts, fetchLatestPosts, fetchRelatedPosts   } from '../../redux/postSlice';

function Sidebar({ postId} ) {
  const dispatch = useDispatch();
  const [activeTab, setActiveTab] = useState('recent');

  // Access state from the Redux store
  const { categories, status, error } = useSelector((state) => state.categories);
  const { popularPosts, latestPosts, relatedPosts } = useSelector((state) => state.posts);
  // const relatedPosts = useSelector((state) => state.posts.relatedPosts);
  // const {
  //   popularPosts,
  //   latestPosts,
  //   status: postStatus,
  //   error: postError,
  // } = useSelector((state) => state.posts);

  // Tab Data
  // const posts = activeTab === 'recent' ? latestPosts : popularPosts;

    // Determine which posts to display
    const posts =
    activeTab === 'recent'
      ? latestPosts
      : activeTab === 'popular'
      ? popularPosts
      : relatedPosts;


  // Fetch categories when the component loads
  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchPopularPosts());
    dispatch(fetchLatestPosts());
    if (activeTab === 'related' && postId) {
      dispatch(fetchRelatedPosts(postId));
    }
  }, [dispatch, activeTab, postId]);

  return (
    <>
      <div className="w-96 pt-40  z-50">
        {/* Search Form */}
        <div>
          <form>
            <div className="shadow-md py-8 rounded-xl mb-8 grid grid-cols-12 px-6">
              <input
                type="search"
                placeholder="Search..."
                className="bg-gray-light px-4 py-2 rounded-l-md col-span-8 outline-none xl:col-span-8"
              />
              <button
                type="submit"
                className="bg-primary px-4 py-2 rounded-r-md col-span-4 xl:col-span-4 text-white"
              >
                Search
              </button>
            </div>
          </form>
        </div>

        {/* Sidebar Content */}
        <div className="h-full px-3 py-4 max-w-sm rounded-xl overflow-hidden shadow-lg bg-gray-100 relative">
          <p className="ms-3 text-h3 font-bold text-primary">Category</p>

          {/* Categories */}
          <ul className="space-y-2 font-medium mt-4">
            {status === 'loading' && <p>Loading categories...</p>}
            {status === 'failed' && <p className="text-primary text-justify">{error}</p>}
            {status === 'succeeded' &&
              categories.map((category) => (
                <li key={category.category_id}>
                  <a
                    href={`category-${category.category_id}`}
                    className="flex items-center p-2 rounded-lg hover:bg-gray-200"
                  >
                    <span className="ms-3">{category.category_name}</span>
                  </a>
                </li>
              ))}
          </ul>
        </div>
        <div className="h-full px-3 py-4 max-w-sm rounded-xl overflow-hidden shadow-lg bg-gray-100 relative">
          <div className="flex space-x-4 mb-4">
            <button
              className={`px-4 py-2 rounded-md ${activeTab === 'recent' ? 'bg-primary text-white' : 'bg-primary'
                }`}
              onClick={() => setActiveTab('recent')}
            >
              Recent
            </button>
            <button
              className={`px-4 py-2 rounded-md ${activeTab === 'popular' ? 'bg-primary text-white' : 'bg-primary'
                }`}
              onClick={() => setActiveTab('popular')}
            >
              Popular
            </button>
            <button
              className={`px-4 py-2 rounded-md ${activeTab === 'related' ? 'bg-primary text-white ' : 'bg-primary '
                }`}
              onClick={() => setActiveTab('related')}
            >
              Related
            </button>
          </div>
          <div>
            {status === 'loading' && <p>Loading posts...</p>}
            {error && <p className="text-primary">{error}</p>}

            {posts &&
              posts.map((post) => (
                <div key={post.blog_id} className="flex items-start mb-4">
                  {/* Post Image */}
                  <img
                    src={post.blog_feature_image || 'https://via.placeholder.com/50'}
                    alt={post.blog_title}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  {/* Post Details */}
                  <div>
                    <h3 className="text-h5  mb-1">{post.blog_title}</h3>
                    <p>{new Date(post.blog_date).toLocaleDateString()}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
