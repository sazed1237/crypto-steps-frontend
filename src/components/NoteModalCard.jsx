import React from 'react';
import FormattedPrice from './FormattedPrice';

const NoteModalCard = ({ tradesOnDate,
    totalTradesOnDate,
    winningTradesOnDate,
    lossTradesOnDate,
    winningPercentageOnDate,
    lossPercentageOnDate,
    netDailyPnL,
    profitFactorOnDate,
    totalVolumeOnDate }) => {
    return (
        <div className=' '>
            <div className='flex justify-between mt-8 overflow-x-auto'>

                <div className='border-r-2 space-y-4 pr-3'>
                    <div className='flex justify-between gap-10'>
                        <p className='text-gray-400 text-xs'>Total Trades</p>
                        <p className='text-xs font-bold text-black'>{totalTradesOnDate}</p>
                    </div>
                    <div className='flex justify-between gap-10'>
                        <p className='text-gray-400 text-xs'>Win rate</p>
                        <p className='text-xs font-bold text-black'>{`${winningPercentageOnDate.toFixed(2)}`}%</p>
                    </div>
                </div>

                <div className='border-r-2 space-y-4 pr-3'>
                    <div className='flex justify-between gap-10'>
                        <p className='text-gray-400 text-xs'>Winners</p>
                        <p className='text-xs font-bold text-black'>{winningTradesOnDate}</p>
                    </div>
                    <div className='flex justify-between gap-10'>
                        <p className='text-gray-400 text-xs'>Losers</p>
                        <p className='text-xs font-bold text-black'>{lossTradesOnDate}</p>
                    </div>
                </div>
                <div className='border-r-2 space-y-4 pr-3'>
                    <div className='flex justify-between gap-10'>
                        <p className='text-gray-400 text-xs'>Gross P&L</p>
                        <p className={`text-xs font-bold ${netDailyPnL > 0 ? "text-black" : "text-red-500"}`}>{<FormattedPrice amount={netDailyPnL} />}</p>
                    </div>
                    <div className='flex justify-between gap-10'>
                        <p className='text-gray-400 text-xs'>Volume</p>
                        <p className='text-xs font-bold text-black'>{totalVolumeOnDate}</p>
                    </div>
                </div>
                <div className='border-r-2 space-y-4 pr-3'>
                    <div className='flex justify-between gap-10'>
                        <p className='text-gray-400 text-xs'>Commissions</p>
                        <p className='text-xs font-bold text-black'>--</p>
                    </div>
                    <div className='flex justify-between gap-10'>
                        <p className='text-gray-400 text-xs'>Profit Factor</p>
                        <p className='text-xs font-bold text-black'>{profitFactorOnDate}</p>
                    </div>
                </div>
            </div>


            <div className="mt-10 overflow-x-auto w-full ">
                <table className="table-fixed w-full md:table table-sm text-center">
                    <thead>
                        <tr className='bg-[#ccf7ef] font-bold text-sm'>
                            <th className='w-20' >Name</th>
                            <th className='w-20' >Entry</th>
                            <th className='w-20' >Exit</th>
                            <th className='w-20' >Side</th>
                            <th className='w-20' >Volume</th>
                            <th className='w-20' >Net P&L</th>
                            <th className='w-20' >Playbook</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            tradesOnDate.map((trade, index) => (
                                <tr key={index} className='text-black'>
                                    <td>{trade?.name}</td>
                                    <td>{trade?.entryPrice}</td>
                                    <td>{trade?.exitPrice}</td>
                                    <td className='uppercase'>{trade?.condition}</td>
                                    <td>{trade?.volume}</td>
                                    <td className={`${trade?.pnl > 0 ? "text-primaryColor" : "text-red-500"}`} ><FormattedPrice amount={trade?.pnl} /></td>
                                    <td>{trade?.palybook}</td>
                                </tr>
                            ))
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default NoteModalCard;