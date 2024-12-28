
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getIndividualBlog } from '../../redux/blogSlice';
import Sidebar from './Sidebar'
import { useParams } from 'react-router-dom';
//  import readingTime from "reading-time";

export default function BlogIndividaul({ content }) {
    const dispatch = useDispatch();
    const [readingTime, setReadingTime] = useState(0);
    const { blogSlug } = useParams()
    const [blog, setBlog] = useState(null);
    const { blogs, status, error } = useSelector((state) => state.blogs);

    // console.log(blog)

    useEffect(() => {
        dispatch(getIndividualBlog(blogSlug));
    }, [dispatch], blogSlug);

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
    return (
        <div>
            {/* Loading and Error States */}
            {status === 'loading' && <p>Loading...</p>}
            {status === 'failed' && <p>Error: {error}</p>}
            {!blog && status === 'succeeded' && (
                <p>No blog data available at the moment.</p>
            )}
            <div className='md:container mx-auto px-6 lg:px-16 px-6 lg:px-16 mx-auto xl:mb-[20rem] lg:mb-[20rem] ] mb-[30rem]  mt-5'>
                <div className='grid grid-cols-12  gap-12'>

                    <div className='md:col-span-8 col-span-12 py-5 mb-5'>
                        {blog && (
                            <div className="">

                                <img src={blog?.blog_feature_image} alt="Featured Image" className="w-full h-96 object-cover rounded-lg" />
                                {/* <div className='flex space-x-4 py-6 font-bold'> */}
                                <div className="flex items-center space-x-4 xl:space-x-48 text-sm font-medium py-3">
                                    <div className="flex items-center space-x-2">
                                        <i className="fa fa-file text-primary" aria-hidden="true"></i> <span>{blog?.category_name
                                        }</span>
                                    </div>


                                    <div className="flex items-center space-x-2">

                                        <i className="fa fa-calendar text-primary" aria-hidden="true"></i> <span>{blog?.formatted_date}</span>
                                    </div>

                                    <div className="flex items-center space-x-2">

                                        <i className="fa-solid fa-clock text-primary"></i><span>Reading Time: {readingTime} minutes</span>
                                    </div>
                                </div>

                                <div
                                    className=" mb-4"
                                    dangerouslySetInnerHTML={{ __html: blog?.blog_content }}
                                ></div>

                            </div>
                        )}
                    </div>
                    <div className='md:col-span-4 col-span-12 border-primary xl:mb-32'>
                        <Sidebar />
                    </div>

                </div>
                <div className="grid grid-cols-12 ">
                    <div className="col-span-8">
                        {blog && blog.blog_tag && (
                            <div className="flex flex-wrap gap-2 mt-6 text-p font-bold">
                                {blog.blog_tag.split(',').map((tag, index) => (
                                    <div
                                        key={index}
                                        className="bg-secondary text-white text-p px-4 py-2 rounded-md lowercase"
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
    )
}
