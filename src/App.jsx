import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";

import Home from "./page/user/Home";
import Events from "./page/user/Events";
import Checkout from "./page/user/Checkout";
import Contact from "./page/user/Contact";

import AddEvent from "./page/admin/AddEvent";
import Dashboard from "./page/admin/Dashboard";
import Login from "./page/admin/Login";
import Orders from "./page/admin/Orders";
import UserOrders from "./page/user/UserOrders";
function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        {/* User */}
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/orders" element={<UserOrders userEmail="ghizlane@example.com" />} />

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
