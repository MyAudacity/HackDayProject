import { FC, SyntheticEvent, useContext, useEffect, useState } from 'react'
import { Link, Navigate, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import App from '../App';
import NotFound from '../errorPages/NotFound';
import { User, Users } from '../types/stateTypes'
import { UserContext } from './LoginPage';

const RegisterForm: FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [passwordRepeat, setPasswordRepeat] = useState('');
    const { users, setUsers } = useContext(UserContext);

    const navigate = useNavigate();

    const onFormSubmit = (e: SyntheticEvent) => {
        e.preventDefault();

        if (!checkIfUserNameValid(users, username)) {
            navigate('/BadUsername');
            return null;
        }

        if (!checkUserPassword(password, passwordRepeat)) {
            navigate('/BadPassword');
            return null;
        }
        postUser();
        const newUser : Partial<User> = {
            username: username,
            password: password
        } 
        setUsers((prev : Users) => ([...prev, newUser]))
        navigate('/LogIn');
        return null;
    }

        const postUser = () => {
        fetch('http://localhost:5076/api/users', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({username, password}),
        })
    }

    const checkUserPassword = (password: string, passwordRepeat: string) => {
        if (password == passwordRepeat) {
            return true;
        }
        return false;
    }

    const checkIfUserNameValid = (users: Users, username: string) => {
        const user = users.find(user => user.username == username);
        if (user) {
            return null;
        }
        return username;
    }

    return (
        <>
            <form onSubmit={onFormSubmit}>
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

                <label>Repeat password: </label>
                <input onChange={(e) => {
                    setPasswordRepeat(e.target.value);
                }} type='password' placeholder='Repeat Password'>
                </input>
                <br></br>

                <input type='submit' value='Submit'></input>
            </form>
        </>
    )
}

export default RegisterForm