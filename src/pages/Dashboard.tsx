import React from 'react'
import { useAppDispatch, useAppSelector } from '../store/store'
import { logout, selectAuth } from '../store/reducer/authSlice'
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const {name} = useAppSelector(selectAuth);
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const handleLogout = ()=>{
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