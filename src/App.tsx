import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import './App.css';
import { useAppDispatch } from './store/store';
import { setUser } from './store/reducer/authSlice';

const App = ()=> {

  const dispatch = useAppDispatch();
  const user = JSON.parse(localStorage.getItem('user')|| "{}");
  useEffect(()=>{
    dispatch(setUser(user))
  },[]);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
