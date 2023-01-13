import React from "react";
import { Routes, Route } from "react-router";
import { Home } from "./pages";
import { Login } from "./pages/auth";

const App = () => {
  return (
    <div>
      <Routes>
        <Route index element={<Home />}></Route>
        <Route path="login" element={<Login />}></Route>
      </Routes>
    </div>
  );
};

export default App;
