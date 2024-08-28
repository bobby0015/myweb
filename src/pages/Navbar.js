import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiFillMoon } from "react-icons/ai";
import Logo from '../images/logo.png';
import { FaBars } from "react-icons/fa";

export default function Navbar(props) {
    const [menu, setMenu] = useState("hidden")
    const toggleMenu = () =>{
        if(menu === "hidden"){
            setMenu("block")
        }else{
            setMenu("hidden")
        }
    }
  return (
    <>
    <header className={`flex relative py-3 px-5 items-center justify-between ${props.mode === "bg-white" ? "border-b-[1px]" : ""} border-gray-200 ${props.mode} text-${props.mode === "bg-zinc-800" ? "white" : "black"}`}>
        <div className='flex items-center cursor-pointer'>
            <img className='w-[30px]' src={Logo} alt="myweb" />
            <h1 className='mx-2 text-xl font-semibold'>My<span className={`text-[#209cee]`}>Web</span></h1>
        </div>
        <div className='absolute sm:relative sm:top-0 top-[65px] w-full sm:z-0 z-[99]   sm:max-w-max left-0'>
            <nav className={`sm:block ${menu} sm:bg-transparent h-[100vh] sm:h-auto ${props.mode === "bg-zinc-800" ? "bg-zinc-600" : "bg-white"}`}>
                <ul className='flex sm:flex-row flex-col'>
                    <li className='sm:my-0 my-2' ><Link className={`mx-3 font-semibold hover:text-[#209cee] transition ease-in-out`} to="/">Home</Link></li>
                    <li className='sm:my-0 my-2' ><Link className={`mx-3 font-semibold hover:text-[#209cee] transition ease-in-out`} to="/about">About</Link></li>
                    <li className='sm:my-0 my-2' ><Link className={`mx-3 font-semibold hover:text-[#209cee] transition ease-in-out`} to="/blog">Blogs</Link></li>
                    <li className='sm:my-0 my-2' ><Link className={`mx-3 font-semibold hover:text-[#209cee] transition ease-in-out`} to="/contact">Contact Us</Link></li>
                </ul>
            </nav>
        </div>
        <div className='flex items-center'>
            <button className={`text-2xl mx-4 text-${props.mode === "bg-zinc-800" ? "white" : "zinc-900"}`} onClick={props.togglMode}><AiFillMoon /></button>
            <Link to='/login' className={`py-2 px-4 rounded-md bg-[#209cee] text-white`}>Login</Link>
            <FaBars className='sm:hidden block ml-2 text-xl' onClick={toggleMenu} />
        </div>
    </header>
    </>
  )
}
