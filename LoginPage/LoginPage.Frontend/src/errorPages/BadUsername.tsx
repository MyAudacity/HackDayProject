import { Route, Routes, useNavigate } from "react-router-dom";

const BadUsername = () => {
    const navigate = useNavigate();
    setTimeout(() => {
        navigate('/');
    }, 2000);

    return (
        <div>
            <h1 className="errorMessage">Username already in use</h1>
        </div>
    );
}

export default BadUsername;