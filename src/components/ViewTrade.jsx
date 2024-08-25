import React, { useContext, useEffect, useState } from 'react';
import { FaTrash } from 'react-icons/fa';
import { MdModeEdit } from 'react-icons/md';
import { toast } from 'react-toastify';
import ViewFullScreenImage from './ViewFullScreenImage';
import moment from 'moment';
import { Link, useNavigate } from 'react-router-dom';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import UseAxiosPublic from '../hooks/UseAxiosPublic';
import { AuthContext } from '../Providers/AuthProviders';

const ViewTrade = () => {

    const [AllTrade, setAllTrade] = useState([])
    const [openImageFullScreen, setOpenImageFullScreen] = useState(false)
    const [imageFullScreen, setImageFullScreen] = useState('')
    const navigate = useNavigate()
    const [selectedDate, setSelectedDate] = useState(null);
    const [startDate, setStartDate] = useState(new Date());
    const [loading, setLoading] = useState(false)
    const axiosPublic = UseAxiosPublic()
    const { user } = useContext(AuthContext)



    const token = localStorage.getItem('access-token');

    const fetchAllTrade = async () => {
        setLoading(true)
        const res = await axiosPublic.get(`/trades?email=${user?.email}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }); // Adjust the endpoint as needed
        setLoading(false)
        setAllTrade(res?.data?.data)
        console.log("trade data", res?.data)
    }


    const fetchTradeByDate = async () => {
        // const formattedDate = selectedDate.toISOString().split('T')[0];
        const formattedDate = moment(selectedDate).format('YYYY-MM-DD')
        // console.log("selected date", formattedDate)

        setLoading(true)
        const res = await axiosPublic.get(`/trades/${formattedDate}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }); // Adjust the endpoint as needed
        setLoading(false)
        console.log("trade data", res?.data?.data)

        if (res?.data?.success) {
            setAllTrade(res?.data?.data);
        } else {
            toast.error(res?.data?.message);
        }
    };


    useEffect(() => {
        if (selectedDate) {
            fetchTradeByDate();
        } else {
            fetchAllTrade();
        }
    }, [selectedDate]);


    const handleDelete = async (id) => {
        // console.log(id)
        setLoading(true)

        const res = await axiosPublic.delete(`/trades/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }); // Adjust the endpoint as needed
        setLoading(false)

        console.log("delete trade", res?.data)

        if (res.data.success) {
            toast.success(res.data.message)
            fetchAllTrade()
        }
    }

    const handleEditTrade = async (trade) => {
        console.log(trade)

        navigate(`/update/${trade?._id}`, { state: { tradeData: trade } })

    }



    return (
        <div>
            <div className='flex justify-between my-5 text-primaryColor items-center'>
                <p className='text-xl font-semibold '>Total Trade: {AllTrade?.length}</p>
                <h2 className='text-3xl hidden md:block font-bold'>My Trade</h2>
                <p className='text-xl font-semibold text-right'>
                    <DatePicker
                        className='bg-transparent border border-gray-400 w-1/2 text-center'
                        selected={startDate}
                        onChange={(date) => {
                            setStartDate(date);
                            setSelectedDate(date);
                        }}
                    />
                </p>
            </div>
            <div className='overflow-x-auto mx-auto'>
                <table className='w-full h-full table-fixed bg-black/50'>
                    <thead className='border-b bg-slate-300 px-2'>
                        <th className='w-5'>Sl</th>
                        <th className='w-20'>Name</th>
                        <th className='w-20'>Entry</th>
                        <th className='w-20'>Exit</th>
                        <th className='w-20'>PNL</th>
                        <th className='w-20'>Volume</th>
                        <th className='w-20'>Date</th>
                        <th className='w-20'>Condition</th>
                        <th className='w-48'>Note</th>
                        <th className='w-20'>Image</th>
                        <th className='w-20'>Action</th>
                    </thead>
                    <tbody>
                        {
                            AllTrade.map((trade, index) => <tr key={index} className='text-center border-b'>
                                <td className='text-gray-300'>{index + 1}.</td>
                                <td className='text-white font-semibold'>{trade.name}</td>
                                <td className='text-green-500'>{trade.entryPrice}</td>
                                <td className='text-orange-400'>{trade.exitPrice}</td>
                                <td className={`${trade?.pnl > 0 ? "text-green-500" : "text-red-500"}`}>{trade.pnl}</td>
                                <td className='text-gray-300'>{trade.volume}</td>
                                <td className='text-gray-300 text-sm'>{moment(trade?.date).format('YYYY-MM-DD')}</td>
                                <td className={` text-sm ${trade?.condition === "LONG" ? "text-green-500" : "text-red-500"}`}>{trade.condition}</td>
                                <td className='text-gray-300 text-sm py-1'>{trade.note}</td>
                                <td className='text-gray-300  '>
                                    <img
                                        onClick={() => {
                                            setOpenImageFullScreen(true)
                                            setImageFullScreen(trade?.tradingImage[0])
                                        }}
                                        className='h-16 max-w-20 p-2 mx-auto cursor-pointer'
                                        src={trade?.tradingImage[0]}
                                        alt="image"
                                    />
                                </td>

                                <td className=' w-full h-full flex items-center justify-center'>
                                    <button
                                        onClick={() => handleEditTrade(trade)}
                                        // to={{
                                        //     pathname: `/update/${trade?._id}`,
                                        //     state: { tradeData: trade || null }, // Ensure trade is passed or null
                                        // }}
                                        className='rounded-full text-xl p-1 text-green-600 hover:bg-green-600 hover:text-white hover:transition-all'
                                    >
                                        <MdModeEdit />
                                    </button>
                                    <button onClick={() => handleDelete(trade?._id)} className='rounded-full text-sm p-2 text-red-500 hover:bg-red-600 hover:text-white hover:transition-all '>
                                        <FaTrash />
                                    </button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>

            {/* display full screen image */}
            {
                openImageFullScreen && (
                    <ViewFullScreenImage imagURL={imageFullScreen} onClose={() => setOpenImageFullScreen(false)} />
                )
            }
        </div>
    );
};

export default ViewTrade;