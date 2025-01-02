import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { fetchBlogByCategory} from '../../redux/blogSlice';

function CategoryBlogsPage() {
  const { categoryId } = useParams();
  const dispatch = useDispatch();

  const { blogs, status, error } = useSelector((state) => state.blogs);
  console.log(blogs)

  useEffect(() => {
    dispatch(fetchBlogByCategory(categoryId));
  }, [dispatch, categoryId]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  return (
    <div className="xl:container mx-auto px-6 lg:px-16 px-6 lg:px-16 mx-auto xl:mb-[20rem] lg:mb-[20rem] ] mb-[30rem]  mt-5">
      {/* <h1 className="text-center text-3xl font-bold mb-8">Blogs for Category {categoryId}</h1> */}
      {status === 'loading' && <p>Loading blogs...</p>}
      {status === 'failed' && <p>Error: {error}</p>}
      {status === 'succeeded' && blogs.length === 0 && <p>No blogs found for this category.</p>}
      {status === 'succeeded' && blogs.length > 0 && (
         <div className="grid md:grid-cols-3 sm:grid-cols-1 my-5 py-5 gap-4">
          {blogs.map((blog) => (
            <Link to={`/blogs/${blog.blog_slug}`} onClick={scrollToTop}>
            <div key={blog.blog_id} className="relative max-w-sm bg-white hover:shadow-2xl transition-all duration-300 p-2 rounded-xl">
              <img
                src={blog.blog_feature_image || 'https://via.placeholder.com/150'}
                alt={blog.blog_title}
                className="w-full h-48 object-cover mb-4 rounded-lg"
              />
              <div className="absolute top-0 left-0 bottom-[85%] px-3">
                  <button className="bg-primary text-white rounded-lg px-2 py-2 mt-4">
                    {blog.category_name}
                  </button>
                </div>
                <div className="py-4">
                <p className=" text-h5 font-semibold text-justify leading-6">
                  {blog.blog_title || 'No title available'}
                </p>
                <p className="text-gray-dark text-h5 text-justify leading-6 pt-5">
               {blog.blog_excerpt || 'No title available'}
             </p>
                <i className="fa fa-calendar text-primary py-5" aria-hidden="true"></i><span className='px-2'>{blog.formatted_date || 'No date available'}</span>
                 <Link to={`/blogs/${blog.blog_slug}`} onClick={scrollToTop} key={blog.blog_id} className="px-4">Read More <i className="fa fa-arrow-right px-2" aria-hidden="true"></i></Link>
              </div>
            </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default CategoryBlogsPage;
