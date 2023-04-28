import React from 'react';

import {
    FaDribbbleSquare,
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagramSquare,
    FaTwitterSquare,
} from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='max-w-[1240px] mx-auto py-16 px-4 grid md:grid-cols-3 gap-16 text-white' id="about">
            <div>
                <h1 className='w-full text-3xl font-bold text-[#00df9a] text-left'>REACT.</h1>
                <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat minus perferendis libero voluptas dolorum, doloremque dolores ut modi amet error!</p>

                <div className='flex justify-between md:w-[75%] text-white my-6'>
                    <FaFacebookSquare size={30} />
                    <FaInstagramSquare size={30} />
                    <FaTwitterSquare size={30} />
                    <FaGithubSquare size={30} />
                    <FaDribbbleSquare size={30} />
                </div>

            </div>

            <div className='md:col-span-2 flex justify-between mt-6 px-6'>
                <div>
                    <h6 className='font-medium text-gray-400'>Solutions</h6>
                    <ul>
                        <li className='py-2 text-sm'>Analytics</li>
                        <li className='py-2 text-sm'>Marketing</li>
                        <li className='py-2 text-sm'>Commerce</li>
                        <li className='py-2 text-sm'>Insides</li>
                    </ul>
                </div>

                <div>
                    <h6 className='font-medium text-gray-400'>Support</h6>
                    <ul>
                        <li className='py-2 text-sm'>Pricing</li>
                        <li className='py-2 text-sm'>Documentation</li>
                        <li className='py-2 text-sm'>Guides</li>
                        <li className='py-2 text-sm'>API Status</li>
                    </ul>
                </div>

                <div>
                    <h6 className='font-medium text-gray-400'>Company</h6>
                    <ul>
                        <li className='py-2 text-sm'>About</li>
                        <li className='py-2 text-sm'>Blog</li>
                        <li className='py-2 text-sm'>Pricing</li>
                        <li className='py-2 text-sm'>Canvas</li>
                    </ul>
                </div>
            </div>

        </div>
    );
}

export default Footer;
