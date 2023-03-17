import { FC } from "react";
import { Link } from "react-router-dom";
import { Users } from "../types/stateTypes";
import Views from "./Views";

const NavigationBar: FC = () => {
    return (
        <nav>
            <div className="links">

                <div className="linkity">
                    <Link to={'/'} className="link"> Home </Link>
                </div>

                <div className="linkity">
                    <Link to={'/LogIn'} className="link"> Log In </Link>
                </div>

                <div className="linkity">
                    <Link to={'/RegisterForm'} className="link"> Register </Link>
                </div>

                <div className="linkity">
                    <Link to={'/Account'} className="link"> Account </Link>
                </div>

            </div>
            <div className="view">
                <Views />
            </div>
        </nav>
    );
}

export default NavigationBar;