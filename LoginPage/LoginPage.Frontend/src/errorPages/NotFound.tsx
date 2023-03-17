import { Route, Routes, useNavigate } from "react-router-dom";

const NotFound = () => {
    const navigate = useNavigate();
    setTimeout(() => {
        navigate('/');
    }, 2000);

    return (
        <h1 className="errorMessage">Not Found</h1>
    );
}

export default NotFound;