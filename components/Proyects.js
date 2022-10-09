import React from 'react'
import Image from 'next/image'
import propertyimag from '../public/assets/projects/property.jpg'
import Link from 'next/link'

function Proyects() {
    return (
        <div className='w-full'>
            <div className='max-w-[1050px] mx-auto px-2 py-16'>
                <p className='text-xl tracking-widest uppercase text-[#1CC5DC]'>Proyects</p>
                <h2 className='py-4'>What I can do</h2>
                <div className='grid md:grid-cols-2 gap-8'>
                    <div className='relative flex items-center justify-center h-auto w-full shadwo-xl shadwo-gray-400 rounde-xl p-4 group hover:bg-gradient-to-r from-[#1CC5DC] to-[#570A57]'>
                        <Image className='rounded-xl group-hover:opacity-10 ' src={propertyimag} alt='/' />

                        <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                            <h3 className='text-2xl text-white text-center'>Property finde</h3>
                            <p className='pb-4 pt-2 text-white'>React js</p>
                            <Link href='#'>
                                <p className='text-center py-3 bg-white rounded-lg text-gray-700 font-bold text-lg cursor-pointer'>More info</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Proyects
