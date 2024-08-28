import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Footer = (props) => {
    return (
        <footer className={`${props.mode === "bg-zinc-800" ? "text-white" : "text-black"} py-8 ${props.mode === "bg-zinc-800" ? "bg-zinc-800" : "bg-slate-100"}`}>
            <div className="container mx-auto px-4">
                <div className="w-[80%] mx-auto grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid justify-between">
                    {/* Company Info */}
                    <div className="w-full sm:w-1/2 lg:w-1/4 mb-6">
                        <h2 className="text-xl font-semibold mb-4">Company</h2>
                        <ul>
                            <li><a href="#" className="hover:text-gray-400">About Us</a></li>
                            <li><a href="#" className="hover:text-gray-400">Careers</a></li>
                            <li><a href="#" className="hover:text-gray-400">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-gray-400">Terms of Service</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="w-full sm:w-1/2 lg:w-1/4 mb-6">
                        <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
                        <ul>
                            <li className="mb-2">1234 Street Name, City, State, 56789</li>
                            <li className="mb-2">Phone: (123) 456-7890</li>
                            <li className="mb-2">Email: contact@yourcompany.com</li>
                        </ul>
                    </div>

                    {/* Social Media */}
                    <div className="w-full sm:w-1/2 lg:w-1/4 mb-6">
                        <h2 className="text-xl font-semibold mb-4">Follow Us</h2>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-gray-300"><FaFacebookF /></a>
                            <a href="#" className="text-gray-400 hover:text-gray-300"><FaTwitter /></a>
                            <a href="#" className="text-gray-400 hover:text-gray-300"><FaLinkedinIn /></a>
                            <a href="#" className="text-gray-400 hover:text-gray-300"><FaInstagram /></a>
                        </div>
                    </div>

                    {/* Newsletter */}
                    <div className="w-full sm:w-1/2 lg:w-1/4 mb-6">
                        <h2 className="text-xl font-semibold mb-4">Newsletter</h2>
                        <p className="mb-4">Sign up to get the latest news and updates from us.</p>
                        <form>
                            <input 
                                type="email" 
                                placeholder="Your email address" 
                                className="w-full p-2 mb-4 rounded text-black placeholder-gray-400" 
                            />
                            <button 
                                type="submit" 
                                className="w-full py-2 bg-blue-600 hover:bg-blue-700 rounded text-white"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                <div className="border-t border-gray-700 mt-8 pt-4 text-center">
                    <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
