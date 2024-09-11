// import React, { useEffect, useState } from 'react';
// import socket from '../socket/socket.js';
// import { FaAngleDown } from "react-icons/fa6";
// import Loading from './Loading.jsx';

// const ChatBox = ({ onClose }) => {
//     const [loading, setLoading] = useState(true);
//     const [messages, setMessages] = useState([]);
//     const [newMessage, setNewMessage] = useState('');

//     useEffect(() => {

//         try {
//             // Handle successful connection
//             socket.on('connect', () => {
//                 console.log('WebSocket connected');
//                 setLoading(false);  // Stop loading once connected
//                 socket.emit('load messages');  // Load previous messages
//             });


//             // Handle connection error
//             socket.on('connect_error', (err) => {
//                 console.error('WebSocket connection error:', err);
//                 setLoading(true);  // Show loading if there's an error
//                 setTimeout(() => {
//                     socket.connect();  // Reattempt connection
//                 }, 3000);
//             });

//             // Handle disconnection
//             socket.on('disconnect', () => {
//                 console.log('WebSocket disconnected');
//                 setLoading(true);  // Show loading when disconnected
//             });


//             // Listen for incoming chat messages
//             socket.on('chat message', (message) => {
//                 setMessages((prevMessages) => [...prevMessages, message]);
//             });


//             // Listen for previous messages when loaded
//             socket.on('previous messages', (loadedMessages) => {
//                 setMessages(loadedMessages);
//                 setLoading(false);  // Stop loading once messages are loaded
//             });


//             // Clean up on component unmount
//             return () => {
//                 socket.off('connect');
//                 socket.off('connect_error');
//                 socket.off('disconnect');
//                 socket.off('chat message');
//                 socket.off('previous messages');
//             };
//         } catch (error) {
//             console.log("err", error)
//         }

//     }, []);

//     const sendMessage = () => {
//         if (newMessage.trim()) {
//             setLoading(true);  // Set loading when sending a message
//             socket.emit('chat message', { text: newMessage }, () => {
//                 setLoading(false);  // Stop loading after the message is sent
//             });
//             setNewMessage('');
//         }
//     };

  

//     return (
//         <div className="fixed bottom-5 right-5 bg-white rounded-lg shadow-lg w-72">
//             <div className='flex items-center justify-between bg-headerBgColor w-full  py-3 px-4 text-primaryColor'>
//                 <div>
//                     <h2 className="text-xl font-semibold">Support Chat</h2>
//                     <p>App Superheros</p>
//                 </div>
//                 <button onClick={onClose} className='text-xl hover:bg-secondaryBgColor rounded-full p-2 duration-300 '> <FaAngleDown /> </button>
//             </div>

//             <div className="h-80 overflow-y-scroll px-4">
//                 {messages.map((msg, index) => (
//                     <div key={index} className="mt-2">
//                         <strong className='text-red-400'>{msg?.user}:</strong> <span>{msg?.text}</span> {/* Corrected msg.message to msg.text */}
//                         <div className="text-xs text-gray-500">{new Date(msg?.timestamp).toLocaleTimeString()}</div> {/* Formatted timestamp */}
//                     </div>
//                 ))}
//             </div>
//             <div className="mt-3 flex p-4">
//                 <input
//                     type="text"
//                     className="flex-1 border rounded p-2"
//                     placeholder="Type your message..."
//                     value={newMessage}
//                     onChange={(e) => setNewMessage(e.target.value)}
//                 />
//                 <button className="ml-2 bg-btnBgColor text-white p-2 rounded" onClick={sendMessage}>Send</button>
//             </div>
//         </div>
//     );
// };

// export default ChatBox;
