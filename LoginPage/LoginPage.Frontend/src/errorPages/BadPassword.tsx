import { Route, Routes, useNavigate } from "react-router-dom";

const BadPassword = () => {
    const navigate = useNavigate();
    setTimeout(() => {
        navigate('/');
    }, 2000);

    return (
        <div>
            <h1 className="errorMessage">Passwords do not match</h1>
        </div>
    );
}

export default BadPassword;