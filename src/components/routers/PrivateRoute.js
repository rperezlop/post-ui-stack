import {Navigate} from 'react-router-dom';
import {useUser} from "../../context/userContext";
import './DashboardRoutes.css';

export const PrivateRoute = ({ children }) => {
   const { session } = useUser();

   return session
     ? children
     : <Navigate to="/login" />
}
