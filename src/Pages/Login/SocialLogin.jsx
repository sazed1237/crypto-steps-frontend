import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import UseAxiosPublic from '../../hooks/UseAxiosPublic';
import { AuthContext } from '../../Providers/AuthProviders';
import { FcGoogle } from 'react-icons/fc';
import { BsFacebook } from 'react-icons/bs';
import { toast } from 'react-toastify';

const SocialLogin = () => {


    const { googleSignIn, facebookSingIn } = useContext(AuthContext)
    const axiosPublic = UseAxiosPublic()
    const navigate = useNavigate()



    const handleGoogleSingIn = () => {
        googleSignIn()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)

                // user entry in the database
                const userInfo = {
                    name: loggedUser?.displayName,
                    email: loggedUser?.email,
                    photoURL: loggedUser?.photoURL,
                    role: "GENERAL"
                }

                axiosPublic.post('/user', userInfo)
                    .then(res => {
                        console.log(res?.data)
                        toast.success('Login Successful')
                        navigate('/')
                    })
            })
            .catch((error) => {
                toast.error(error.message || "An error occurred during sign-in");
                console.error('Error during sign-in:', error);
            });
    }


    const handleFacebookSignIn = () => {
        facebookSingIn()
            .then((result) => {
                const user = result.user;
                console.log('User info:', user);

                // The access token can be used to call the Graph API
                const accessToken = result._tokenResponse.oauthAccessToken;
                console.log(accessToken)

                // Facebook Graph API URL to get the profile picture
                const pictureURL = `https://graph.facebook.com/${user.providerData[0].uid}/picture?type=large&access_token=${accessToken}`;

                // console.log(pictureURL)

                // user entry in the database
                const userInfo = {
                    name: user?.displayName,
                    email: user?.email,
                    photoURL: pictureURL
                }

                axiosPublic.post('/user', userInfo)
                    .then(res => {
                        console.log(res.data)
                        toast.success('Login Successful')
                        navigate('/')
                    })


            })
            .catch((error) => {
                console.error('Error during sign-in:', error);
            });
    }


    return (
        <div>
            <div className="divider divider-accent text-white">OR</div>

            <div className='space-y-4'>
                <div className=' flex border rounded-full pl-1 py-1 '>
                    <BsFacebook className='text-2xl text-blue-600 bg-white rounded-full'></BsFacebook>
                    <button onClick={handleFacebookSignIn} className=' flex-1 justify-center text-center hover:text-primaryColor duration-200 hover:scale-105 text-white items-center'> Continue with Facebook </button>
                </div>
                <div className='flex border rounded-full pl-1 py-1'>
                    <FcGoogle className='text-2xl'></FcGoogle>
                    <button onClick={handleGoogleSingIn} className=' flex-1 justify-center hover:text-primaryColor duration-200 hover:scale-105 text-white text-center items-center'> Continue with Gmail </button>
                </div>
            </div>
        </div>
    );
};

export default SocialLogin;

