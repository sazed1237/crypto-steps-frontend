import React, { useContext, useEffect, useState } from 'react';
import { useQuery } from "react-query";
import { Cell, PieChart, Pie, } from 'recharts';
import UseAxiosPublic from '../../hooks/UseAxiosPublic';
import { FcComboChart } from "react-icons/fc";
import FormattedPrice from '../../components/FormattedPrice';
import moment from 'moment';
import DashboardChart from '../../components/DashboardChart';
import RecentTrades from '../../components/RecentTrades';
import FullCalender from '../../components/FullCalender';
import Loading from '../../components/Loading';
import { AuthContext } from '../../Providers/AuthProviders';
import ChartByMonth from '../../components/ChartByMonth';




const DashboardHome = ({ startDate }) => {
    const { user } = useContext(AuthContext)
    const axiosPublic = UseAxiosPublic()
    const [loading, setLoading] = useState(false)


    const formattedDate = moment(startDate).format('YYYY-MM-DD')
    // console.log("startDate in HOME", formattedDate)

    // console.log(user?.email)

    const { data: tradeData = [] } = useQuery({
        queryKey: ['user-trade-stats', user?.email], // Use user ID in the query key
        queryFn: async () => {
            setLoading(true)
            const token = localStorage.getItem('access-token');
            const res = await axiosPublic.get(`/trades?email=${user?.email}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }); // Adjust the endpoint as needed
            setLoading(false)
            // console.log("trade data", res?.data)
            return res?.data?.data;
        },
        enabled: !!user?.email, // Ensure the query only runs when user email is available

    });




    // Calculate positive PnL sum
    const positivePnL = tradeData
        .filter(trade => trade.pnl > 0)
        .reduce((acc, trade) => acc + parseFloat(trade.pnl), 0);
    // console.log("positive pnl", positivePnL)


    // Calculate negative PnL sum
    const negativePnL = tradeData
        .filter(trade => trade.pnl < 0)
        .reduce((acc, trade) => acc + Math.abs(parseFloat(trade.pnl)), 0);
    // console.log("negative pnl", negativePnL)


    // Calculate total PnL (positive - absolute value of negative)
    const totalPnL = (positivePnL - negativePnL).toFixed(2); // Adding because negativePnL is already negative

    // Total Trades
    const totalTrades = tradeData.length;

    // Total Trade Wins (pnl > 0)
    const totalWins = tradeData.filter(trade => parseFloat(trade.pnl) > 0).length;
    // Total Trade Losses (pnl < 0)
    const totalLosses = tradeData.filter(trade => parseFloat(trade.pnl) < 0).length;

    // Winning Percentage
    const winPercentage = totalTrades > 0 ? (totalWins / totalTrades) * 100 : 0;
    const lossPercentage = totalTrades > 0 ? (totalLosses / totalTrades) * 100 : 0

    // Calculate Profit Factor 
    const profitFactor = negativePnL > 0 ? (positivePnL / negativePnL).toFixed(2) : 0;
    const lossFactor = positivePnL > 0 ? (negativePnL / positivePnL).toFixed(2) : 0;

    // Calculate average PnL for win/loss trades
    const averageWinPnL = totalWins > 0 ? (positivePnL / totalWins) : 0;
    const averageLossPnL = totalLosses > 0 ? (negativePnL / totalLosses) : 0;

    // Calculate win and loss percentages for the bar widths
    const totalPnLForBar = (averageWinPnL + averageLossPnL);
    const avgWinPercentage = (averageWinPnL / totalPnLForBar) * 100
    const avgLossPercentage = (averageLossPnL / totalPnLForBar) * 100


    // Filter trades for the specified date
    const tradesOnDate = tradeData.filter(trade => trade?.date === formattedDate)
    const totalTradesOnDate = tradesOnDate.length;
    const winningTradesOnDate = tradesOnDate.filter(trade => parseFloat(trade.pnl) > 0).length
    const lossTradesOnDate = tradesOnDate.filter(trade => parseFloat(trade.pnl) < 0).length
    const winningPercentageOnDate = totalTradesOnDate > 0 ? (winningTradesOnDate / totalTradesOnDate) * 100 : 0;
    const lossPercentageOnDate = totalTradesOnDate > 0 ? (lossTradesOnDate / totalTradesOnDate) * 100 : 0;
    // Calculate NET Daily P&L
    const netDailyPnL = tradesOnDate.reduce((total, trade) => total + parseFloat(trade.pnl), 0).toFixed(2);


    //  pie chart data
    const data = [
        { name: 'Group A', value: winPercentage, colors: "#00C49F" },
        { name: 'Group B', value: lossPercentage, colors: "red" },
    ];

    // Ensure profitFactor and lossFactor are numbers for the chart
    const profitFactorValue = isFinite(profitFactor) ? parseFloat(profitFactor) : 1;
    const lossFactorValue = isFinite(lossFactor) ? parseFloat(lossFactor) : 1;

    // Updated profitFactorData with numeric values
    const profitFactorData = [
        { name: 'Group A', value: profitFactorValue, colors: "#00C49F" },
        { name: 'Group B', value: lossFactorValue, colors: "red" },
    ];


    const dayWins = [
        { name: 'Group A', value: winningPercentageOnDate, colors: "#00C49F" },
        { name: 'Group B', value: lossPercentageOnDate, colors: "red" },
    ];



    if (loading) {
        return (
            <Loading />
        )
    }

    return (
        <section className=''>
            {/* <h2 className="text-2xl py-4 font-medium">Hi, Welcome back : <span className='text-primaryColor font-bold'>{user?.displayName}</span></h2> */}

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 bg-base-200 border-none ">

                <div className="stat bg-white text-primaryTextColor rounded ">
                    <div className="stat-figure text-secondary">
                        <FcComboChart className="text-5xl text-white "></FcComboChart>
                    </div>
                    <div className="stat-title">Net P&L</div>
                    <div className="stat-value"><FormattedPrice amount={totalPnL} /> </div>
                    {/* <div className="stat-desc">Jan 1st - Feb 1st</div> */}
                </div>

                <div className="stat bg-white rounded ">
                    <div className="stat-figure text-secondary relative">
                        <PieChart width={100} height={100}>
                            <Pie
                                data={data}
                                cx={50}  // Center X-coordinate
                                cy={50}  // Center Y-coordinate
                                startAngle={180}  // Start angle for half-circle
                                endAngle={0}  // End angle for half-circle
                                innerRadius={30}  // Inner radius for the pie
                                outerRadius={40}  // Outer radius for the pie
                                fill="#8884d8"
                                dataKey="value"
                            >
                                {data.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={entry.colors} />
                                ))}
                            </Pie>
                        </PieChart>

                        {/* Labels and Values */}
                        <div className='absolute top-14 left-3 text-xs text-center bg-[#d8fcf5] px-1 rounded-lg'>
                            <div className='text-[#00C49F]' >{totalWins} </div>
                        </div>

                        <div className='absolute top-14 left-20 text-center text-xs bg-red-100 px-1 rounded-lg'>
                            <div className='text-red-600'>{totalLosses}</div>
                        </div>


                    </div>
                    <div className="stat-title">Trade Win %</div>
                    <div className="stat-value">{`${winPercentage.toFixed(2)}`}%</div>
                    {/* <div className="stat-desc">↗︎ 400 (22%)</div> */}
                </div>

                <div className="stat bg-white rounded ">
                    <div className="stat-figure text-secondary relative">
                        <PieChart width={100} height={100}>
                            <Pie
                                data={profitFactorData}
                                cx={50}  // Center X-coordinate
                                cy={50}  // Center Y-coordinate
                                innerRadius={30}  // Inner radius for the pie
                                outerRadius={40}  // Outer radius for the pie
                                fill="#8884d8"
                                dataKey="value"
                            >
                                {profitFactorData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={entry.colors} />
                                ))}
                            </Pie>
                        </PieChart>


                    </div>
                    <div className="stat-title">Profit Factor</div>
                    <div className="stat-value">{profitFactor}</div>
                    {/* <div className="stat-desc">↗︎ 400 (22%)</div> */}
                </div>


                <div className="stat bg-white rounded ">
                    <div className="stat-figure text-secondary relative">
                        <PieChart width={100} height={100}>
                            <Pie
                                data={dayWins}
                                cx={50}  // Center X-coordinate
                                cy={50}  // Center Y-coordinate
                                startAngle={180}  // Start angle for half-circle
                                endAngle={0}  // End angle for half-circle
                                innerRadius={30}  // Inner radius for the pie
                                outerRadius={40}  // Outer radius for the pie
                                fill="#8884d8"
                                dataKey="value"
                            >
                                {dayWins.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={entry.colors} />
                                ))}
                            </Pie>
                        </PieChart>

                        {/* Labels and Values */}
                        <div className='absolute top-14 left-3 text-xs text-center bg-[#d8fcf5] px-1 rounded-lg'>
                            <div className='text-[#00C49F]' >{winningTradesOnDate} </div>
                        </div>

                        <div className='absolute top-14 left-20 text-center text-xs bg-red-100 px-1 rounded-lg'>
                            <div className='text-red-600'>{lossTradesOnDate}</div>
                        </div>

                    </div>
                    <div className="stat-title">Day Wins %</div>
                    <div className="stat-value">{`${winningPercentageOnDate.toFixed(2)}%`}</div>
                    {/* <div className="stat-desc">↘︎ 90 (14%)</div> */}
                </div>

                <div className="stat bg-white rounded">

                    <div className="stat-title">Avg win/loss trade</div>
                    <div className="stat-value">
                        <FormattedPrice amount={averageWinPnL} />
                    </div>

                    <div className=" text-secondary relative">

                        {/* Responsive Bar */}
                        <div className="mt-2 flex items-center w-full h-3 bg-gray-200 rounded overflow-hidden">
                            <div
                                className="bg-primaryTextColor h-full transition-all duration-1000 ease-in-out"
                                style={{
                                    width: `${avgWinPercentage}%`,
                                }}
                            />
                            <div
                                className="bg-red-600 h-full transition-all duration-1000 ease-in-out"
                                style={{
                                    width: `${avgLossPercentage}%`,
                                }}
                            />
                        </div>


                        <div className="flex justify-between">
                            <label htmlFor="" className="text-primaryColor">
                                <FormattedPrice amount={averageWinPnL} />
                            </label>
                            <label htmlFor="" className="text-red-600">
                                -<FormattedPrice amount={averageLossPnL} />
                            </label>
                        </div>
                    </div>


                </div>

            </div>



            <div className='md:flex mt-10 gap-5 md:h-[500px] '>
                <div className='w-full h-[450px] bg-white p-3' >
                    <FullCalender tradeData={tradeData} />
                </div>

                <div className='w-full h-[450px] bg-white my-5 md:my-0' >
                    <RecentTrades tradeData={tradeData} />
                </div>
            </div>

            <div className='md:flex  md:h-[500px] gap-5 '>
                {/* for barChart */}
                <div className='w-full h-[400px] bg-white'>
                    <DashboardChart tradeData={tradeData} />
                </div>

                {/* for PieChart */}
                <div className='w-full h-[400px] bg-white my-5 md:my-0' >
                    <ChartByMonth tradeData={tradeData} />
                </div>
            </div>



        </section>
    );
};

export default DashboardHome;