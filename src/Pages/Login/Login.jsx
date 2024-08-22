import React, { useContext, useState } from 'react';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import UseAxiosPublic from '../../hooks/UseAxiosPublic';
import { useDispatch } from 'react-redux';
import { setToken, setUser } from '../../store/userSlice';
import Loading from '../../components/Loading';
import { fetchUserDetails } from '../../utils/UserDetails';


const Login = () => {

    const [showPassword, setShowPassword] = useState(false)
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const axiosPublic = UseAxiosPublic()
    const dispatch = useDispatch()


    const handleLogin = async (event) => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        const loginData = { email, password };
        console.log(loginData);

        setLoading(true);

        try {
            const dataResponse = await axiosPublic.post("/signin", loginData, {
                headers: {
                    'Content-Type': 'application/json'
                },
                withCredentials: true // allows sending cookies with the request
            });

            console.log(dataResponse?.data)

            if (dataResponse?.data?.success) {
                localStorage.setItem("token", dataResponse?.data?.token);
                // dispatch(setUser(dataResponse?.data?.data))

                fetchUserDetails(setLoading, axiosPublic, dispatch, navigate)

                dispatch(setToken(dataResponse?.data?.token))
                toast.success(dataResponse?.data?.message);
                navigate('/dashboard/home');

            } else {
                toast.error(dataResponse?.data?.message);
            }
            setLoading(false);
        } catch (error) {
            setLoading(false);
            console.error("Login error:", error.response?.data || error.message);
            toast.error(error.response?.data?.message);
        }
    };

    if (loading) {
        return (
            <Loading />
        )
    }


    return (
        <div className=' w-full h-screen flex justify-center items-center md:p-4'>
            <div className='bg-primaryBgColor shadow-lg rounded-md p-5 w-full max-w-xl'>

                <h2 className='text-2xl md:text-4xl text-primaryColor font-bold text-center'>Login!</h2>


                <form className='mt-7' onSubmit={handleLogin}>
                    <div>
                        <div className='text-md mb-3'>
                            <label className='text-white' htmlFor="">Email</label>
                            <div className='bg-secondaryBgColor p-2'>
                                <input type="email" name="email" id="" placeholder='Enter your email' className='w-full h-full text-white  outline-none bg-transparent' />
                            </div>
                        </div>

                        <div className='text-md'>
                            <label className='text-white' htmlFor="">Password</label>
                            <div className='bg-secondaryBgColor p-2 flex'>
                                <input type={showPassword ? 'text' : 'password'} name="password" id="" placeholder='Enter your password' className='w-full h-full outline-none text-white bg-transparent' />
                                <div className='text-xl cursor-pointer text-white/50' onClick={() => setShowPassword(previous => !previous)}>
                                    <span>
                                        {
                                            showPassword ? <FaEyeSlash /> : <FaEye />
                                        }
                                    </span>
                                </div>
                            </div>
                            <Link to={'/forgot-password'} className='flex justify-end mt-1 text-sm text-white/50 hover:underline hover:text-red-500'>Forgot password ?</Link>
                        </div>
                        <input className=' bg-primaryColor px-3 py-1 rounded-sm text-white mt-5 w-full max-w-[100px] hover:bg-btnHoverColor hover:scale-110 transition-all mx-auto block' type="submit" value="Login" />
                    </div>
                </form>
                <p className='py-5 text-white/80'>Don't have account ? <Link to={'/singup'} className='text-primaryColor font-semibold hover:underline'>Sing up</Link></p>
            </div>
        </div>
    );
};

export default Login;