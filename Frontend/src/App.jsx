import React from "react";
import { BrowserRouter,Routes,Route,useLocation } from 'react-router-dom';
import NavBar from "./pages/NavBar";
import MainPage from "./pages/MainPage";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Terms from "./pages/Terms";
import Product from "./pages/Product";
import ProductList from "./components/ProductList";
import ProfilePage from "./pages/ProfilePage";
import About from "./pages/About";
import Payment from "./pages/Payment";
import AdminDashboard from "./pages/AdminDashboard";
import OrderConfirm from "./components/OrderConfirm";
import Reports from "./components/admin/Reports";

function App(){
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');
  const isProfileRoute = location.pathname.startsWith('/profile');
  const shouldHideNavBar = isAdminRoute || isProfileRoute;
return(
  <div className='bg-[#fce3eb] bg-cover bg-center'>
  {!shouldHideNavBar  && <NavBar />}

    <Routes>
    <Route path="/" element={<MainPage/>}/>
    <Route path="/signup" element={<Signup/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/terms" element={<Terms/>}/>
    <Route path="/product/:productId" element={<Product/>}/>
    <Route path="/productlist" element={<ProductList/>}/>
    <Route path="/profile" element={<ProfilePage/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/payment" element={<Payment/>}/>
    <Route path="/admin" element={<AdminDashboard/>}/>
    <Route path="/report" element={<Reports/>}/>
    <Route path="/order/:orderId" element={<OrderConfirm/>}/>

    </Routes>
  </div>
)
}
function AppWrapper() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

export default AppWrapper;
// export default App;