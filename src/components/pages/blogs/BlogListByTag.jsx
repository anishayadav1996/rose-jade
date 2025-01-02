import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBlogByTag } from '../../redux/blogSlice';
import { Link } from 'react-router-dom';

function BlogListByTag({ tag, currentBlogId }) {
    const dispatch = useDispatch();
    const { blogs, status, error } = useSelector((state) => state.blogs);
    console.log(blogs);

    useEffect(() => {
        if (tag) {
            dispatch(fetchBlogByTag({ tag, blogId: currentBlogId }));
        }
    }, [dispatch, tag, currentBlogId]);
    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }

    return (
        <div className='xl:container mx-auto px-6 lg:px-16 px-6 lg:px-16 mx-auto xl:mb-[20rem] lg:mb-[20rem] ] mb-[30rem]  mt-5'>
        {status === 'loading' && <p>Loading related blogs...</p>}
        {status === 'failed' && <p>Error: {error}</p>}
        {status === 'succeeded' && blogs.length === 0 && (
            <p>No related blogs found for this tag.</p>
        )}
        <div className="grid md:grid-cols-3 sm:grid-cols-1 my-5 py-5 gap-4">
        {status === 'succeeded' && blogs.map((blog) => (
         <Link to={`/blogs/${blog.blog_slug}`} onClick={scrollToTop} key={blog.blog_id}>
         <div
           className="max-w-sm bg-white hover:shadow-2xl transition-all duration-300 p-2 rounded-xl"
           key={blog.blog_id}
         >
           <div className="relative">
             <img
               className="w-full rounded-lg"
               src={blog.blog_feature_image || 'src/assets/img/default.jpg'}
               alt={blog.blog_title}
             />
             <div className="absolute top-0 left-0 bottom-[85%] px-3">
               <button className="bg-primary text-white rounded-lg px-2 py-2 mt-4">
                 {blog.category_name}
               </button>
             </div>
           </div>
           <div className="py-4">
             <p className=" text-h5 font-semibold text-justify leading-6">
               {blog.blog_title || 'No title available'}
             </p>
             <p className="text-gray-dark text-h5 text-justify leading-6 pt-5">
               {blog.blog_excerpt || 'No title available'}
             </p>
             <i className="fa fa-calendar text-primary py-5" aria-hidden="true"></i><span className='px-2'>{blog.formatted_date || 'No date available'}</span>
              <Link to={`/blogs/${blog.blog_slug}`} onClick={scrollToTop} key={blog.blog_id} className="px-4">Read More<i className="fa fa-arrow-right px-2" aria-hidden="true"></i></Link>
           </div>
         </div>
       </Link>
        ))}
    </div>
    </div>
    );
}

export default BlogListByTag;
