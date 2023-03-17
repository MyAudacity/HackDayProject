import { SyntheticEvent, useContext, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { User, Users } from "../types/stateTypes";
import { UserContext } from "./LoginPage";

const Account = () => {
    const { users, setUsers, userLoggedIn, setUserLoggedIn, user } = useContext(UserContext);
    const navigate = useNavigate();



    const deleteUser = (username:string) => {
        fetch(`http://localhost:5076/api/Users/${username}`, {
            method: "DELETE",
        });
    }

    const handleClick = (e:SyntheticEvent) => {
        e.preventDefault();
        deleteUser(user.username);
        setUserLoggedIn(false);
        setUsers(users.filter(u => u.username !== user.username));
        navigate("/Account/OhOk");
    }

    useEffect(() => {

    }, [userLoggedIn])

    return (
        <div>
            <div>
                <h1>Hello, {user.username}</h1>
            </div>
            <div>
                <button onClick={handleClick} type="submit" placeholder="Delete User">Delete User</button>
            </div>
        </div>
    );
}

export default Account;