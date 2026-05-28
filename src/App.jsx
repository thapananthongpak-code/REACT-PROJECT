import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from "./component/Navbar";
import Account from "./page/Account";
import AddProduct from "./page/AddProduct";
import Cart from "./page/Cart";
import Home from "./page/Home";

const App = () => {
  const [cartCount, setCartCount] = useState(0);

  const addToCart = () => setCartCount((num) => num + 1);

  return (
    <div className="flex flex-col min-h-screen">
      <BrowserRouter>
        <Navbar cartCount={cartCount} />
        <Routes>
          <Route path="/" element={<Home addToCart={addToCart} />} />
          <Route path="/Account" element={<Account />} />
          <Route path="/AddProduct" element={<AddProduct />} />
          <Route path="/Cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
