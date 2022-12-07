import "primeflex/primeflex.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Home from "./components/home/Home";
import Detail from "./components/detail/Detail";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {


  return (
    // 
    <BrowserRouter>
    <Routes>
        <Route path="/detail/:name" element={<Detail/>}/>
        <Route path="/" element={<Home/>} />
    </Routes>
  </BrowserRouter>
  )
}

export default App;
