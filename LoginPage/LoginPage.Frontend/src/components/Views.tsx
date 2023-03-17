import { createContext, FC, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Account from "./Account";
import Home from "./Home";
import LoginForm from "./LoginForm";
import NotFound from "../errorPages/NotFound";
import ProtectedRoutes from "./ProtectedRoutes";
import RegisterForm from "./RegisterForm";
import BadUsername from "../errorPages/BadUsername";
import OhOk from "../errorPages/OhOk";
import BadPassword from "../errorPages/BadPassword";

const Views: FC = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/LogIn' element={<LoginForm />} />
            <Route path='/RegisterForm' element={<RegisterForm />} />

            <Route element={<ProtectedRoutes/>} >
                <Route path='/Account' element={<Account />} />
             </Route>

            <Route path='/NotFound' element={<NotFound />} />
            <Route path='/BadUsername' element={<BadUsername />} />
            <Route path='/BadPassword' element={<BadPassword />} />
            <Route path='/Account/OhOk' element={<OhOk />} />
        </Routes>
    );
}

export default Views;