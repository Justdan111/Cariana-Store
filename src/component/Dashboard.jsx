import React from 'react'
import { doSignOut } from '../firebase/auth';
import { Navigate } from 'react-router';

function Dashboard() {
  return (
    <div> 
      <h1>Dashboard</h1>
     
     <div className=' text-center mt-4 text-red-600'>
      <button  
      onClick={() => { doSignOut().then(() => { Navigate('/account')}) }}> Log Out </button>

</div>

    </div>
  )
}

export default Dashboard;