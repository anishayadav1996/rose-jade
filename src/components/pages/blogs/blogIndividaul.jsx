import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getIndividualBlog, fetchBlogByTag } from '../../redux/blogSlice';
import Sidebar from './Sidebar';
import { useParams, useNavigate } from 'react-router-dom';

export default function BlogIndividual() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [readingTime, setReadingTime] = useState(0);
    const { blogSlug } = useParams();
    const [blog, setBlog] = useState(null);
    const { blogs, status, error } = useSelector((state) => state.blogs);

    useEffect(() => {
        dispatch(getIndividualBlog(blogSlug));
    }, [dispatch, blogSlug]);

    useEffect(() => {
        if (blogs && blogs.length > 0) {
            setBlog(blogs[0]);
        }
    }, [blogs]);

    useEffect(() => {
        if (blog?.blog_content) {
            const wordsPerMinute = 200;
            const words = blog.blog_content.replace(/<\/?[^>]+(>|$)/g, "").trim().split(/\s+/).length;
            const minutes = Math.ceil(words / wordsPerMinute);
            setReadingTime(minutes);
        }
    }, [blog]);

    const handleTagClick = (tag) => {
        dispatch(fetchBlogByTag(tag));
        navigate(`/blogs/tag/${tag}`);
    };

    return (
        <div className=''>
            {status === 'loading' && <p>Loading...</p>}
            {status === 'failed' && <p>Error: {error}</p>}
            {!blog && status === 'succeeded' && (
                <p>No blog data available at the moment.</p>
            )}
            <div className="xl:container mx-auto px-6 lg:px-16 px-6 lg:px-16 mx-auto xl:mb-[20rem] lg:mb-[20rem] ] mb-[30rem]  mt-5">
                <div className='grid grid-cols-12 gap-12'>
                    <div className='md:col-span-8 col-span-12 py-5 mb-5'>
                        {blog && (
                            <div>
                                <img src={blog?.blog_feature_image} alt="Featured Image" className="w-full h-96 object-cover rounded-lg" />
                                <div className="flex items-center space-x-4 xl:space-x-48 text-sm font-medium py-3">
                                <div className="flex items-center space-x-2">
                                <i className="fa fa-file text-primary" aria-hidden="true"></i> <span>{blog?.category_name}</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <i className="fa fa-calendar text-primary" aria-hidden="true"></i> <span>{blog?.formatted_date}</span>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                    <i className="fa-solid fa-clock text-primary"></i> <span>Reading Time: {readingTime} minutes</span>
                                    </div>
                                </div>
                                <div className="mb-4" dangerouslySetInnerHTML={{ __html: blog?.blog_content }}></div>
                            </div>
                        )}
                    </div>
                    <div className='md:col-span-4 col-span-12 border-primary'>
                        <Sidebar />
                    </div>
                </div>
                <div className="grid grid-cols-12 mt-6">
                    <div className="col-span-8">
                        {blog && blog.blog_tag && (
                            <div className="flex flex-wrap gap-2 font-bold">
                                {blog.blog_tag.split(',').map((tag, index) => (
                                    <div
                                        key={index}
                                        onClick={() => handleTagClick(tag.trim())}
                                        className="bg-secondary text-white px-4 py-2 rounded-md cursor-pointer"
                                    >
                                        {tag.trim()}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
