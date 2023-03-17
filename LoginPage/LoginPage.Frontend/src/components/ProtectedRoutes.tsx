import { FC, useContext, useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom';
import Home from './Home';
import LoginForm from './LoginForm';
import { UserContext } from './LoginPage';


const ProtectedRoutes: FC = () => {
    const { userLoggedIn } = useContext(UserContext);


    return (
        <div>
            <div>
                {userLoggedIn && userLoggedIn ? <Outlet /> : <Home />}
            </div>
        </div>
    )
};

export default ProtectedRoutes;