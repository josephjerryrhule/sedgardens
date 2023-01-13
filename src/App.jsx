import React from "react";
import { Routes, Route } from "react-router";
import { Home } from "./pages";
import { Login, Register, ResetPassword } from "./pages/auth";

const App = () => {
  return (
    <div>
      <Routes>
        <Route index element={<Home />}></Route>
        <Route path="login" element={<Login />}></Route>
        <Route path="register" element={<Register />}></Route>
        <Route path="resetpassword" element={<ResetPassword />}></Route>
      </Routes>
    </div>
  );
};

export default App;
