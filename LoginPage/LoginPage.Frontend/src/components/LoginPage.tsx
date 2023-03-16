import { FC, useEffect, useState } from 'react'
import { Users } from '../types/stateTypes'
import LoginForm from './LoginForm'

const LoginPage: FC = () => {
    const [users, setUsers] = useState<Users>([])

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
        <div>
            {
                users && <LoginForm users={users} />
            }
        </div>
    )
}

export default LoginPage