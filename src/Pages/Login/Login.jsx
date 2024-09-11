import React, { useContext, useEffect, useState } from 'react';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Loading from '../../components/Loading';
import { AuthContext } from '../../Providers/AuthProviders';
import SocialLogin from './SocialLogin';


const Login = () => {

    const [showPassword, setShowPassword] = useState(false)
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const { signIn } = useContext(AuthContext)
    const { user } = useContext(AuthContext)


    console.log("user in login", user)


    const handleLogin = async (event) => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        const loginData = { email, password };
        console.log(loginData);


        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log("login user", user)
                toast.success('Login Successful ');
                navigate('/');
            })
            .catch((error) => {
                toast.error(error.message || "An error occurred during sign-in");
                console.error('Error during sign-in:', error);
            });
    };


    useEffect(() => {

        if (!user) {
            handleLogin()
        } else {
            navigate('/')
        }

    }, [user])


    if (loading) {
        return (
            <Loading />
        )
    }


    return (
        <div className=' w-full h-screen bg-secondaryBgColor flex justify-center items-center md:p-4'>
            <div className='bg-primaryBgColor shadow-lg rounded-md p-5 w-full max-w-xl'>

                <h2 className='text-2xl md:text-4xl text-primaryColor font-bold text-center'>Login!</h2>


                <form className='mt-7' onSubmit={handleLogin}>
                    <div>
                        <div className='text-md mb-3'>
                            <label className='text-white' htmlFor="email">Email</label>
                            <div className='bg-secondaryBgColor '>
                                <input type="email" name="email" id="email" placeholder='Enter your email' className='w-full h-full text-white  outline-none bg-transparent p-2' />
                            </div>
                        </div>

                        <div className='text-md'>
                            <label className='text-white' htmlFor="password">Password</label>
                            <div className='bg-secondaryBgColor flex'>
                                <input type={showPassword ? 'text' : 'password'} name="password" id="password" placeholder='Enter your password' className='w-full h-full outline-none text-white bg-transparent p-2' />
                                <div className='text-xl flex items-center px-2 cursor-pointer text-white/50' onClick={() => setShowPassword(previous => !previous)}>
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
                <div className='w-8/12 mx-auto'>
                    <SocialLogin />
                </div>
            </div>
        </div>
    );
};

export default Login;