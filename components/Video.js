import React from 'react'

function Video() {
    return (
        <div className=' container mx-auto p-2 flex justify-center items-center  md:h-auto'>

            <video autoplay loop controls muted className='w-full h-auto md:w-[800px] md:h-auto p-10'>
                <source src="/../video1.mp4" type="video/mp4" />
            </video>
        </div>
    )
}

export default Video