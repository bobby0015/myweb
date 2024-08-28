import React from 'react';
import blogs from '../data/blog-data';

// Function to shuffle an array
const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};

// Shuffle the blogs array and select the first three blogs
const selectedBlogs = shuffleArray([...blogs]).slice(0, 6);

export default function PopularBlog(props) {
    return (
        <>
            <div className='my-8'>
                <h1 className={`text-center text-3xl font-bold ${props.mode === "bg-zinc-800" ? "text-[#209cee]" : "text-[#209cee]"}`}>Popular Blogs</h1>
                <div className='w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-8'>
                    {selectedBlogs.map((blog, index) => (
                        <div key={index} className={`overflow-hidden shadow-lg rounded-md object-contain ${props.mode === "bg-zinc-800" ? "bg-zinc-800" : ""} ${props.mode === "bg-zinc-800" ? "text-white" : "text-black"}`}>
                            <img className='h-[200px] shadow' src={blog.img} alt={blog.title} />
                            <div className={`w-[90%] py-4 mx-auto `}>
                                <h1 className='text-xl font-semibold'>{blog.title}</h1>
                                <p className={`${props.mode === "bg-zinc-800" ? "text-slate-300" : "text-gray-600"} mb-4 text-wrap`}>{blog.desc.substring(0,200)}... <a className='text-blue-500 hover:underline' href="/">Read More</a></p>
                                <button className='py-2 px-3 bg-[#209cee] text-white rounded-md'>Read More</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
