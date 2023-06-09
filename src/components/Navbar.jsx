import React, { useState } from 'react';

import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    }

    return (
        <div className='z-10 fixed w-full bg-[#000300]'>
            <div className='flex justify-between items-center text-white h-10 cursor-pointer w-full max-w-[1240px] mx-auto px-6 py-8 bg-[#000300]'>
                <h1 className='w-full text-3xl font-bold text-[#00df9a] text-left'>REACT.</h1>
                <ul className='hidden md:flex'>
                    <li className='p-4 cursor-pointer'><a href="#hero">Home</a></li>
                    <li className='p-4 cursor-pointer'><a href="#company">Analytics</a></li>
                    <li className='p-4 cursor-pointer'><a href="#resources">Resources</a></li>
                    <li className='p-4 cursor-pointer'><a href="#about">About</a></li>
                    <li className='p-4 cursor-pointer'><a href="#contact">Contact</a></li>
                </ul>
            </div>




            <div onClick={handleNav} className='cursor-pointer block md:hidden'>
                {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}

            </div>

            <div className={!nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] m-4 text-left transition-all duration-500 ease-in-out md:hidden' : 'fixed left-[-100%]'}>
                <h1 className='w-full text-3xl font-bold text-[#00df9a] text-left'>REACT.</h1>
                <ul className='uppercase p-4'>
                    <li className='p-4 border-b border-gray-600 cursor-pointer'>Home</li>
                    <li className='p-4 border-b border-gray-600 cursor-pointer'>Company</li>
                    <li className='p-4 border-b border-gray-600 cursor-pointer'>Resources</li>
                    <li className='p-4 border-b border-gray-600 cursor-pointer'>About</li>
                    <li className='p-4 cursor-pointer'>Contact</li>
                </ul>
            </div>


        </div>
    )
};

export default Navbar;
