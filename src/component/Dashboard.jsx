import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { doSignOut } from '../firebase/auth';
import { Navigate } from 'react-router';

export default function DashboardLayout({ children }) {
  const location = useLocation();
  const username = 'charlottejohnson1200';

  const sidebarItems = [
    { name: 'Dashboard', path: '/dashboard' },
    { name: 'Orders', path: '/order' },
    { name: 'Downloads', path: '/dashboard/downloads' },
    { name: 'Addresses', path: '/dashboard/addresses' },
    { name: 'Account details', path: '/dashboard/account' },
    { name: 'Log out', path: '/logout' }
  ];

  return (
    <div className="flex min-h-screen bg-gray-100">
      <aside className="w-64 bg-white p-6 shadow-md">
        <nav>
          <ul className="space-y-2">
            {sidebarItems.map((item) => (
              <li key={item.name}>
                <Link to={item.path}>
                  <button
                    className={`w-full justify-start ${location.pathname === item.path ? 'bg-secondary' : 'bg-ghost'}`}
                  >
                    {item.name}
                    
                  </button>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
      <main className="flex-1 p-10">
        <h1 className="text-2xl font-semibold mb-6">
          Hello {username} (not {username}? <button  className='text-red-900'   onClick={() => { doSignOut().then(() => { Navigate('/account')}) }}> Log Out </button>)
        </h1>
        {children}
      </main>
    </div>
  );
}













// import React from 'react'
// import { doSignOut } from '../firebase/auth';
// import { Navigate } from 'react-router';

// function Dashboard() {
//   return (
//     <div> 
//       <h1>Dashboard</h1>
     
//      <div className=' text-center mt-4 text-red-600'>
//       <button  
//       onClick={() => { doSignOut().then(() => { Navigate('/account')}) }}> Log Out </button>

// </div>

//     </div>
//   )
// }

// export default Dashboard;