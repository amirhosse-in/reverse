import React, { Component } from "react";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Home from "./components/home";
import NotFound from "./components/NotFound";
import Faq from "./components/faq";
import Login from "./components/login";
// import Rank from "./components/rank";
import Rank from "./components/newRank";
import NewSerach from "./components/newSearch";
import Register from "./components/register";
import Profile from "./components/profile";
import Upload from "./components/upload";
import RankItem from "./components/rankItem";


 
function App() {

    return(
        <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/search" element={<NewSerach/>} />
        <Route path="/rank" element={<Rank />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profile/*" element={<Profile />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/crack/*" element={<RankItem />} />
        <Route path="*" element={<NotFound />} />

      </Routes>
    </Router>
        );
    
}
 
export default App;

