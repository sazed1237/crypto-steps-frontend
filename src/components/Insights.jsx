import React, { useEffect, useState } from 'react';
import axios from 'axios';
import bitcoin from '../assets/bitcoin.jpg';

const Insights = () => {
    const [cryptoData, setCryptoData] = useState({
        bitcoin: null,
        ethereum: null
    });

    useEffect(() => {
        const fetchCryptoData = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/crypto');
                const bitcoinData = response.data.find(coin => coin.id === 'bitcoin');
                const ethereumData = response.data.find(coin => coin.id === 'ethereum');
                
                // console.log(bitcoinData)

                setCryptoData({
                    bitcoin: bitcoinData,
                    ethereum: ethereumData
                });
            } catch (error) {
                console.error('Error fetching the data:', error);
            }
        };

        // Fetch data initially and then every second
        fetchCryptoData();
        const intervalId = setInterval(fetchCryptoData, 5000); // Poll API every second (1000ms) 

        // Cleanup interval on component unmount
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className='max-w-full mx-auto text-center bg-primaryColor/5 py-10'>
            <div className='space-y-3'>
                <p className='text-sm text-primaryTextColor'>Crypto Insight</p>
                <h2 className='text-headerBgColor text-2xl font-semibold'>Insights into the Crypto Landscape</h2>
                <p className='text-xs text-black/50 mx-auto w-1/2'>
                    Stay updated with the latest trends in Bitcoin and Ethereum markets, including price changes, market dominance, and more.
                </p>
            </div>

            <div className='flex items-center justify-center gap-x-10 py-8'>
                {/* Bitcoin Details */}
                <div>
                    {cryptoData.bitcoin ? (
                        <>
                            <h2 className='text-2xl text-primaryTextColor/90 font-semibold'>
                                ${cryptoData.bitcoin.current_price.toLocaleString()}
                            </h2>
                            <p className='text-sm text-black'>Bitcoin Price</p>
                            <p className='text-xs text-black/60'>
                                24h Change: {cryptoData.bitcoin.price_change_percentage_24h.toFixed(2)}%
                            </p>
                        </>
                    ) : (
                        <p>Loading...</p>
                    )}
                </div>

                {/* Ethereum Details */}
                <div>
                    {cryptoData.ethereum ? (
                        <>
                            <h2 className='text-2xl text-primaryTextColor/90 font-semibold'>
                                ${cryptoData.ethereum.current_price.toLocaleString()}
                            </h2>
                            <p className='text-sm text-black'>Ethereum Price</p>
                            <p className='text-xs text-black/60'>
                                24h Change: {cryptoData.ethereum.price_change_percentage_24h.toFixed(2)}%
                            </p>
                        </>
                    ) : (
                        <p>Loading...</p>
                    )}
                </div>
            </div>

            {/* Updated section to match the style */}
            <div className='max-w-5xl h-[300px] mx-auto rounded-lg bg-gradient-to-r from-primaryColor to-[#985cff]'>
                <div className='h-full flex items-center justify-between p-10'>
                    <div className='text-start space-y-3 w-1/2'>
                        <h3 className='text-3xl text-white font-semibold'>Unlock Your Crypto Potential</h3>
                        <p className='text-sm text-white/75'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nunc lacinia viverra orci.
                        </p>
                        <button className='px-6 py-2 bg-white text-black hover:bg-black hover:text-white rounded-full font-semibold duration-300'>
                            Get Started Now
                        </button>
                    </div>

                    <div className='w-1/3 h-full'>
                        <img className='w-full h-full object-cover rounded-lg' src={bitcoin} alt='Crypto' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Insights;
