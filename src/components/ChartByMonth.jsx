import React, { useEffect, useState } from 'react';
import moment from 'moment';
import {
    ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Cell,
} from 'recharts';
import Divider from './Divider';
import Loading from './Loading';


// Function to generate random colors
const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};

const ChartByMonth = ({ tradeData }) => {

    const [monthlyPnLData, setMonthlyPnLData] = useState([]);
    const [loading, setLoading] = useState(false)

    // Organize and calculate monthly P&L by month
    useEffect(() => {
        if (tradeData.length > 0) {
            setLoading(true);
            const monthlyPnLMap = tradeData.reduce((acc, trade) => {
                const tradeMonth = moment(trade.date).format('YYYY-MM');
                const pnlValue = parseFloat(trade.pnl);

                if (!acc[tradeMonth]) {
                    acc[tradeMonth] = 0;
                }

                acc[tradeMonth] += pnlValue;
                return acc;
            }, {});

            // Convert the map to an array
            const monthlyPnLArray = Object.keys(monthlyPnLMap).map(month => ({
                month,
                netMonthlyPnL: monthlyPnLMap[month],
                color: getRandomColor()
            }));

            setLoading(false);
            setMonthlyPnLData(monthlyPnLArray);
        }
    }, [tradeData]);


    if (loading) {
        return (
            <Loading />
        );
    }

    // barChart 
    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
        ${x + width / 2}, ${y}
        C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
        Z`;
    };

    return (
        <div>
            <h3 className='font-bold text-md px-7 pt-5'>Net Monthly P&L</h3>
            <Divider />
            <ResponsiveContainer width="100%" height={350}>
                <BarChart
                    width={500}
                    height={350}
                    data={monthlyPnLData}
                    margin={{
                        top: 30,
                        right: 30,
                        left: 0,
                        bottom: 10,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />

                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Bar
                        dataKey="netMonthlyPnL"
                        barSize={20}
                        fill="#8884d8"
                        label={{ position: 'top' }}
                    >
                        {monthlyPnLData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default ChartByMonth;
