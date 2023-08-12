
import { Navigate } from 'react-router-dom';
import {useUser} from "../../context/userContext";

import './DashboardRoutes.css';
export const PublicRoute = ({ children }) => {
    const { session } = useUser();

    return session
      ? <Navigate to="/" />
      : children
}
