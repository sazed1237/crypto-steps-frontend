import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './Shared/Header'
import Footer from './Shared/Footer'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {


  return (
    <div className='bg-primaryBgColor'>
      <ToastContainer />
      <Header />
      <div className='container min-h-screen mx-auto px-4 lg:px-0 '>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default App
