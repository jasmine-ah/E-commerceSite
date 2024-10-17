import React from "react";
import { BrowserRouter,Routes,Route,Navigate } from 'react-router-dom';
import NavBar from "./pages/NavBar";
import MainPage from "./pages/MainPage";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Terms from "./pages/Terms";
function App(){
return(
  <BrowserRouter> 
  <div className='bg-[url("darkGrey.jpg")] bg-cover bg-center'>
    <NavBar/>
    <Routes>
    <Route path="/" element={<MainPage/>}/>
    <Route path="/signup" element={<Signup/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/terms" element={<Terms/>}/>
    </Routes>
  </div>
  </BrowserRouter>
)
}

export default App;