
import { Navigate } from 'react-router-dom';
/*import {useUser} from "../context/userContext";*/

import './DashboardRoutes.css';
export const PublicRoute = ({ children }) => {
 /*   const { session } = useUser();*/
    const session = true
    return session
        ? <Navigate to="/" />
        : children
}
