import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import uploadImage from '../utils/UploadImage';
import { FaCloudUploadAlt, FaPlus } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';
import { toast } from 'react-toastify';
import moment from 'moment';

const EditTrade = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const { tradeData } = location.state || {}
    console.log(tradeData)



    const [image, setImage] = useState({
        tradingImage: [tradeData.tradingImage]
    })

    const [openImageFullScreen, setOpenImageFullScreen] = useState(false)
    const [imageFullScreen, setImageFullScreen] = useState('')

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

        const tradeDetails = { name, entryPrice, exitPrice, volume, pnl, date, condition, note, tradingImage }
        // console.log(tradeDetails)


        const fetchResponse = await fetch(`https://crypto-steps-backend.vercel.app/update/${tradeData?._id}`, {
            method: "PUT",
            credentials: 'include',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(tradeDetails)
        })
        const data = await fetchResponse.json()
        console.log(data)
        if (data.success) {
            toast.success(data.message)
            navigate('/')
        } else {
            toast.error(data.message)
        }
    }

    return (
        <div className='w-full'>
            <div className='text-2xl md:text-3xl lg:text-4xl my-8 text-center font-bold text-primaryColor '>
                <h1>Update Your Trade</h1>
            </div>
            <div className='w-full max-w-3xl bg-primaryBgColor p-4 mx-auto'>

                <form onSubmit={handleSubmit}>
                    <div className='grid w-full py-2 gap-2'>
                        <label className="text-titleColor/80" htmlFor="name">Name :</label>
                        <input
                            type="text"
                            name="name"
                            placeholder='Enter crypto name'
                            required
                            defaultValue={tradeData.name}
                            id="name"
                            className='bg-txtSelectBgColor/5 outline-none focus:outline-1 focus:outline-primaryColor text-titleColor placeholder:text-[#f3d7f463] w-full  p-2 rounded  ' />
                    </div>

                    <div className='grid w-full py-2 gap-2'>
                        <label className="text-titleColor/80" htmlFor="entryPrice">Entry Price :</label>
                        <input
                            type="number"
                            name="entryPrice"
                            placeholder='Entry price'
                            required
                            defaultValue={tradeData.exitPrice}
                            id="entryPrice"
                            className='bg-txtSelectBgColor/5 outline-none focus:outline-1 focus:outline-primaryColor text-titleColor  placeholder:text-[#f3d7f463] w-full p-2 rounded  ' />
                    </div>

                    <div className='grid w-full py-2 gap-2'>
                        <label className="text-titleColor/80" htmlFor="exitPrice">Exit Price :</label>
                        <input
                            type="number"
                            name="exitPrice"
                            placeholder='Exit price'
                            required
                            defaultValue={tradeData.exitPrice}
                            id="exitPrice"
                            className='bg-txtSelectBgColor/5 outline-none focus:outline-1 focus:outline-primaryColor text-titleColor  placeholder:text-[#f3d7f463] w-full p-2 rounded  ' />
                    </div>

                    <div className='grid w-full py-2 gap-2'>
                        <label className="text-titleColor/80" htmlFor="volume">Volume :</label>
                        <input
                            type="number"
                            name="volume"
                            placeholder='Volume'
                            required
                            defaultValue={tradeData.volume}
                            id="volume"
                            className='bg-txtSelectBgColor/5 outline-none focus:outline-1 focus:outline-primaryColor text-titleColor  placeholder:text-[#f3d7f463] w-full p-2 rounded  ' />
                    </div>

                    <div className='grid w-full py-2 gap-2'>
                        <label className="text-titleColor/80" htmlFor="pnl">PNL :</label>
                        <input
                            type="number"
                            name="pnl"
                            placeholder='Earn/Loss PNL'
                            required
                            defaultValue={tradeData.pnl}
                            id="pnl"
                            className='bg-txtSelectBgColor/5 outline-none focus:outline-1 focus:outline-primaryColor text-titleColor  placeholder:text-[#f3d7f463] w-full p-2 rounded  ' />
                    </div>

                    <div className='grid w-full py-2 gap-2'>
                        <label className="text-titleColor/80" htmlFor="date">Date :</label>
                        <input
                            type="date"
                            name="date"
                            placeholder='Earn/Loss date'
                            required

                            id="date"
                            className='custom-date-picker bg-txtSelectBgColor/5 outline-none focus:outline-1 focus:outline-primaryColor text-titleColor  placeholder:text-[#f3d7f463] w-full p-2 rounded  ' />
                    </div>

                    {/* <div className='grid w-full py-2 gap-2'>
                        <label className="text-titleColor/80" htmlFor="condition">Condition :</label>
                        <input
                            type="text"
                            name="condition"
                            placeholder='Why entry this trad?'
                            required
                            defaultValue={tradeData.condition}
                            id="condition"
                            className='bg-txtSelectBgColor/5 outline-none focus:outline-1 focus:outline-primaryColor text-titleColor  placeholder:text-[#f3d7f463] w-full p-2 rounded  ' />
                    </div> */}

                    <div className='grid w-full py-2 gap-2'>
                        <label className="text-titleColor/80" htmlFor="condition">Condition :</label>
                        <select
                            name="condition"
                            id="condition"
                            required
                            defaultValue={tradeData.condition}
                            className='bg-txtSelectBgColor/5 outline-none focus:outline-1 focus:outline-primaryColor text-titleColor placeholder:text-[#f3d7f463] w-full p-2 rounded '
                        >
                            <option className='text-primaryLinksHoverColor bg-headerBgColor' value="" disabled selected>Select condition</option>
                            <option className='text-primaryLinksHoverColor bg-headerBgColor' value="bullish">Bullish</option>
                            <option className='text-primaryLinksHoverColor bg-headerBgColor' value="bearish">Bearish</option>
                        </select>
                    </div>


                    <div className='grid w-full py-2 gap-2'>
                        <label className="text-titleColor/80" htmlFor="Image">Trad Image :</label>
                        <label className="text-titleColor/80" htmlFor="uploadImage">
                            <div onChange={handleUploadImage} className='bg-txtSelectBgColor/5 outline-none hover:outline-1 hover:outline-primaryColor text-primaryColor  placeholder:text-[#f3d7f463]  w-full flex items-center justify-center flex-col h-24 p-2 rounded  cursor-pointer'>
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
                                                            defaultValue={tradeData.tradingImage[0]}
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
                        <label className="text-titleColor/80" htmlFor="note">Note :</label>
                        <textarea
                            name="note"
                            placeholder='Describe the trade'
                            required
                            id="note"
                            defaultValue={tradeData.note}
                            className='bg-txtSelectBgColor/5 outline-none focus:outline-1 focus:outline-primaryColor text-titleColor  placeholder:text-[#f3d7f463] w-full p-2 rounded  h-32'
                        >

                        </textarea>
                    </div>

                    <button
                        className="bg-btnBgColor mx-auto px-2 md:px-3 py-1 my-5 rounded-sm text-white hover:bg-btnHoverColor flex items-center gap-2"
                        type="submit"
                    ><span><FaPlus /></span>Update Now</button>
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

export default EditTrade;