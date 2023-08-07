import {BrowserRouter, Route, Routes} from "react-router-dom";
import {PublicRoute} from "./PublicRoute";
import Login from "../Login";
import {PrivateRoute} from "./PrivateRoute";
import {DashboardRoutes} from "./DashboardRoutes";


const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={
          <PublicRoute>
            <Login/>
          </PublicRoute>
        }/>
        <Route path="/*" element={
          <PrivateRoute>
            <DashboardRoutes/>
          </PrivateRoute>
        }/>
      </Routes>
    </BrowserRouter>
  )
}
export default AppRoutes;