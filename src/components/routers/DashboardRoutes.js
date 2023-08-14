import React from "react";
import {Routes, Route, Navigate} from 'react-router-dom';
import Drawers from '../Drawer/Drawers';
import Home from "../Home/Home";

import './DashboardRoutes.css';
import Especies from "../Perros";
import Box from "@mui/material/Box";
import Vacunas from "../Vacunacion";
import HemograHemoparasito from "../Laboratorios/HemoGramaHemoParasito";


export const DashboardRoutes = () => {

  return (
    <>
      <Drawers/>
      <Box sx={{marginLeft: 19.5}}>
      <Routes>
        <Route index path="/" element={<Home/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/perros" element={<Especies/>}/>
        <Route path="/vacunas" element={<Vacunas/>}/>
        <Route path="/hemograma" element={<HemograHemoparasito/>}/>

        {/* <Route path="/users" element={<Users/>}/>*/}
        <Route path='*' element={<Navigate replace to='/'/>}/>
      </Routes>
      </Box>
    </>
  )
}
