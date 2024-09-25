import { Outlet, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Loading from './components/Loading';
import Header from './Shared/Header';
import Footer from './Shared/Footer';





function App() {

  const [loading, setLoading] = useState(false)


  // useEffect(() => {
  //   if (!user) {
  //     fetchUserDetails(setLoading, axiosPublic, dispatch, navigate);
  //   }
  // }, [dispatch, navigate,]);


  if (loading) {
    return (
      <Loading />
    )
  }


  return (
    <div className=''>
      <Header />
      <ToastContainer />
      <div className='min-h-screen mx-auto '>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
