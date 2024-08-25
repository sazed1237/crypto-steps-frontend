import axios from 'axios';

const UseAxiosPublic = () => {
    const axiosPublic = axios.create({
        baseURL: import.meta.env.VITE_BASE_URL
        // baseURL: import.meta.env.VITE_BASE_URL_PRODUCTION
    })

    return axiosPublic
};

export default UseAxiosPublic;