import React from "react";
import {Routes, Route, Navigate} from 'react-router-dom';
import Drawers from '../Drawer/Drawers';
import Home from "../Home/Home";

import './DashboardRoutes.css';
import Perros from "../Perros";
import Box from "@mui/material/Box";
import Vacunas from "../Vacunacion";


export const DashboardRoutes = () => {

  return (
    <>
      <Drawers/>
      <Box sx={{marginLeft: 19.5}}>
      <Routes>
        <Route index path="/" element={<Home/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/perros" element={<Perros/>}/>
        <Route path="/vacunas" element={<Vacunas/>}/>
        {/* <Route path="/users" element={<Users/>}/>*/}
        <Route path='*' element={<Navigate replace to='/'/>}/>
      </Routes>
      </Box>
    </>
  )
}
