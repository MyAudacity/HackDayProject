import { FC, SyntheticEvent, useContext, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { User, Users } from '../types/stateTypes'
import { UserContext } from './LoginPage';

const LoginForm: FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { users, setUserLoggedIn, setUser } = useContext(UserContext);


    const navigate = useNavigate();
    const location = useLocation();

    const onFormSubmit = (e: SyntheticEvent) => {
        e.preventDefault();
        const user = checkIfUserExists(users, username);
        if (!checkUserPassword(user)) {
            setUserLoggedIn(false);
            navigate('/NotFound');
            return null;
        }
        setUserLoggedIn(true);
        setUser(user);
        navigate('/Account');
        return null;
    }

    const checkUserPassword = (user: User | null | undefined) => {
        if (user?.password == password) {
            return user;
        }
        return null;
    }

    const checkIfUserExists = (users: Users, username: string) => {
        const user = users.find(user => user.username == username);
        if (user) {
            return user;
        }
        return null;
    }

    return (
        <>
            <form className='form' onSubmit={onFormSubmit}>
                <label>Username: </label>
                <input onChange={(e) => {
                    setUsername(e.target.value);
                }} type='text' placeholder='Enter Username'>
                </input>
                <br></br>

                <label>Password: </label>
                <input onChange={(e) => {
                    setPassword(e.target.value);
                }} type='password' placeholder='Enter Password'>
                </input>
                <br></br>

                <input type='submit' value='Submit'></input>
            </form>
        </>
    )
}

export default LoginForm
