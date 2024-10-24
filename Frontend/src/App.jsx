import React from "react";
import { BrowserRouter,Routes,Route,Navigate } from 'react-router-dom';
import NavBar from "./pages/NavBar";
import MainPage from "./pages/MainPage";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Terms from "./pages/Terms";
import Product from "./pages/Product";
import ProductList from "./components/ProductList";
import ProfilePage from "./pages/ProfilePage";
import About from "./pages/About";
function App(){
return(
  <BrowserRouter> 
  <div className='bg-[#fbdde2] bg-cover bg-center'>
    <NavBar/>
    <Routes>
    <Route path="/" element={<MainPage/>}/>
    <Route path="/signup" element={<Signup/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/terms" element={<Terms/>}/>
    <Route path="/product" element={<Product/>}/>
    <Route path="/productlist" element={<ProductList/>}/>
    <Route path="/profile" element={<ProfilePage/>}/>
    <Route path="/about" element={<About/>}/>
    </Routes>
  </div>
  </BrowserRouter>
)
}

export default App;