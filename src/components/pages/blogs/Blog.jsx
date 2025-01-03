import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBlogs } from '../../redux/blogSlice';
import ReactPaginate from 'react-paginate';
import { Link } from 'react-router-dom';

export default function Blog() {
  const dispatch = useDispatch();
  const { blogs, status, error } = useSelector((state) => state.blogs);

  // Pagination State
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 12;

  useEffect(() => {
    dispatch(fetchBlogs());
  }, [dispatch]);

  // Logic to calculate current page items
  const offset = currentPage * itemsPerPage;
  const currentItems = blogs.slice(offset, offset + itemsPerPage);
  const pageCount = Math.ceil(blogs.length / itemsPerPage);

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <div className="py-4 mt-5 ">
      <div className="text-center">
      </div>

      {/* Loading and Error States */}
      {status === 'loading' && <p>Loading...</p>}
      {status === 'failed' && <p>Error: {error}</p>}
      {blogs.length === 0 && status === 'succeeded' && (
        <p>No blogs available at the moment.</p>
      )}

      {/* Blog Cards */}
      <div className="grid md:grid-cols-2 sm:grid-cols-1 my-5 py-5 gap-4">
        {currentItems.map((item) => (
          <Link to={`/blogs/${item.blog_slug}`} onClick={scrollToTop} key={item.blog_id}>
            <div
              className="max-w-sm bg-white hover:shadow-2xl transition-all duration-300 p-2 rounded-xl"
              key={item.blog_id}
            >
              <div className="relative">
                <img
                  className="w-full rounded-lg"
                  src={item.blog_feature_image || 'src/assets/img/default.jpg'}
                  alt={item.blog_title}
                />
                <div className="absolute top-0 left-0 bottom-[85%] px-3">
                  <button className="bg-primary text-white rounded-lg px-2 py-2 mt-4">
                    {item.category_name}
                  </button>
                </div>
              </div>
              <div className="py-4">
                <p className=" text-h5 font-semibold text-justify leading-6">
                  {item.blog_title || 'No title available'}
                </p>
                <p className="text-gray-dark text-h5 text-justify leading-6 pt-5">
                  {item.blog_excerpt || 'No title available'}
                </p>
                <i className="fa fa-calendar text-primary py-5" aria-hidden="true"></i><span className='px-2'>{item.formatted_date || 'No date available'}</span>
                <Link to={`/blogs/${item.blog_slug}`} onClick={scrollToTop} key={item.blog_id} className="px-4">Read More <i className="fa fa-arrow-right px-2" aria-hidden="true"></i></Link>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-4">
        <ReactPaginate
          previousLabel={'Previous'}
          nextLabel={'Next'}
          breakLabel={'...'}
          pageCount={pageCount}
          marginPagesDisplayed={1}
          pageRangeDisplayed={window.innerWidth < 640 ? 1 : window.innerWidth < 1024 ? 2 : 3}  // Adjust based on screen size
          onPageChange={handlePageClick}
          onClick={scrollToTop}
          containerClassName={
            'pagination flex flex-wrap justify-center space-x-2 sm:space-x-4'
          }
          activeClassName={
            'bg-primary text-white px-3 py-1 border border-primary rounded'
          }
          pageClassName={
            'border border-primary px-3 py-1 rounded cursor-pointer hover:bg-primary hover:text-white text-sm sm:text-base'
          }
          previousClassName={
            'border border-primary px-3 py-1 rounded cursor-pointer hover:bg-primary hover:text-white text-sm sm:text-base'
          }
          nextClassName={
            'border border-primary px-3 py-1 rounded cursor-pointer hover:bg-primary hover:text-white text-sm sm:text-base'
          }
          breakClassName={
            'border border-primary px-3 py-1 rounded text-sm sm:text-base'
          }
        />
      </div>


    </div>
  );
}