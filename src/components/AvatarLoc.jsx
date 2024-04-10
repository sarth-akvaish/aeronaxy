import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const AvatarLoc = () => {
    const navigate = useNavigate();
    const [selectedImage, setSelectedImage] = useState(null);
    const [location, setLocation] = useState('');

    const handleFileChange = (event) => {
        const file = event.target.files[0];

        if (file) {
            const reader = new FileReader();

            reader.onload = (e) => {
                setSelectedImage(e.target.result);
            };

            reader.readAsDataURL(file);
        }
    };

    const submitHandler = () => {
        if (!location || !selectedImage)
            console.log('Please fill all fields')
        else {
            navigate('/niche');
        }
    }
    return (
        <div className='flex flex-col w-full'>
            <div className='flex px-8'>
                <img className='w-[100px] h-18' src='/dribble.png' alt="" />
            </div>
            <div className='flex items-center justify-center w-full'>
                <div className='flex flex-col justify-center w-[45%] gap-2'>
                    <h1 className='px-2 flex text-3xl font-bold tracking-tight'>Welcome! Let's create your profile</h1>
                    <h3 className='px-2 py-2 font-semibold text-gray-600'>Let other get to know you better! You can do these later</h3>
                    <p className='p-2 py-4 font-bold text-[18px] tracking-tight'>Add an avatar</p>
                    <div className='flex p-2'>
                        <img className='w-1/4 h-1/4 border border-dashed border-gray-500 rounded-[50%]' src={selectedImage || "/download1.jpg"} alt="" />
                        <div className='flex flex-col p-4 px-6'>
                            <label for="file-upload" className="cursor-pointer w-[55%] border text-center border-gray-500 bg-white hover:bg-blue-400 text-black font-bold py-2 rounded">
                                Choose image
                            </label>
                            <input id="file-upload" type="file" className="hidden" onChange={handleFileChange} />
                            <p className='text-gray-600 py-2'>{'>'} or choose one of our defaults</p>
                        </div>
                    </div>
                    <div className='flex flex-col py-6 px-2 gap-2'>
                        <label className='font-bold text-[17px]'>Add your location</label>
                        <input className='focus:outline-none py-2 px-2 border border-b-gray-400' name='location' value={location}
                            onChange={(e) => setLocation(e.target.value)} type="text" placeholder='Enter a location' />
                    </div>
                    <div className='p-4 px-2'>
                        <button type='submit' onClick={submitHandler} className='w-1/4 px-8 font-semibold py-2 rounded-lg bg-pink-500 text-white items-start'>Next</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default AvatarLoc
