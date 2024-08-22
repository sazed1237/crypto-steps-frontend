import React, { useEffect, useState } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, PieChart, Pie, Sector, ResponsiveContainer, Legend, Tooltip, LabelList, Text } from 'recharts';
import Divider from './Divider';
import moment from 'moment';
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


const DashboardChart = ({ tradeData }) => {
    const [dailyPnLData, setDailyPnLData] = useState([]);
    const [loading, setLoading] = useState(false)

    // Organize and calculate daily P&L by date
    useEffect(() => {
        if (tradeData.length > 0) {
            setLoading(true)
            const dailyPnLMap = tradeData.reduce((acc, trade) => {
                const tradeDate = moment(trade.date).format('YYYY-MM-DD');
                const pnlValue = parseFloat(trade.pnl);

                if (!acc[tradeDate]) {
                    acc[tradeDate] = 0;
                }

                acc[tradeDate] += pnlValue;
                return acc;
            }, {});

            // Convert the map to an array
            const dailyPnLArray = Object.keys(dailyPnLMap).map(date => ({
                date,
                netDailyPnL: dailyPnLMap[date],
                color: getRandomColor()
            }));

            setLoading(false)
            setDailyPnLData(dailyPnLArray);
        }
    }, [tradeData]);


    if (loading) {
        return (
            <Loading />
        )
    }


    // barChart 
    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
        ${x + width / 2}, ${y}
        C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
        Z`;
    };

    const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;

        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };

    return (
        <div>
            <h3 className='font-bold text-md px-7 pt-5'>Net Daily P&L</h3>
            <Divider />
            <ResponsiveContainer width="100%" height={350}>
                <BarChart
                    width={500}
                    height={350}
                    data={dailyPnLData}
                    margin={{
                        top: 30,
                        right: 30,
                        left: 0,
                        bottom: 10,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />

                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="netDailyPnL" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                        {dailyPnLData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default DashboardChart;