import { FC, useState } from 'react'
import { Users } from '../types/stateTypes'

type LoginPageProps = {
    users : Users,
}

const LoginPage: FC<LoginPageProps> = (props) => {
    const users = props.users;

  return (
    <div>
        {users.map(user => <>{user.username + " "}</>)}
    </div>
  )
}

export default LoginPage