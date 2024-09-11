// import { io } from 'socket.io-client';

// const socket = io("http://localhost:5000", { 
//     auth: {
//         token: localStorage.getItem('access-token'),  // Send JWT token with connection
//     },
//     transports: ['websocket'],  // Ensure the use of WebSocket transport 
//     reconnection: true,  // Enable automatic reconnection
//     reconnectionAttempts: 5,  // Limit number of reconnection attempts
//     reconnectionDelay: 3000,  // Time between reconnection attempts (in ms)
// });
// console.log('click socket')
// socket.on('connect_error', (err) => {
//     console.error('WebSocket connection error:', err);
// });

// export default socket;
