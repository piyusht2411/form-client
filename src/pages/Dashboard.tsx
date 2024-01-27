import React from 'react'
import { useAppDispatch, useAppSelector } from '../store/store'
import { logout, selectAuth } from '../store/reducer/authSlice'
import { useNavigate } from 'react-router-dom';
import { useLazyLogoutUserQuery } from '../services/user';

const Dashboard = () => {
    const {name} = useAppSelector(selectAuth);
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const [logoutUser] = useLazyLogoutUserQuery();
    const handleLogout = async()=>{
      const result = await logoutUser();
      console.log(result);
      dispatch(logout());
      navigate('/');

    }
  return (
   <>
   <h2>Welcome to dashboard</h2>
   <h4>Name:{name}</h4>
   <button onClick={()=>handleLogout()}>logout</button>

   </>
  )
}

export default Dashboard