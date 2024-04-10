import React from 'react'
import { PiSuitcaseSimpleBold } from "react-icons/pi";
import { IoIosSearch } from "react-icons/io";
import { MdMarkEmailRead } from "react-icons/md";
import { FaDribbble, FaInstagram, FaPinterest, FaTwitter } from "react-icons/fa";
import { IoLogoFacebook } from "react-icons/io";


const Verify = () => {
    return (
        <div className='flex flex-col w-full'>
            <div className='flex items-center justify-between w-full'>
                <div className='flex px-6 items-center gap-6'>
                    <img className='w-[80px] h-[70px]' src="/dribble.png" alt="" />
                    <p>Inspiration</p>
                    <p>Find Work</p>
                    <p>Learn Design</p>
                    <p>Go Pro</p>
                    <p>Hire Designers</p>
                </div>
                <div className='flex items-center gap-2 px-4'>
                    <div>
                        <IoIosSearch className='absolute top-[25px] text-[20px] z-10 mx-1' />
                        <input className='w-28 relative focus:outline-none bg-gray-200 rounded-lg px-6 py-1' type="text" placeholder='Search..' />
                    </div>

                    <PiSuitcaseSimpleBold />
                    <img className='w-8 h-8 rounded-[50%]' src="/designer.jpeg" alt="" />
                    <button className='py-2 bg-pink-500 text-white font-semibold rounded-md px-3'>Upload</button>
                </div>
            </div>

            <div className='flex justify-center w-full'>
                <div className='mt-12 w-[60%] gap-4 items-center justify-center flex flex-col'>
                    <h1 className='text-3xl font-bold tracking-wide'>Please Verify your email...</h1>
                    <MdMarkEmailRead className='text-[100px] text-gray-400' />
                    <p className='text-gray-500 text-[17px]'>Please verify your email address. We have sent a confirmation email to:</p>
                    <p className='font-bold'>account@refero.design</p>
                    <p className='text-gray-500 text-[17px]'>Click the link in the email to begin using Dribble</p>
                    <p className='text-center text-[17px] text-gray-500'>Didn't receive the email? Check your Spam folder, it may have been caught by a filter. If br you still don't see it, you can <span className='text-pink-500'>resend the confirmation mail</span></p>
                    <p className='text-[17px] text-gray-500'>Wrong email address? <span className='text-pink-500'>Change it</span></p>
                </div>
            </div>

            <div className='flex w-full mt-32'>
                <div className='flex flex-col w-full bg-gray-100 p-6'>
                    <div className='grid grid-cols-6 w-full py-4 px-8'>
                        <div className='min-w-[200px] flex flex-col '>
                            <img className='w-20 h-16' src="/dribble.png" alt="" />
                            <p className='text-[15px] font-normal text-gray-700'>Dribble is the world's leading community for creatives to share, grow and get hired.</p>
                            <div className='flex py-4 gap-2'>
                                <FaDribbble />
                                <IoLogoFacebook />
                                <FaTwitter />
                                <FaInstagram />
                                <FaPinterest />
                            </div>
                        </div>
                        <div className='flex flex-col gap-2 px-6 py-4'>
                            <p className='font-bold'>For Designers</p>
                            <p className='text-[15px] font-semibold text-gray-700'>Go Pro</p>
                            <p className='text-[15px] font-semibold text-gray-700'>Explore Design work</p>
                            <p className='text-[15px] font-semibold text-gray-700'>Design Blog</p>
                            <p className='text-[15px] font-semibold text-gray-700'>Overtime Podcast</p>
                            <p className='text-[15px] font-semibold text-gray-700'>Playoffs</p>
                            <p className='text-[15px] font-semibold text-gray-700'>Weekly warm-up</p>
                            <p className='text-[15px] font-semibold text-gray-700'>Refer a friend</p>
                        </div>
                        <div className='flex flex-col gap-2 px-6 py-4'>
                            <p className='font-bold'>Hire Designers</p>
                            <p className='text-[15px] font-semibold text-gray-700'>Post a Job Opening</p>
                            <p className='text-[15px] font-semibold text-gray-700'>Post a freelance project</p>
                            <p className='text-[15px] font-semibold text-gray-700'>Search for Designers</p>
                            <p className='text-[15px] font-semibold text-gray-700'>Overtime Podcast</p>
                            <p className='text-[15px] font-semibold text-gray-700'>Brands</p>
                            <p className='text-[15px] font-semibold text-gray-700'>Advertise with us</p>
                        </div>
                        <div className='flex flex-col gap-2 px-6 py-4'>
                            <p className='font-bold'>Company</p>
                            <p className='text-[15px] font-semibold text-gray-700'>About</p>
                            <p className='text-[15px] font-semibold text-gray-700'>Careers</p>
                            <p className='text-[15px] font-semibold text-gray-700'>Support</p>
                            <p className='text-[15px] font-semibold text-gray-700'>Media Kit</p>
                            <p className='text-[15px] font-semibold text-gray-700'>Testimonials</p>
                            <p className='text-[15px] font-semibold text-gray-700'>API</p>
                            <p className='text-[15px] font-semibold text-gray-700'>Terms of Service</p>
                            <p className='text-[15px] font-semibold text-gray-700'>Privacy Policy</p>
                            <p className='text-[15px] font-semibold text-gray-700'>Cookie Policy</p>
                        </div>
                        <div className='flex flex-col gap-2 px-6 py-4'>
                            <p className='font-bold'>Directories</p>
                            <p className='text-[15px] font-semibold text-gray-700'>Design Jobs</p>
                            <p className='text-[15px] font-semibold text-gray-700'>Designers for Hire</p>
                            <p className='text-[15px] font-semibold text-gray-700'>Freelance Designers for hire</p>
                            <p className='text-[15px] font-semibold text-gray-700'>Tags</p>
                            <p className='text-[15px] font-semibold text-gray-700'>Places</p>
                            <p className='text-[15px] font-semibold text-gray-700'>Design Asset</p>
                            <p className='text-[15px] font-semibold text-gray-700'>Weekly warm-up</p>
                            <p className='text-[15px] font-semibold text-gray-700'>Refer a friend</p>
                        </div>
                        <div className='flex flex-col gap-2 px-6 py-4'>
                            <p className='font-bold'>Design Resources</p>
                            <p className='text-[15px] font-semibold text-gray-700'>Go Pro</p>
                            <p className='text-[15px] font-semibold text-gray-700'>Explore Design work</p>
                            <p className='text-[15px] font-semibold text-gray-700'>Design Blog</p>
                            <p className='text-[15px] font-semibold text-gray-700'>Overtime Podcast</p>
                            <p className='text-[15px] font-semibold text-gray-700'>Playoffs</p>
                            <p className='text-[15px] font-semibold text-gray-700'>Weekly warm-up</p>
                            <p className='text-[15px] font-semibold text-gray-700'>Refer a friend</p>
                        </div>
                    </div>
                    <div className='bg-gray-400 h-[1px] my-8 mx-4'></div>
                    <div className='flex justify-between px-2'>
                        <p className='text-gray-700'>2023 Dribble All rights reserved.</p>
                        <div className='flex items-center gap-2'>20,531,453 shots dribbled <span><FaDribbble className='text-pink-500' /></span></div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Verify
