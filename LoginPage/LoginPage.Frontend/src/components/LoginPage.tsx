import { createContext, FC, useEffect, useState } from 'react'
import { User, Users } from '../types/stateTypes'
import NavigationBar from './Navigation'

export const UserContext = createContext({ });

const LoginPage: FC = () => {
    const [users, setUsers] = useState<Users>([]);
    const [userLoggedIn, setUserLoggedIn] = useState(false);
    const [user, setUser] = useState<User>();

    useEffect(() => {
        getUsers();
    }, [])

    const getUsers = () => {
        fetch('http://localhost:5076/api/users')
            .then(res => res.json())
            .then(data => {
                setUsers(data);
            })
            .catch(err => err);
    }

    return (
        <UserContext.Provider value={{users, setUsers, userLoggedIn, setUserLoggedIn, user, setUser}}>
        <div className='navBar'>
            <NavigationBar users={users} userLoggedIn={userLoggedIn} />
        </div>
        
        </UserContext.Provider>

    )
}

export default LoginPage