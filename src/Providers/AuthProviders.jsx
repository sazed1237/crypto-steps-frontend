// import React, { createContext, useEffect } from 'react';
// import UseAxiosPublic from '../hooks/UseAxiosPublic';
// import { useDispatch } from 'react-redux';


// export const Context = createContext()

// const AuthProviders = ({ children }) => {

//     const dispatch = useDispatch()
//     const [user, setUser] = useState()
//     const [loading, setLoading] = useState(true)
//     const axiosPublic = UseAxiosPublic()


//     useEffect(() => {
//         const token = localStorage.getItem('token');
//         if(token){
//             dispatch()
//         }
//     }, [])


//     const singup = () => {

//     }

//     const login = () => {

//     }

//     const logout = () => {

//     }


//     const authInfo = {
//         user,
//         loading,
//         singup,
//         login,
//         logout,

//     }

//     return (
//         <Context.Provider value={authInfo}>
//             {children}
//         </Context.Provider>
//     );
// };

// export default AuthProviders;