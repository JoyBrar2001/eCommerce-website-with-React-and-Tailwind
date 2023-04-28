import React from 'react'
import Typed from 'react-typed';

const Hero = () => {
    return (
        <div className='text-white'>
            <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>

                <p className='text-[#00df9a] font-bold p-2 uppercase'>Growing with Data Analytics</p>

                <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>Grow with Data.</h1>

                <div className='flex justify-center items-center gap-2'>
                    <p className='md:text-3xl sm:text-2xl text-m font-bold py-4'>Fast, Flexible, Financing for </p>
                    <Typed className='md:text-3xl sm:text-2xl text-m font-bold' strings={['BTB', 'BTC', 'SASS']} typeSpeed={120} backSpeed={140} loop />
                </div>

                <p className='md:txet-2xl text-xl text-gray-500 font-bold'>Monitor your data analytics to increase revenue for BTB, BTC, & SASS platforms.</p>

                <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black border-2 border-[#000300] hover:bg-[#000300] hover:text-[#00df9a] hover:border-[#00df9a] transition-all duration-200 ease-in-out'>Get Started</button>

            </div>
        </div>
    )
}

export default Hero
