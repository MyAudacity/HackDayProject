import { FC, useContext } from 'react'
import { Outlet } from 'react-router-dom';
import Home from './Home';
import { UserContext } from './LoginPage';


const ProtectedRoutes: FC = () => {
    const { userLoggedIn } = useContext(UserContext);

    return (
        <div>
            {userLoggedIn && userLoggedIn ? <Outlet /> : <Home />}
        </div>
    )
};

export default ProtectedRoutes;