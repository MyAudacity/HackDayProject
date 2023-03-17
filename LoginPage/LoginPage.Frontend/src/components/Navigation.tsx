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
            <div className="links">
            <Link to={'/'}> Home </Link>
            <Link to={'/LogIn'}> Log In </Link>
            <Link to={'/RegisterForm'}> Register </Link>
            <Link to={'/Account'}> Account </Link>
            </div>
            <div className="view">
            <Views/>
            </div>
        </nav>
    );
}

export default NavigationBar;