import React from 'react';
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
    <h1>Welcome to home page</h1>
    <Link to ='/login'><button>Login</button>

    </Link>
    <Link to ='/register'><button>Register</button></Link>

    </>
    
  )
}

export default Home