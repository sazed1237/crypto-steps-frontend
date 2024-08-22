import { Outlet, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeUser, setUser } from './store/userSlice';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import UseAxiosPublic from './hooks/UseAxiosPublic';
import Loading from './components/Loading';
import { fetchUserDetails } from './utils/UserDetails';




function App() {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const axiosPublic = UseAxiosPublic();
  const [loading, setLoading] = useState(false)
  const { user } = useSelector((state) => state.user)

  console.log(user)



  useEffect(() => {
    fetchUserDetails(setLoading, axiosPublic, dispatch, navigate);
  }, [dispatch, navigate,]);


  if (loading) {
    return (
      <Loading />
    )
  }


  return (
    <div className='bg-[#2f3743]'>
      <ToastContainer />
      <div className='container min-h-screen mx-auto px-4 lg:px-0 '>
        <Outlet />
      </div>
    </div>
  );
}

export default App;
