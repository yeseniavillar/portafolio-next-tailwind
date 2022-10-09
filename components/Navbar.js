import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { FaLinkedinIn, FaTwitter, FaGithub } from "react-icons/fa";

const Navbar = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }
    return (
        <div className='fixed w-full h-25 shadow-xl z-[100]'>
            <div className='flex justify-between items-center w-full h-full p-2 px-10 2xl:px-16'>
                <Image src="/../public/assets/mi-logo.png" alt="logo" width={160} height={70} />
                <div>
                    <ul className='hidden md:flex'>
                        <Link href='/'>
                            <li className='ml-10 text-lg uppercase hover:border-b'>Home</li>
                        </Link>
                        <Link href='/'>
                            <li className='ml-10 text-lg uppercase hover:border-b'>About</li>
                        </Link>
                        <Link href='/'>
                            <li className='ml-10 text-lg uppercase hover:border-b'>Skills</li>
                        </Link>
                        <Link href='/'>
                            <li className='ml-10 text-lg uppercase hover:border-b'>Projects</li>
                        </Link>
                        <Link href='/'>
                            <li className='ml-10 mr-20 text-lg uppercase hover:border-b'>Contact</li>
                        </Link>
                    </ul>
                    <div onClick={handleNav} className='md:hidden'>
                        <AiOutlineMenu size={25} />
                    </div>
                </div>
            </div>
            <div className={nav ? 'md:hidden fixed letf-0 top-0 w-full h-screen bg-black/70' : ''}>

                <div className={
                    nav
                        ? ' fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#fdfcf9] p-10 ease-in duration-500'
                        : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
                }>
                    <div className='flex w-full items-center justify-between'>
                        <Image src="/../public/assets/mi-logo.png" alt="logo" width={150} height={80} />
                        <div onClick={handleNav} className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'><AiOutlineClose /></div>
                    </div>
                    <div className='border-b borde-grey-300 my-4'>
                        <p className='w-[85%] md:w-[90%] py-4'>Le's build something legndary together</p>
                    </div>
                    <div className='kpy-4 flex flex-col'>
                        <ul className='uppercase'>
                            <Link href='/'>
                                <li className='py-4 text-sm'>Home</li>
                            </Link>
                            <Link href='/'>
                                <li className='py-4 text-sm'>About</li>
                            </Link>
                            <Link href='/'>
                                <li className='py-4 text-sm'>Skills</li>
                            </Link>
                            <Link href='/'>
                                <li className='py-4 text-sm'>Projects</li>
                            </Link>
                            <Link href='/'>
                                <li className='py-4 text-sm'>Contact</li>
                            </Link>
                        </ul>
                        <div className='pt-20'>
                            <p className='uppercase tracking-widest text-[#5651e5]'> Let's Connect</p>
                            <div className='flex items-center justify-betweeen my-4  w-full sm:w-[80%]'>
                                <div className='rounded-full shadow-lg shadow-gray-400 p-3  mx-4 curso-pointer hover:scale-105 ease-in duration-500'>
                                    <Link href='/'>
                                        <FaLinkedinIn />
                                    </Link>
                                </div>
                                <div className='rounded-full shadow-lg shadow-gray-400 p-3 mx-4 curso-pointer hover:scale-105 ease-in duration-500'>
                                    <Link href='/'>
                                        <FaGithub />
                                    </Link>
                                </div>
                                <div className='rounded-full shadow-lg shadow-gray-400 p-3  mx-4 curso-pointer hover:scale-105 ease-in duration-500'>
                                    <Link href='/'>
                                        <FaTwitter />
                                    </Link>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar