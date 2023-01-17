import React from "react";
import { Routes, Route } from "react-router";
import { Home, Shop } from "./pages";
import { MyAccount } from "./pages/account";
import { Login, Register, RegisterRetail, ResetPassword } from "./pages/auth";

const App = () => {
  return (
    <div>
      <Routes>
        <Route index element={<Home />} exact></Route>
        <Route path="login" element={<Login />} exact></Route>
        <Route path="register" element={<Register />} exact></Route>
        <Route path="resetpassword" element={<ResetPassword />} exact></Route>
        <Route path="registerretail" element={<RegisterRetail />} exact></Route>
        <Route path="shop" element={<Shop />} exact></Route>
        <Route path="myaccount/*" element={<MyAccount />} exact></Route>
      </Routes>
    </div>
  );
};

export default App;
