import React from 'react'

export default function Dashboard() {
    const Logout=()=>{
        window.localStorage.clear('');
        window.location.href='/'
    }
  return (
    <div>
      <h1>This is Dashboard</h1>
      <button onClick={Logout}>Logout</button>
    </div>
  )
}