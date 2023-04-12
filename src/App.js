/* eslint-disable no-unused-vars */
import './App.css';
import { Routes, Route } from "react-router-dom"
import Login from './Login';
import Dashboard from './Dashboard';
import AddUser from './AddUser';
import Register from './Register';

function App() {

  return (
    <div className="">
      <Routes>
        <Route path="/" element={(window.localStorage.getItem('email') === null) ? <Login /> : <AddUser />} />
        <Route path="/adduser" element={(window.localStorage.getItem('email') !== null) ? <AddUser /> : <Login />} />
        <Route path="/Dashboard" element={(window.localStorage.getItem('email') !== null) ? <Dashboard /> : <Login />} />
        <Route path="/Register" element={(window.localStorage.getItem('email') !== null) ? <AddUser /> : <Register />}/>
      </Routes>
    </div>
  );
}

export default App;
