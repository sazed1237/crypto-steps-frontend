import React from 'react';
import DatePicker from 'react-datepicker';
import { FaBarsStaggered } from 'react-icons/fa6';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { removeUser } from '../../store/userSlice';
import { toast } from 'react-toastify'; // Import toast for notifications
import 'react-toastify/dist/ReactToastify.css'; // Ensure you import the toast styles

const DashboardHead = ({ startDate, setStartDate, setSelectedDate }) => {
    const user = useSelector((state) => state?.user?.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation()

    const title = location.pathname.split('/')[2]
    console.log(title)

    const handleLogout = () => {
        console.log("click")
        // Clear user details from Redux
        dispatch(removeUser());

        // Remove token from local storage
        localStorage.removeItem("token");

        // Show logout notification
        toast.info("You have been logged out.");

        // Redirect to the login page
        navigate('/login');
    };

    return (
        <div className='flex justify-between h-14 items-center bg-slate-100 px-5'>
            <label htmlFor="my-drawer-2" className="cursor-pointer drawer-button lg:hidden mr-7">
                <FaBarsStaggered className='text-xl' />
            </label>
            <div className='hidden lg:block'>
                <h3 className='capitalize text-2xl font-bold text-primaryColor'>{title}</h3>
            </div>

            <div className='flex items-center gap-x-8'>
                <p className='text-xl font-semibold text-right'>
                    <DatePicker
                        className='bg-transparent w-1/2 text-center'
                        selected={startDate}
                        onChange={(date) => {
                            setStartDate(date);
                            setSelectedDate(date);
                        }}
                    />
                </p>

                {/* Profile dropdown */}
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img alt={user?.name} src={user?.profilePic} />
                        </div>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li><button onClick={handleLogout}>Logout</button></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DashboardHead;
