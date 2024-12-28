import React from 'react';
import { useSelector } from 'react-redux';

function SearchResultsPage() {
  const { searchResults, status, error } = useSelector((state) => state.blogs);

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-center text-3xl font-bold mb-8">Search Results</h1>
      {status === 'loading' && <p>Loading...</p>}
      {status === 'failed' && <p>Error: {error}</p>}
      {status === 'succeeded' && searchResults.length === 0 && (
        <p>No blogs found for the search query.</p>
      )}
      {status === 'succeeded' && searchResults.length > 0 && (
        <div className="grid md:grid-cols-3 gap-6">
          {searchResults.map((blog) => (
            <div key={blog.blog_id} className="border p-4 rounded-lg shadow-md">
              <img
                src={blog.blog_feature_image || 'https://via.placeholder.com/150'}
                alt={blog.blog_title}
                className="w-full h-48 object-cover mb-4 rounded-lg"
              />
              <h2 className="text-xl font-bold mb-2">{blog.blog_title}</h2>
              <p className="text-gray-600">{blog.blog_excerpt}</p>
              <a href={`/blogs/${blog.blog_slug}`} className="text-blue-500 hover:underline">
                Read More
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchResultsPage;
