
import { useContext } from "react";
import { Navigate } from 'react-router-dom';
import { AuthContext } from "../context/AuthContext"; 



const ProtectedRoute = ({ children }) => {
  const { userLoggedIn } = useContext(AuthContext);

  return userLoggedIn ? children : <Navigate to={"/login" }/>;
};

export default ProtectedRoute;


