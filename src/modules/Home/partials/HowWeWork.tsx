import React from 'react';
import { how_we_work } from '../config/constants';

const HowWeWork = () => {
    const data = how_we_work;
    return (
        <div className=' max-w-6xl mx-auto p-2 my-20'>
            
            <div className='w-full grid grid-cols-2 gap-5 px-2'>
                <h2 className='text-4xl font-light'>{data.title}</h2>
                <p className='text-lg'>{data.description}</p>
            </div>
            <div className='grid grid-cols-3 gap-5 px-2 py-4'>
{data.steps &&data.steps.map(step=>{
    return (
        <div key={step.id}>
            <div className='flex items-center'>
                <p className='text-xl p-4'>{step.icon}</p>
                <div className='ml-3'>
                    <h3 className='text-lg font-semibold'>{step.title}</h3>
                    <p>{step.description}</p>
                </div>
            </div>
        </div>
    );
 
})}
            </div>
        </div>
    );
};

export default HowWeWork;