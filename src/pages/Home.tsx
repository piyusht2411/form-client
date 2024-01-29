import React from 'react';
import { Link } from "react-router-dom";
import { useAppSelector } from '../store/store';
import { selectAuth } from '../store/reducer/authSlice';

const Home = () => {
  const {name}  = useAppSelector(selectAuth);
  console.log(name);
  return (
    <>
    <h1>Welcome to home page</h1>
    {!name?
   <div>
     <Link to ='/login'><button>Login</button>

</Link>
<Link to ='/register'><button>Register</button></Link>
   </div>
    :<div>
      <div>{name}</div>
      <Link to ='/dashboard'><button>Dashboard</button></Link>

      </div>}
    </>
    
  )
}

export default Home