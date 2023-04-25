import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';

export default function Dashboard() {
  const navigate = useNavigate();
  const Logout = () => {
    window.localStorage.clear('');
    navigate("/")

  }
  return (
    <div>
      <h1>This is Dashboard</h1>
      <button onClick={Logout}>
        <Link to="/" className='btn btn-primary'>
          Logout
        </Link>
      </button>
    </div>
  )
}