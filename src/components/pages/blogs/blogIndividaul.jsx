
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getIndividualBlog } from '../../redux/blogSlice';
import Sidebar from './Sidebar'
import { useParams } from 'react-router-dom';

export default function BlogIndividaul() {
    const dispatch = useDispatch();
    const { blogSlug } = useParams()
    const [blog, setBlog] = useState(null);
    const { blogs, status, error } = useSelector((state) => state.blogs);

    console.log(blog)

    useEffect(() => {
        dispatch(getIndividualBlog(blogSlug));
    }, [dispatch], blogSlug);

    useEffect(() => {
        if (blogs && blogs.length > 0) {
            setBlog(blogs[0]); // Assuming Redux stores the individual blog as the first item
        }
    }, [blogs]);

    return (
        <div>
            {/* Loading and Error States */}
            {status === 'loading' && <p>Loading...</p>}
            {status === 'failed' && <p>Error: {error}</p>}
            {!blog && status === 'succeeded' && (
                <p>No blog data available at the moment.</p>
            )}
            <div className='xl:container mx-auto px-6 lg:px-16'>
                <div className='grid grid-cols-12  gap-12'>

                    <div className='xl:col-span-8 col-span-12 py-40 mb-20'>
                        {blog && (
                            <div className="">

                                <img src={blog?.blog_feature_image} alt="Featured Image" className="w-full  object-cover rounded" />
                                <div className='flex space-x-4 py-6 font-bold'>
                                <p className=' '>{blog?.category_name
                                }</p>
                                 <p className=' '>{blog?.formatted_date
                                }</p>
                                 <p className=' '>{blog?.blog_timestamp
                                }</p>
                                </div>
                               
                                <div
                                    className=" mb-4"
                                    dangerouslySetInnerHTML={{ __html: blog?.blog_content }}
                                ></div>

                            </div>
                        )}
                    </div>
                    <div className='xl:col-span-4 col-span-12 border-primary xl:mb-32'>
                        <Sidebar />
                    </div>
                </div>
            </div>
        </div>
    )
}
