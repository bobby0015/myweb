import React from 'react'
import { Cursor } from 'react-simple-typewriter'

export default function HomeHero(props) {
    return (
        <div className='w-full flex h-full  md:h-[50vh] shadow-md'>
            <div className="py-8 md:p-0 md:w-1/2 h-full flex items-center">
                <div className='mx-10 md:ml-20'>
                    <h1 className={`font-bold text-3xl lg:text-4xl text-${props.mode === "bg-zinc-800" ? "white" : "zinc-700"}`}>Welcome to My <span className='text-[#209cee]'>Web</span></h1>
                    <h2 className={`text-xl lg:text-2xl font-bold mb-4 text-${props.mode === "bg-zinc-800" ? "white" : "zinc-700"}`}>Learn <span className='text-[#209cee]'>{props.text}<Cursor /></span></h2>
                    <p className={`${props.mode === "bg-zinc-800" ? "text-[#c5cbd0]" : "text-zinc-700"}`}>Confused on which course to take? I have got you covered. Browse courses and find out the best course for you. Its free! Code With Harry is my attempt to teach basics and those coding techniques to people in short time which took me ages to learn.</p>
                    <div className="flex mt-10">
                        <a className='text-sm font-semibold rounded-md py-3 px-4 bg-gray-900 text-white' href="/">Free Courses</a>
                        <a className='mx-4 text-sm font-semibold rounded-md py-3 px-4 bg-gray-300 text-gray-900' href="/">Explore Blog</a>
                    </div>
                </div>
            </div>
            <div style={{ clipPath: "polygon(10% 0px, 100% 0%, 100% 100%, 0px 100%)", backgroundImage: "url('https://images.unsplash.com/photo-1619462572322-a28a773cbed5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }} className="w-1/2 h-full hidden md:block bg-cover overflow-hidden">
            </div>
        </div>
    )
}
