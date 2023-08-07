import {Navigate} from 'react-router-dom';
/*import {useUser} from "../context/userContext";*/
import './DashboardRoutes.css';

export const PrivateRoute = ({ children }) => {
  /*  const { session } = useUser();*/
const session = true
   return session
        ? children
        : <Navigate to="/login" />
}
