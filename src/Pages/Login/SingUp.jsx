import React, { useState } from 'react';
import signinIcon from '../../assets/signin.gif'
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { imageToBase64 } from '../../utils/imageTobase64';
import UseAxiosPublic from '../../hooks/UseAxiosPublic';

const SingUp = () => {

    const [showPassword, setShowPassword] = useState(false)
    const [profilePhoto, setProfilePhoto] = useState()
    const [error, setError] = useState('')
    const navigate = useNavigate()
    const axiosPublic = UseAxiosPublic()


    const handleUploadPhoto = async (event) => {
        const file = event.target.files[0]

        const profilePhoto = await imageToBase64(file)
        console.log('profile photo', profilePhoto)
        setProfilePhoto(profilePhoto)
    }


    const handleSubmit = async (event) => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;

        if (password === confirmPassword) {
            const userData = { name, email, password, profilePhoto };

            // console.log('userData', userData);

            try {
                const dataResponse = await axiosPublic.post('/singup', userData);
                console.log("data in data response", dataResponse);

                if (dataResponse.data?.success) {
                    toast.success(dataResponse?.data?.message);
                    navigate('/login');
                } else {
                    toast.error(dataResponse?.data?.message || "Signup failed");
                }
            } catch (error) {
                console.error("Signup error", error);
                toast.error(error?.response?.data?.message || "An error occurred");
            }
        } else {
            toast.error("Passwords doesn't match");
            throw new Error("Passwords doesn't match");
        }
    };


    return (
        <div className=' w-full h-screen flex justify-center items-center md:p-4'>
            <div className='bg-primaryBgColor shadow-lg rounded-md p-5 w-full max-w-xl'>
                <div className='w-20 h-20 mx-auto relative overflow-hidden rounded-full '>
                    <div>
                        <img src={profilePhoto || signinIcon} alt="" />
                    </div>
                    <form onSubmit={handleSubmit}>
                        <label >
                            <div className='text-center w-full text-xs bg-slate-300 pb-2 bg-opacity-80 absolute bottom-0 cursor-pointer'>
                                <span>Upload<br />photo</span>
                                <input type="file" name="profilePic" className='hidden' onChange={handleUploadPhoto} />
                            </div>
                        </label>
                    </form>
                </div>

                <form className='mt-7' onSubmit={handleSubmit}>
                    <div>
                        <div className='text-md mb-3'>
                            <label className='text-white' htmlFor="">Name</label>
                            <div className='bg-secondaryBgColor p-2'>
                                <input type="name" name="name" placeholder='Enter your name' className='w-full h-full outline-none text-white bg-transparent' required />
                            </div>
                        </div>

                        <div className='text-md text-white mb-3'>
                            <label htmlFor="">Email</label>
                            <div className='bg-secondaryBgColor p-2'>
                                <input type="email" name="email" placeholder='Enter your email' className='w-full h-full outline-none bg-transparent' required />
                            </div>
                        </div>

                        <div className='text-md mb-3 text-white'>
                            <label htmlFor="">Password</label>
                            <div className='bg-secondaryBgColor p-2 flex'>
                                <input type={showPassword ? 'text' : 'password'} name="password" placeholder='Enter your password' className='w-full h-full outline-none bg-transparent' required />
                                <div className='text-xl text-white/50 cursor-pointer' onClick={() => setShowPassword(previous => !previous)}>
                                    <span>
                                        {
                                            showPassword ? <FaEyeSlash /> : <FaEye />
                                        }
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className='text-md text-white'>
                            <label htmlFor="">Confirm Password</label>
                            <div className='bg-secondaryBgColor p-2 flex'>
                                <input type={showPassword ? 'text' : 'password'} name="confirmPassword" placeholder='Enter your confirm password' className='w-full h-full outline-none bg-transparent' required />
                            </div>
                        </div>

                        <input className=' bg-btnBgColor px-3 py-1 rounded-sm text-white mt-10 w-full max-w-[100px] hover:bg-btnHoverColor hover:scale-110 transition-all mx-auto block' type="submit" value="Sing Up" />
                    </div>
                </form>
                <p className='py-5 text-white/80'>Already have an account ? <Link to={'/login'} className='text-primaryColor font-semibold hover:underline'>Login</Link></p>
            </div>
        </div>
    );
};

export default SingUp;