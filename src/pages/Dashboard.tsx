import React from 'react'
import { useAppSelector } from '../store/store'
import { selectAuth } from '../store/reducer/authSlice'
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const {name} = useAppSelector(selectAuth);
    const navigate = useNavigate();
  return (
   <>
   <h2>Welcome to dashboard</h2>
   <h4>Name:{name}</h4>

   </>
  )
}

export default Dashboard