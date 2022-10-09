import React from 'react'
import Link from 'next/link';
import { FaLinkedinIn, FaTwitter, FaGithub } from "react-icons/fa";

function Main() {
    return (
        <div className='w-full h-screen text-center'>
            <div className=' max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
                <div>
                    <p className='uppercase text-sm tracking-widest text-gray-600'> Le's Build something together</p>
                    <h1 className='py-4 text-gray-700'>Hi, I'M <span className='text-[#1CC5DC]'>Yesenia Villar</span></h1>
                    <h2 className='py-2 text-gray-700'>Front-End web Developer</h2>
                    <p className='py-4 text-gray-600 max-w-[70%] m-auto'>
                        Tailwind CSS works by scanning all of your HTML files, JavaScript components,
                        and any other templates for class names, generating the corresponding styles and then writing them to a static CSS file.
                    </p>
                    <div className='flex justify-center  items-center mx-w-[330px] m-auto py-2 text-[#1CC5DC] hover:text-[#570A57]'>
                        <div className='rounded-full shadow-md shadow-gray-400 p-3 mx-2  curso-pointer hover:scale-105 ease-in duration-500'>
                            <Link href='/'>
                                <FaLinkedinIn size={20} />
                            </Link>
                        </div>
                        <div className='rounded-full shadow-md shadow-gray-400 p-3 mx-2 curso-pointer hover:scale-105 ease-in duration-300'>
                            <Link href='/'>
                                <FaGithub size={20} />
                            </Link>
                        </div>
                        <div className='rounded-full shadow-md shadow-gray-400 p-3 mx-2  curso-pointer hover:scale-105 ease-in duration-300'>
                            <Link href='/'>
                                <FaTwitter size={20} />
                            </Link>
                        </div>
                        <div className='rounded-full shadow-md shadow-gray-400 p-3 mx-2  curso-pointer hover:scale-105 ease-in duration-300'>
                            <Link href='/'>
                                <FaLinkedinIn size={20} />
                            </Link>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main