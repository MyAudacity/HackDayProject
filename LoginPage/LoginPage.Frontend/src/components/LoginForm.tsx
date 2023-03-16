import { FC, SyntheticEvent, useEffect, useState } from 'react'
import { User, Users } from '../types/stateTypes'

type LoginFormProps = {
    users: Users,
}

const LoginForm: FC<LoginFormProps> = (props) => {
    //const [users, setUsers] = useState<Users>([])
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const onFormSubmit = (e: SyntheticEvent) => {
        e.preventDefault();
        const user = checkIfUserExists(props.users, username);
        if (!checkUserPassword(user)){
            console.log("Incorrect Password")
            throw new Error;
        }
        console.log("Welcome!");
    }
    
    const checkUserPassword = (user : User) =>
    {
        if (user.password == password) {
            return true;
        }
        return false;
    }

    const checkIfUserExists = (users : Users, username : string) => {
        const user = users.find(user => user.username === username);
        if (user) {
            return user;
        }
        console.log("No such user exists");
        throw new Error();
    }

    return (
        <>
        {console.log(props)}
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

            <input type='submit' value='Submit'></input>
        </form>
        </>
    )
}

export default LoginForm

//0 {id: 1, username: 'wbargh0', password: '2XDuH9hg4VW', email: null}
