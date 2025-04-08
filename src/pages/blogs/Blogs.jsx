import React from 'react';
import blogsData from '../../data/blogs.json'

const Blogs = () => {
    return (
       <section className='container mx-auto py-15  '>
        <h2 className='mb-4 text-4xl font-extrabold text-gray-900 text-center'>Latest From Blog</h2>
        <p className='max-w-[500px] mx-auto text-gray-500 text-center mb-12'> Elevate your wardrobe with our freshest style tips, trends, and inspiration on our blog.</p>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-12'>
            {
                blogsData.map((blog,index)=>(
                    <div key={index} className='bg-white overflow-hidden rounded-lg shadow-md shadow-gray-200 cursor-pointer hover:scale-105 transition-all duration-300'>
                        <img src={blog.imageUrl} alt="blog image" />
                        <div className='p-4 text-center'>
                        <h6 className="text-sm font-medium text-red-500">{blog.subtitle}</h6>
                            <h4 className="mb-2 text-lg font-header text-black">{blog.title}</h4>
                            <p className="text-sm font-semibold text-gray-500">{blog.date}</p>
                           
                        </div>

                    </div>
                ))
            }

        </div>
       </section>
    );
};

export default Blogs;