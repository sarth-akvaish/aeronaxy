import React from 'react'
import Card from './Card'
import { useNavigate } from 'react-router-dom'

const Niche = () => {
    const navigate = useNavigate();

    const moveToPrevious = () => {
        navigate('/profile-image')
    }

    const handleSubmit = () => {
        navigate('/verify-email');
    }

    return (
        <div className='flex flex-col w-full'>
            <div className='flex'>
                <div className='flex px-8'>
                    <img className='w-[100px] h-18' src='/dribble.png' alt="" />
                </div>
                <div className='flex items-center justify-center'>
                    <button onClick={moveToPrevious} className='text-center bg-gray-100 w-[40px] h-[40px] rounded-md font-extrabold'>{'<'}</button>
                </div>
            </div>
            <div className='flex justify-center items-center w-full'>
                <div className='w-3/4 flex items-center gap-2 justify-center flex-col'>
                    <h1 className='text-3xl font-bold'>What brings you to Dribble?</h1>
                    <p className='text-gray-600 font-normal'>Select the options that best describe you. Don't worry, you can explore later.</p>
                </div>
            </div>
            <div className='flex p-4 my-8 w-full justify-center'>
                <div className="flex items-center gap-4 justify-center w-3/4">
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
            <div className='flex items-center justify-center'>
                <button type='submit' onClick={handleSubmit} className='w-[10%] px-8 font-semibold py-2 rounded-lg bg-pink-500 text-white items-start'>Finish</button>
            </div>
        </div>
    )
}

export default Niche
