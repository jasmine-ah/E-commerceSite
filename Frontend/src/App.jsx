import React from "react";
import { BrowserRouter,Routes,Route,Navigate } from 'react-router-dom';
import NavBar from "./pages/NavBar";
import MainPage from "./pages/MainPage";

function App(){
return(
  <BrowserRouter> 
  <div className='bg-[url("darkGrey.jpg")] bg-cover bg-center'>
    <NavBar/>
    <Routes>
    <Route path="/" element={<MainPage/>}/>
    </Routes>
  </div>
  </BrowserRouter>
)
}

export default App;