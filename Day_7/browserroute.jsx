import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./components/Cart";
import Navbar from "./components/Navbar";
import Product from "./components/Product";
import User from "./components/User";

export default function App() {
  return (
    <BrowserRouter>
    
      <Navbar/>
      <div className="page">
        <Routes>
          <Route path="/" element={<User/>} />
          <Route path="/product" element={<Product/>} />
          <Route path="/cart" element={<Cart/>} />
        </Routes>
      </div>
    
    </BrowserRouter>
    
  );
}