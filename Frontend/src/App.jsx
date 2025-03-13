import React from 'react'
import {BrowserRouter, Routes,Route} from "react-router-dom";
import Layout from './Pages/Layout';
import Home from './Component/Home';
import Regisrtation from './Pages/Regisrtation';
import Login from './Pages/Login';
const App = () => {
  return (
    <>
   <BrowserRouter>
   <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index  element={<Home/>}/>
        <Route path='registration' element={<Regisrtation/>}/>
        <Route path="login" element={<Login/>}/>

      </Route>

   </Routes>
   
   </BrowserRouter>
    </>
  )
}

export default App