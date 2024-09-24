import Login from "../auth/Login";
import Dashboard from "../component/Dashboard"
import { useAuth } from "../context/AuthContext";


const Account = () => {

   const { userLoggedIn } = useAuth();

    return ( 
        <div>
          
           <h1></h1> 
         {userLoggedIn ? <Dashboard /> : <Login />  }
           
        </div>
     );
}
 
export default Account;