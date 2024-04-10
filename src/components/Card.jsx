import React, { useState } from 'react'

const Card = () => {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };
    return (
        <div onChange={handleCheckboxChange} className={`flex p-2 flex-col w-[300px] h-[300px] gap-1 border ${isChecked ? 'border-pink-600' : 'border-gray-400'} border-gray-200 rounded-xl`}>
            <div className='flex items-center justify-center'>
                <img className='w-[220px] h-[200px]' src="/designer.jpeg" alt="" />
            </div>
            <p className='text-center'>I'm a designer looking to share my work</p>
            {/* <input className='rounded-[50%] w-[20px] h-[20px]' type="checkbox" name="" id="" /> */}
            <div className='flex flex-col items-center'>
                <input type="checkbox" id="circular-checkbox" className="hidden" />
                <label for="circular-checkbox" className={`items-center s w-6 h-6 rounded-full border-2 ${isChecked ? 'bg-blue-500 border-blue-500' : 'border-gray-400'}  cursor-pointer`}></label>
            </div>
        </div>
    )
}

export default Card
