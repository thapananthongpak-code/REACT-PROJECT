import { Link } from 'react-router-dom';
// import React, { useState } from 'react'

const Navbar = ({count}) => {
  return (
    <nav className="bg-black p-3 flex gap-2 items-center">

      <Link to="/" className="bg-gray-800 text-white border-none cursor-pointer p-2">
        Home
      </Link>
      <Link to="/Cart" className="bg-gray-800 text-white border-none cursor-pointer  p-2">
        Cart
      </Link>
      <Link to="/Account" className="bg-gray-800 text-white border-none cursor-pointer p-2">
        Account
      </Link>
      <Link to="/AddProduct" className="bg-gray-800 text-white border-none cursor-pointer  p-2">
        Add Product : {count} รายการสินค้า
      </Link>
      <Link to="/Notification" className="bg-gray-800 text-white border-none cursor-pointer p-2">
        Notification
      </Link>
      <Link to="/Mycomponent" className="bg-gray-800 text-white border-none cursor-pointer p-2">
        Mycomponent
      </Link>
      <Link to="/My" className="bg-gray-800 text-white border-none cursor-pointer p-2">
        My
      </Link>
      <input
      className="placeholder:text-red-500 text-sm  text-black"
      placeholder="Search products..."
      type="text"
      name="search"
      />
     
    </nav>
    
  );
};

export default Navbar;
