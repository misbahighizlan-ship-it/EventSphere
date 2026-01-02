import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Navbar from "./component/Navbar";
import CartSidebar from "./component/CartSidebar";

import Home from "./page/user/Home";
import Events from "./page/user/Events";
import Checkout from "./page/user/Checkout";
import Contact from "./page/user/Contact";
import UserOrders from "./page/user/UserOrders";

import AddEvent from "./page/admin/AddEvent";
import Dashboard from "./page/admin/Dashboard";
import Login from "./page/admin/Login";
import Orders from "./page/admin/Orders";

function App() {
  const [showCart, setShowCart] = useState(false);

  return (
    <BrowserRouter>
      {/* button panier*/}
      <Navbar onCartClick={() => setShowCart(!showCart)} />

      {/* Sidebar  */}
      <CartSidebar show={showCart} />

      <Routes>
        {/* User */}
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/orders"
          element={<UserOrders userEmail="ghizlane@example.com" />}
        />

        {/* Admin */}
        <Route path="/admin/login" element={<Login />} />
        <Route path="/admin/add" element={<AddEvent />} />
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/orders" element={<Orders />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
