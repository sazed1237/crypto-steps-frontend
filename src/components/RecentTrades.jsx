import React, { useState } from 'react';
import Divider from './Divider';

const RecentTrades = ({ tradeData }) => {
    const [activeTab, setActiveTab] = useState('Recent Trades');

    // Sort trades by date to get recent trades
    const sortedTrades = tradeData.sort((a, b) => new Date(b.date) - new Date(a.date));


    // Map through sorted trades and calculate Net PnL for each
    const recentTradesWithNetPnL = sortedTrades.map(trade => ({
        ...trade,
        netPnL: parseFloat(trade.pnl).toFixed(2) // Assuming pnl is already net, otherwise calculate netPnL
    }));

    // console.log("Recent Trades with Net PnL:", recentTradesWithNetPnL);

    return (
        <div>
            <div role="tablist" className="tabs tabs-bordered pt-3 px-3">
                {/* All trades */}
                <input
                    type="radio"
                    name="my_tabs_1"
                    role="tab"
                    className={`tab uppercase font-semibold ${activeTab === 'All Trades' ? 'text-accent' : ''}`}
                    aria-label="All Trades"
                    onClick={() => setActiveTab('All Trades')}
                />
                <div role="tabpanel" className="tab-content py-5">
                    <div className="overflow-x-auto">
                        <table className="table table-xs table-pin-rows text-center table-pin-cols">
                            <thead>
                                <tr className='bg-[#cff5ee] text-sm'>
                                    <td>Date</td>
                                    <td>Name</td>
                                    <td>Net PnL</td>
                                </tr>
                            </thead>
                            <tbody>

                                {
                                    tradeData.map((trade, index) => (
                                        <tr key={index}>
                                            <th>{trade?.date}</th>
                                            <td>{trade?.name}</td>
                                            <td className={`${trade?.pnl > 0 ? "text-green-500 font-semibold" : "text-red-500 font-semibold"}  `}>{trade?.pnl}</td>
                                        </tr>
                                    ))
                                }
                            </tbody>

                        </table>
                    </div>
                </div>


                {/* recent trades */}
                <input
                    type="radio"
                    name="my_tabs_1"
                    role="tab"
                    className={`tab uppercase font-semibold ${activeTab === 'Recent Trades' ? 'text-accent' : ''}`}
                    aria-label="Recent Trades"
                    onClick={() => setActiveTab('Recent Trades')}
                    defaultChecked />

                <div role="tabpanel" className="tab-content py-5">

                    <div className="overflow-x-auto">
                        <table className="table table-xs table-pin-rows text-center table-pin-cols">
                            <thead>
                                <tr className='bg-[#cff5ee] text-sm'>
                                    <td>Date</td>
                                    <td>Name</td>
                                    <td>Net PnL</td>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    recentTradesWithNetPnL.map((trade, index) => (
                                        <tr key={index}>
                                            <th>{trade?.date}</th>
                                            <td>{trade?.name}</td>
                                            <td className={`${trade?.netPnL > 0 ? "text-green-500 font-semibold" : "text-red-500 font-semibold"}  `}>{trade?.netPnL}</td>
                                        </tr>
                                    ))
                                }
                            </tbody>

                        </table>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default RecentTrades;