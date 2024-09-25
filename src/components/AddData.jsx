import React, { useState } from 'react';
import { FaCloudUploadAlt, FaPlus } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';
import { toast } from 'react-toastify';
import ViewFullScreenImage from './ViewFullScreenImage';
import uploadImage from '../utils/UploadImage';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import UseAxiosPublic from '../hooks/UseAxiosPublic';

const AddData = () => {

    const axiosPublic = UseAxiosPublic()
    const [image, setImage] = useState({
        tradingImage: []
    })

    const [openImageFullScreen, setOpenImageFullScreen] = useState(false)
    const [imageFullScreen, setImageFullScreen] = useState('')
    const navigate = useNavigate()

    const [entryPrice, setEntryPrice] = useState(0);
    const [exitPrice, setExitPrice] = useState(0);
    const [pnl, setPnl] = useState(null);

    console.log(image)

    const handleUploadImage = async (event) => {
        const file = event.target.files[0]
        // console.log(file)
        const uploadImageCloudinary = await uploadImage(file)
        // console.log(uploadImageCloudinary.url)

        setImage((prev) => {
            return {
                ...prev,
                tradingImage: [...prev.tradingImage, uploadImageCloudinary.url]
            }
        })
        // setImage(uploadImageCloudinary.url)
    }

    const handleImageDelete = async (id) => {
        // console.log(id)

        const remainingImage = [...image.tradingImage]
        remainingImage.splice(id) // first perametar is find which one delete and second perametar how many items ar delete 

        setImage((prev) => {
            return {
                ...prev,
                tradingImage: [...remainingImage]
            }
        })
    }


    // const handleEntryPriceChange = (e) => {
    //     setEntryPrice(e.target.value);
    //     console.log(e.target.value)
    //     calculatePNL();
    // };

    // const handleExitPriceChange = (e) => {
    //     setExitPrice(parseFloat(e.target.value));
    //     calculatePNL();
    // };


    const calculatePNL = (entry, exit) => {
        console.log("entry", entry)
        console.log("exit", exit)
        setPnl((exit - entry).toFixed(2));
    };

    console.log("pnl", pnl)


    const handleSubmit = async (event) => {
        event.preventDefault()

        const form = event.target;
        const name = form.name.value;
        const entryPrice = form.entryPrice.value;
        const exitPrice = form.exitPrice.value;
        const volume = form.volume.value;
        const pnl = form.pnl.value;
        const date = moment(form.date.value).format('YYYY-MM-DD');
        const condition = form.condition.value;
        const note = form.note.value;
        const tradingImage = image.tradingImage
        // const formattedDate = 

        const tradeDetails = { name, entryPrice, exitPrice, volume, pnl, date, condition, note, tradingImage }
        // console.log(tradeDetails)


        const token = localStorage.getItem('access-token')
        // console.log(token)

        if (token) {
            const response = await axiosPublic.post("/trade", tradeDetails, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })

            console.log(response.data)

            if (response?.data.success) {
                toast.success(response?.data?.message)
                navigate('/')
            } else {
                toast.error(response?.data?.message)
            }
        }

    }

    return (
        <div className='w-full bg-white'>
            <div className='text-2xl md:text-3xl lg:text-4xl mt-8 py-5 text-center font-bold text-primaryColor '>
                <h1>Add Your Trade</h1>
            </div>
            <div className='w-full max-w-3xl p-4 mx-auto'>

                <form onSubmit={handleSubmit}>
                    <div className='grid w-full py-2 gap-2'>
                        <label className="text-primaryColor font-semibold" htmlFor="name">Name :</label>
                        <input
                            type="text"
                            name="name"
                            placeholder='Enter crypto name'
                            required

                            id="name"
                            className='bg-base-200 outline-none focus:outline-1 focus:outline-primaryColor text-black placeholder:text-black/50 w-full  p-2 rounded  ' />
                    </div>

                    <div className='grid w-full py-2 gap-2'>
                        <label className="text-primaryColor font-semibold" htmlFor="entryPrice">Entry Price :</label>
                        <input
                            type="number"
                            name="entryPrice"
                            placeholder='Entry price'
                            required
                            onChange={(e) => {
                                const value = parseFloat(e.target.value) || 0;
                                setEntryPrice(value);
                                calculatePNL(value, exitPrice); // Calculate PnL after setting entryPrice
                            }}
                            id="entryPrice"
                            className='bg-base-200 outline-none focus:outline-1 focus:outline-primaryColor text-black placeholder:text-black/50 w-full  p-2 rounded  ' />
                    </div>

                    <div className='grid w-full py-2 gap-2'>
                        <label className="text-primaryColor font-semibold" htmlFor="exitPrice">Exit Price :</label>
                        <input
                            type="number"
                            name="exitPrice"
                            placeholder='Exit price'
                            required
                            onChange={(e) => {
                                const value = parseFloat(e.target.value) || 0;
                                setExitPrice(value);
                                calculatePNL(entryPrice, value); // Calculate PnL after setting exitPrice
                            }}
                            id="exitPrice"
                            className='bg-base-200 outline-none focus:outline-1 focus:outline-primaryColor text-black placeholder:text-black/50 w-full  p-2 rounded  ' />
                    </div>

                    <div className='grid w-full py-2 gap-2'>
                        <label className="text-primaryColor font-semibold" htmlFor="volume">Volume :</label>
                        <input
                            type="number"
                            name="volume"
                            placeholder='Volume'
                            required

                            id="volume"
                            className='bg-base-200 outline-none focus:outline-1 focus:outline-primaryColor text-black placeholder:text-black/50 w-full  p-2 rounded  ' />
                    </div>

                    <div className='grid w-full py-2 gap-2'>
                        <label className="text-primaryColor font-semibold" htmlFor="pnl">PNL :</label>
                        <input
                            type="number"
                            name="pnl"
                            placeholder='Your PNL'
                            required
                            defaultValue={pnl}
                            disabled
                            id="pnl"
                            className={`bg-base-200 outline-none focus:outline-1 focus:outline-primaryColor placeholder:text-black/50 w-full  p-2 rounded ${pnl > 0 ? "text-green-600" : "text-red-600"} `} />
                    </div>

                    <div className='grid w-full py-2 gap-2'>
                        <label className="text-primaryColor font-semibold" htmlFor="date">Date :</label>
                        <input
                            type="date"
                            name="date"
                            placeholder='Earn/Loss date'
                            required
                            defaultValue={new Date().toISOString().split('T')[0]}
                            id="date"
                            className='custom-date-picker  bg-base-200 outline-none focus:outline-1 focus:outline-primaryColor text-black  w-full p-2 rounded  '
                            onClick={(e) => e.target.showPicker()}
                        />
                    </div>

                    {/* <div className='grid w-full py-2 gap-2'>
                        <label className="text-primaryColor font-semibold" htmlFor="condition">Condition :</label>
                        <input
                            type="text"
                            name="condition"
                            placeholder='Why entry this trad?'
                            required

                            id="condition"
                            className='bg-base-200 outline-none focus:outline-1 focus:outline-primaryColor text-black placeholder:text-black/50 w-full  p-2 rounded  ' />
                    </div> */}

                    <div className='grid w-full py-2 gap-2'>
                        <label className="text-primaryColor font-semibold" htmlFor="condition">Condition :</label>
                        <select
                            name="condition"
                            id="condition"
                            required
                            className='bg-base-200 outline-none focus:outline-1 focus:outline-primaryColor text-black placeholder:text-black/50 w-full p-2 rounded '
                        >
                            <option className='text-primaryLinksHoverColor bg-base-200' value="" disabled selected>Select condition</option>
                            <option className='text-primaryLinksHoverColor bg-base-200' value="LONG">LONG</option>
                            <option className='text-primaryLinksHoverColor bg-base-200' value="SHORT">SHORT</option>
                        </select>
                    </div>


                    <div className='grid w-full py-2 gap-2'>
                        <label className="text-primaryColor font-semibold" htmlFor="Image">Trad Image :</label>
                        <label className="text-primaryColor font-semibold" htmlFor="uploadImage">
                            <div onChange={handleUploadImage} className='bg-base-300 outline-none hover:outline-1 hover:outline-primaryColor text-primaryColor  placeholder:text-[#f3d7f463]  w-full flex items-center justify-center flex-col h-24 p-2 rounded  cursor-pointer'>
                                <span className='text-3xl'><FaCloudUploadAlt /></span>
                                <p><small>Upload Trade Image</small></p>
                                <input type="file" className='hidden' name="uploadImage" id="uploadImage" />
                            </div>
                        </label>
                        <div>
                            {
                                image?.tradingImage[0] ? (
                                    <div className='flex gap-2'>
                                        {
                                            image?.tradingImage.map((image, index) => {
                                                return (
                                                    <div key={index} className='relative group'>
                                                        <img
                                                            onClick={() => {
                                                                setOpenImageFullScreen(true)
                                                                setImageFullScreen(image)
                                                            }}
                                                            className='bg-slate-300 h-20 max-w-24 border cursor-pointer'
                                                            src={image}
                                                            alt="image"
                                                        />

                                                        <button
                                                            onClick={() => handleImageDelete(index)}
                                                            className='absolute top-0 right-0 text-md text-white bg-red-600 rounded-full hidden group-hover:block '
                                                        >
                                                            <IoMdClose />
                                                        </button>


                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                ) : (
                                    <p className='text-sm text-red-500'>*Please upload image</p>
                                )
                            }
                        </div>
                    </div>


                    <div className='grid w-full py-2 gap-2'>
                        <label className="text-primaryColor font-semibold" htmlFor="note">Note :</label>
                        <textarea
                            name="note"
                            placeholder='Describe the trade'
                            required
                            id="note"
                            className='bg-base-300 outline-none focus:outline-1 focus:outline-primaryColor text-black  placeholder:text-black/50 w-full p-2 rounded  h-32'
                        >

                        </textarea>
                    </div>

                    <button
                        className="bg-btnBgColor mx-auto px-2 md:px-3 py-1 my-5 rounded-sm text-white hover:bg-btnHoverColor flex items-center gap-2"
                        type="submit"
                    ><span><FaPlus /></span>Add Now</button>
                </form>
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

export default AddData;