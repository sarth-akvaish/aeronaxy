import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: '',
        username: '',
        email: '',
        password: ''
    });
    const [error, setError] = useState();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value
        }));
    }

    const submitHandler = () => {
        if (!formData.name || !formData.username || !formData.email || !formData.password) {
            setError('This field is required!!')
        }
        else {
            navigate('/profile-image')
        }
    }

    return (
        <div className='flex w-full'>
            <div className='w-[35%]'>
                <img className='w-full' src="/check.jpg" alt="" />
            </div>
            <div className='flex flex-col p-6 w-[68%] h-full'>
                <div className='flex items-end justify-end'>
                    Already a member? <span className='text-pink-500'>Sign in</span>
                </div>
                <div className='flex items-center justify-center'>
                    <div className='flex flex-col p-4 gap-8 justify-start w-[60%]'>
                        <p className='text-2xl py-2 font-bold'>Sign up to Dribble</p>
                        <div className='flex gap-10'>
                            <div className='flex flex-col gap-1'>
                                <label className='font-semibold'>Name</label>
                                <input className='bg-gray-100 h-[38px]  rounded-lg p-2 px-4 focus:outline-none' name='name' type="text" placeholder='Enter Name' value={formData.name} onChange={handleInputChange} />
                            </div>
                            <div className='flex flex-col gap-1'>
                                <label className='font-semibold'>Username</label>
                                <input className='bg-gray-100 h-[38px] w-[170px] rounded-lg p-2 px-4 focus:outline-none' type="text" placeholder='Username' value={formData.username} onChange={handleInputChange} name='username' />
                            </div>
                        </div>
                        <div className='flex gap-1 flex-col'>
                            <label className='font-semibold'>Email</label>
                            <input className='h-[38px] bg-gray-100 w-[420px] rounded-lg p-2 px-4 focus:outline-none' type="text" placeholder='Email' value={formData.email} onChange={handleInputChange} name='email' />
                        </div>
                        <div className='flex gap-1 flex-col'>
                            <label className='font-semibold'>Password</label>
                            <input className='h-[38px] bg-gray-100 w-[420px] rounded-lg p-2 px-4 focus:outline-none' type="password" placeholder='6+ characters' value={formData.password} onChange={handleInputChange} name='password' />
                            <div className="flex">
                                <input className='flex t-0 w-8 mt-0' type="checkbox" />
                                <p className='p-6 text-[12px]'>Creating an account means you're okay with our <span className='text-blue-400'>Terms of Service</span>,<span className='text-blue-400'>Privacy Policy</span> , and our default <span className='text-blue-400'>Notification Settings.</span></p>
                            </div>
                        </div>
                        <div>
                            <button type='submit' onClick={submitHandler} className='px-8 font-semibold py-2 rounded-lg bg-pink-500 text-white items-start'>Create Account</button>
                        </div>
                        <p className='text-xs'>This site is protected by reCAPTCHA and the Google <br />
                            <span className='text-blue-400'>Privacy Policy</span> and <span className='text-blue-400'>Terms of Service</span> apply</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup
