import React from 'react';
import { FaTwitter, FaLinkedinIn, FaInstagram, FaGithub } from 'react-icons/fa';
import Layout from '../../Layout';

const ContactPage = () => {
    return (
        <Layout>
            <div className="min-h-screen bg-black text-white flex justify-center items-center">
                <div className="flex flex-col md:flex-row items-center w-full max-w-4xl p-4">
                    <div className="flex flex-col items-center md:items-center md:w-1/2 mb-6 md:mb-0">
                        <img
                            src=""
                            alt="Your Name"
                            className="rounded-full h-60 w-60 object-cover mb-4"
                        />
                    </div>
                    <div className="border-t-2 border-gray-600 w-full md:w-auto md:border-l-2 md:border-t-0 md:h-60 mb-6 md:mb-0"></div>
                    <div className="flex flex-col justify-center items-center md:items-center md:w-1/2 md:pl-6 space-y-4">
                        <div>
                            <h2 className="text-3xl font-bold text-white text-center">Nilesh Kumar Mahata</h2>
                        </div>
                        <div>
                            <h3 className="text-2xl font-semibold text-white text-center">Contact Information</h3>
                            <p className="text-gray-400 text-center">Email: nileshkumar1234qq@gmail.com</p>
                            <p className="text-gray-400 text-center">Phone: +91 91029 33992</p>
                            <p className="text-gray-400 text-center">Address: Bhubaneswer, Odisha, India</p>
                        </div>
                        <div className="flex space-x-4 mt-4 justify-center">
                            <a href="" target="_blank" rel="noopener noreferrer">
                                <FaLinkedinIn className="text-3xl text-blue-700" />
                            </a>
                            <a href="" target="_blank" rel="noopener noreferrer">
                                <FaInstagram className="text-3xl text-pink-600" />
                            </a>
                            <a href="" target="_blank" rel="noopener noreferrer">
                                <FaGithub className="text-3xl text-gray-400" />
                            </a>
                            <a href="" target="_blank" rel="noopener noreferrer">
                                <FaTwitter className="text-3xl text-blue-400" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default ContactPage;
