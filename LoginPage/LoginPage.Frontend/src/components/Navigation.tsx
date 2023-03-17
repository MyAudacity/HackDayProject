import { FC } from "react";
import { Link, Route, Routes} from "react-router-dom";
import { Users } from "../types/stateTypes";
import Views from "./Views";

type NavProps = {
    users: Users,
    userLoggedIn: boolean;
}

const NavigationBar:FC<NavProps> = (props) => {
    return(
        <nav>
            <Link to={'/'}> Home </Link>
            <Link to={'/LogIn'}> Log In </Link>
            <Link to={'/RegisterForm'}> Register </Link>
            <Link to={'/Account'}> Account </Link>
            <Views/>
        </nav>
    );
}

export default NavigationBar;