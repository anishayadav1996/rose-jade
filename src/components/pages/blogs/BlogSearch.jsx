import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useLocation } from 'react-router-dom';
import slugify from 'slugify';
import { serverUrl } from '../../common/ServerUrl';

const BlogSearch = () => {
    const [filteredBlogs, setFilteredBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const location = useLocation();
    const searched = location?.search;
    const searchTerm = searched ? decodeURIComponent(searched.split('=')[1]) : '';

    useEffect(() => {
        const fetchBlogs = async () => {
            setLoading(true);
            try {
                const response = await axios.get(`${serverUrl } / blog / fetchblog`);
                let filteredData = response.data;
                if (searchTerm) {
                    filteredData = response.data.filter(item => {
                        return Object.values(item).some(value =>
                            typeof value === 'string' && value.toLowerCase().includes(searchTerm.toLowerCase())
                        );
                    });
                }
                setFilteredBlogs(filteredData);
            } catch (error) {
                console.error('Error fetching data:', error);
                setFilteredBlogs([]);
            } finally {
                setLoading(false);
            }
        };

        fetchBlogs();
    }, [searchTerm]);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };



    return (
        <div className='py-12'>
            <div className='container mx-auto py-12'>
                <h2 className="text-fs4 md:text-fs2 text-orange font-bold px-3 py-12">
                    Blogs
                </h2>
                {loading ? (
                    <div className="flex justify-center items-center h-96">
                        <img src="https://difm.s3-eu-central-2.ionoscloud.com/statics/common/Loader-Small-Final.gif" alt="loader" className="h-48 w-48" />
                    </div>
                ) : (

                    <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-8">
                        {filteredBlogs.length > 0 ? (
                            filteredBlogs.map((blog, index) => {
                                const blogUrl = blog.id
                                    ? `/blog/${ blog.id}/${blog.blog_slug}`
                        : blog.blog_slug.startsWith('style-')
                        ? `/${blog.blog_slug}`
                        : `/blog/${blog.blog_slug}`;
                        const slug = slugify(blog.category_name, {lower: true });
                        return (
                        <Link to={blogUrl} key={blog.id} onClick={scrollToTop}>
                            <div className="rounded overflow-hidden shadow-lg flex flex-col h-full">
                                <div class="relative">
                                    <img className="w-full" src={blog.blog_feature_image} alt={blog.blog_title} />
                                    <div
                                        class="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25">
                                    </div>
                                    <Link to={`/blogs/${slug}`} key={blog.id} onClick={scrollToTop}>
                                    <div
                                        class="text-xs absolute top-0 right-0 bg-orange px-4 py-2 text-white hover:text-black mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                                        {blog.category_name}
                                    </div>
                                </Link>
                            </div>
                            <div className="px-6 py-4 mb-auto">
                                <p className="text-[24px] font-bold mb-2">{blog.blog_title}</p>
                                <p className="text-gray-500 line-clamp-3">{blog.blog_description}</p>
                            </div>
                            <div className="px-6 py-3 flex flex-row items-center justify-between bg-gray-100">
                                <span className="py-1 text-xs font-regular text-gray-900 mr-1 gap-1 flex flex-row items-center">
                                    <i className="fa-solid fa-calendar-days"></i>
                                    <span className="ml-1">{blog.formatted_date}</span>
                                </span>
                                <span className="py-1 text-xs font-regular text-gray-900 mr-1 hover:text-orange transition-all duration-300 gap-1 flex flex-row items-center">
                                    <span className="ml-1">Read More</span>
                                    <i className="fa-solid fa-arrow-right"></i>
                                </span>
                            </div>
                    </div>
                    </Link>
            );
})
            ) : (
            <p>No matching blogs found!</p>
)}
        </div>
    )
}
      </div >
    </div >
  );
};

export default BlogSearch;