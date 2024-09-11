import React, { useState } from 'react';
import { MdEventNote } from 'react-icons/md';
import Divider from './Divider';
import FormattedPrice from './FormattedPrice';
import moment from 'moment';
import NoteViewDetails from './NoteViewDetails';
import NoteModalCard from './NoteModalCard';
import Loading from './Loading';

const NoteModal = ({ tradeData, date, closeModal }) => {

    const [toggleModal, setToggleModal] = useState(false)
    const [loading, setLoading] = useState(false)


    // Filter trades for the specified date
    const tradesOnDate = tradeData.filter(trade => trade?.date === date)
    const totalTradesOnDate = tradesOnDate.length;
    const winningTradesOnDate = tradesOnDate.filter(trade => parseFloat(trade.pnl) > 0).length
    const lossTradesOnDate = tradesOnDate.filter(trade => parseFloat(trade.pnl) < 0).length
    const winningPercentageOnDate = totalTradesOnDate > 0 ? (winningTradesOnDate / totalTradesOnDate) * 100 : 0;
    const lossPercentageOnDate = totalTradesOnDate > 0 ? (lossTradesOnDate / totalTradesOnDate) * 100 : 0;
    const netDailyPnL = tradesOnDate.reduce((total, trade) => total + parseFloat(trade.pnl), 0).toFixed(2);


    // Calculate the sum of positive PnL and negative PnL
    const positivePnLOnDate = tradesOnDate
        .filter(trade => parseFloat(trade.pnl) > 0)
        .reduce((total, trade) => total + parseFloat(trade.pnl), 0);

    const negativePnLOnDate = tradesOnDate
        .filter(trade => parseFloat(trade.pnl), 0)
        .reduce((total, trade) => total + Math.abs(parseFloat(trade.pnl)), 0);


    // Calculate the Profit Factor
    const profitFactorOnDate = negativePnLOnDate > 0 ? (positivePnLOnDate / negativePnLOnDate).toFixed(2) : "Infinity";

    // Calculate total Volume
    const totalVolumeOnDate = tradesOnDate
        .reduce((total, trade) => total + parseFloat(trade.volume), 0);


    if (loading) {
        return (
            <div className="modal-box w-11/12 max-w-5xl rounded-md flex justify-center items-center">
                <Loading />
            </div>
        )
    }


    return (
        <div className="modal-box w-11/12 max-w-5xl rounded-md ">

            <div className='flex justify-between'>
                <div className='flex gap-2 md:gap-6'>
                    <h3 className="font-bold md:text-lg text-headerBgColor">{moment(date).format("dddd, MMM DD, YYYY")}</h3>
                    <h3 className={`font-bold md:text-lg ${netDailyPnL > 0 ? "text-primaryTextColor" : "text-red-500"}`}>Net P&L <FormattedPrice amount={netDailyPnL} /></h3>
                </div>

                <button
                    onClick={() => setToggleModal(true)}
                    className='md:flex items-center hidden gap-1 bg-btnBgColor px-3 py-1 rounded-md hover:bg-btnHoverColor duration-300'>
                    <MdEventNote /> View Note
                </button>

            </div>
            {/* <Divider /> */}



            {!toggleModal ? (
                <NoteModalCard
                    tradesOnDate={tradesOnDate}
                    totalTradesOnDate={totalTradesOnDate}
                    winningTradesOnDate={winningTradesOnDate}
                    lossTradesOnDate={lossTradesOnDate}
                    winningPercentageOnDate={winningPercentageOnDate}
                    lossPercentageOnDate={lossPercentageOnDate}
                    netDailyPnL={netDailyPnL}
                    profitFactorOnDate={profitFactorOnDate}
                    totalVolumeOnDate={totalVolumeOnDate}
                />
            ) : (
                <NoteViewDetails
                    tradesOnDate={tradesOnDate}
                    closeModal={closeModal}
                />
            )}

            <div className="modal-action ">
                <div
                    onClick={closeModal}
                    type='button'
                    className='flex items-center gap-1 bg-red-400 px-3 py-1 rounded-md hover:bg-red-600 duration-300'>
                    Cancel
                </div>

                <div
                    onClick={() => setToggleModal(prevState => !prevState)}
                    className='flex items-center gap-1 bg-btnBgColor px-3 py-1 rounded-md hover:bg-btnHoverColor duration-300'>
                    {toggleModal ? 'Back' : 'View Details'}
                </div>
            </div>

        </div>

    );
};

export default NoteModal;