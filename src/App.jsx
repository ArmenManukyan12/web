import React from "react";
import { Route, Routes } from "react-router-dom";
import { Login, Register, Profile } from "./pages";
import NotFound from "./pages/NotFound/NotFound";
import ROUTES from "./Rountes";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import LogOut from "./pages/LogOut/LogOut";

import "./App.css";

const App = () => {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path={ROUTES.LOGIN} element={<Login />} />
        <Route path={ROUTES.REGISTER} element={<Register />} />
        <Route path={ROUTES.PROFILE} element={<Profile />} />
        <Route path={ROUTES.LOGOUT} element={<LogOut />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
