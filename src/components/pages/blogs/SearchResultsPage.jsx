import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function SearchResultsPage() {
  const { searchResults, status, error } = useSelector((state) => state.blogs);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  return (
    <div className="md:container mx-auto px-6 lg:px-16 px-6 lg:px-16 mx-auto xl:mb-[20rem] lg:mb-[20rem] ] mb-[30rem]  mt-5">
      {/* <h1 className="text-center text-3xl font-bold mb-8">Search Results</h1> */}
      {status === 'loading' && <p>Loading...</p>}
      {status === 'failed' && <p>Error: {error}</p>}
      {status === 'succeeded' && searchResults.length === 0 && (
        <p>No blogs found for the search query.</p>
      )}
      {status === 'succeeded' && searchResults.length > 0 && (
        <div className="grid md:grid-cols-3 gap-6">
          {searchResults.map((blog) => (
            <Link to={`/blogs/${blog.blog_slug}`} onClick={scrollToTop}>
            <div key={blog.blog_id} className="max-w-sm bg-white hover:shadow-2xl transition-all duration-300 p-2 rounded-xl">
              <img
                src={blog.blog_feature_image || 'https://via.placeholder.com/150'}
                alt={blog.blog_title}
                className="w-full h-48 object-cover mb-4 rounded-lg"
              />
              <h2 className="text-xl font-bold mb-2">{blog.blog_title}</h2>
            </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchResultsPage;
