import Login from "../auth/Login";
import Dashboard from "../component/Dashboard"
import { useAuth } from "../context/AuthContext";
import { useState } from 'react'


const Account = () => {

   const { userLoggedIn } = useAuth();

    return ( 
        <div>
          
            
         {userLoggedIn ? <Dashboard /> : <Login />  }
           
        </div>
     );
}
 
export default Account;



// import { useState } from 'react'
// import { Button } from "@/components/ui/button"

// export default function Component() {
//   const [activeTab, setActiveTab] = useState('Dashboard')
//   const username = 'charlottejohnson1200'

//   const sidebarItems = [
//     'Dashboard',
//     'Orders',
//     'Downloads',
//     'Addresses',
//     'Account details',
//     'Log out'
//   ]

//   return (
//     <div className="flex min-h-screen bg-gray-100">
//       <aside className="w-64 bg-white p-6 shadow-md">
//         <nav>
//           <ul className="space-y-2">
//             {sidebarItems.map((item) => (
//               <li key={item}>
//                 <Button
//                   variant={activeTab === item ? "secondary" : "ghost"}
//                   className="w-full justify-start"
//                   onClick={() => setActiveTab(item)}
//                 >
//                   {item}
//                 </Button>
//               </li>
//             ))}
//           </ul>
//         </nav>
//       </aside>
//       <main className="flex-1 p-10">
//         <h1 className="text-2xl font-semibold mb-6">
//           Hello {username} (not {username}? <a href="#" className="text-blue-600 hover:underline">Log out</a>)
//         </h1>
//         <p className="text-gray-600">
//           From your account dashboard you can view your recent orders, manage your shipping and billing addresses,
//           and edit your password and account details.
//         </p>
//       </main>
//     </div>
//   )
// }