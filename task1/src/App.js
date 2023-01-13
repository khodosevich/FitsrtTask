import React from "react";
import './Styles/App.css'
import {Route, BrowserRouter, Link, Routes} from 'react-router-dom'

import Home from './Home'

import Nav from "./Components/Nav";
import News from "./News";
import Login from "./Login";
import Profile from "./Profile";
import Matvey from "./Matvey";


function App() {
  return (
         <BrowserRouter>
           <Nav/>
           <Routes>
               <Route path='/' element={<Home />} />
               <Route path='/news' element={<News />} />
               <Route path='/login' element={<Login />} />
               <Route path='/profile' element={<Profile />} />
               <Route path='/matvey' element={<Matvey />} />
             </Routes>
         </BrowserRouter>
  );
}

export default App;
