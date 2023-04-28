import React from 'react';
import Single from '../assets/Single.png';
import Double from '../assets/Double.png';
import Triple from '../assets/Triple.png';

const CreateCard = (props) => (
    <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 transition-all duration-300 ease-in-out'>
        <img className='w-20 mx-auto mt-[-3rem] bg-white' src={props.image} alt="" />
        <h2 className='text-2xl font-bold text-center py-8'>{props.title}</h2>
        <p className='text-center text-4xl font-bold'>{props.price}</p>
        <div className='text-center font-medium'>
            <p className='py-2 border-b mx-8 mt-8'>{props.storage} GB Storage</p>
            <p className='py-2 border-b mx-8'>{props.users} Granted Users</p>
            <p className='py-2 border-b mx-8'>Send up to {props.limit} GB</p>
            <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:ml-0 py-3 text-black border-2 border-white hover:bg-white hover:text-[#00df9a] hover:border-[#00df9a] transition-all duration-200 ease-in-out'>Start Trial</button>
        </div>
    </div>
);

const Cards = () => {
    return (
        <div className='w-full py-[10rem] px-4 bg-white text-black'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
                <CreateCard image={Single} title="Single User" price="$149" storage="500" users="1" limit="2"/>

                <CreateCard image={Double} title="Double User" price="$249" storage="1000" users="2" limit="4"/>

                <CreateCard image={Triple} title="Multiple Users" price="$399" storage="2000" users="3" limit="6"/>
            </div>
        </div>
    );
}

export default Cards;
