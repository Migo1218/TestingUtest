import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Principal from '../containers/Principal'
import Testinteligence from '../components/test/testInteligence/TestInteligence.jsx'
import Runtest from "../components/test/testInteligence/Runtest";
import Resultados from "../components/test/Resultados";

export const DashboardRoutes = () => {
  
  return (
    <div>
      <Routes>
        <Route exact path="/*" element={<Principal/>} />
        <Route exact path="/test/:test" element={<Testinteligence />} />
        <Route exact path="/runtest/:test" element={<Runtest />} />
        <Route path="*" element={<Navigate to="/" />} />
        <Route exact path="/resultTest" element={<Resultados/>} />
        
      </Routes>
    </div>
  );
};


