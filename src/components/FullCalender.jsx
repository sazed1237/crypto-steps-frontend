import React, { useEffect, useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from "@fullcalendar/interaction";
import { MdEventNote } from 'react-icons/md';
import NoteModal from './NoteModal';
import FormattedPrice from './FormattedPrice';
import Loading from './Loading';

const FullCalender = ({ tradeData }) => {
    const [events, setEvents] = useState([]);
    const [selectedDate, setSelectedDate] = useState(null);
    const [loading, setLoading] = useState(false)

    // console.log('loading', loading)

    useEffect(() => {
        const fetchTrades = async () => {
            try {
                setLoading(true)
                // Group trades by date and calculate the total trades and total net PnL for each date
                const aggregatedData = tradeData.reduce((acc, trade) => {

                    const tradeDate = trade.date;

                    if (!acc[tradeDate]) {
                        acc[tradeDate] = { date: tradeDate, trades: 0, pnl: 0 };
                    }

                    acc[tradeDate].trades += 1;
                    acc[tradeDate].pnl += parseFloat(trade.pnl);
                    return acc;
                }, {});

                // Convert the aggregated data into an array
                const eventsArray = Object.values(aggregatedData);
                setLoading(false)
                setEvents(eventsArray);

            } catch (error) {
                console.error('Error fetching trades:', error);
            }
        };

        fetchTrades();
    }, [tradeData]);


    const handleEventClick = (date) => {
        setSelectedDate(date);
        setLoading(true)
        document.getElementById('my_modal_4').showModal();

        setTimeout(() => {
            setLoading(false)
        }, 1000);
    };

    const closeModal = () => {
        document.getElementById('my_modal_4').close();
    };


    const renderEventContent = (eventInfo) => (
        <div className="bg-gray-500 hover:bg-gray-600 h-full" >

            <button className='w-full h-full cursor-pointer' onClick={() => handleEventClick(eventInfo.event.startStr)}>
                <MdEventNote title='note' className="text-lg text-primaryTextColor " />

                <div className='flex flex-col items-end pr-2 pb-1 -space-y-1'>
                    <span>{eventInfo?.event?.extendedProps?.trades} trades</span>
                    <span className={`${eventInfo.event.extendedProps.pnl > 0 ? 'text-green-500' : 'text-red-500'}`}>
                        {<FormattedPrice amount={eventInfo.event.extendedProps.pnl} />}
                    </span>
                </div>

            </button>

            {/* open modal */}
            <dialog id="my_modal_4" className="modal">
                {
                    loading ? (
                        <Loading />
                    ) : (
                        <NoteModal
                            tradeData={tradeData}
                            date={selectedDate}
                            closeModal={closeModal}
                            loading={loading}
                        />
                    )
                }
            </dialog>
        </div >
    )

    return (
        <FullCalendar
            plugins={[dayGridPlugin, interactionPlugin]}
            initialView="dayGridMonth"
            events={events}
            eventContent={renderEventContent}
            viewClassNames="h-[350px]"
        />
    );
};

export default FullCalender;
