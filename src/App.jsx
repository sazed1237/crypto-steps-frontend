import { Outlet, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Loading from './components/Loading';




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
      <ToastContainer />
      <div className='min-h-screen mx-auto '>
        <Outlet />
      </div>
    </div>
  );
}

export default App;
