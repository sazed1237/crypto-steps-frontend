import { removeUser, setUser } from "../store/userSlice";



export const fetchUserDetails = async (setLoading, axiosPublic, dispatch, navigate) => {
    setLoading(true)
    try {
        const token = localStorage.getItem("token");
        if (token) {
            const response = await axiosPublic.get('/user', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            if (response?.data?.success) {
                dispatch(setUser(response.data.data));
                // console.log("fatch user details", response?.data?.data)
                navigate('/dashboard/home')

            } else {
                dispatch(removeUser());
                navigate('/login'); // Redirect to login if not authenticated
            }
        } else {
            dispatch(removeUser());
            navigate('/login'); // Redirect to login if no token found
        }
    } catch (error) {
        console.error("Error fetching user data:", error);
        dispatch(removeUser());
        navigate('/login'); // Redirect to login on error
    } finally {
        setLoading(false)
    }
};
