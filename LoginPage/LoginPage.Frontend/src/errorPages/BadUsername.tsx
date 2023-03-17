import { useNavigate } from "react-router-dom";

const BadUsername = () => {
    const navigate = useNavigate();
    setTimeout(() => {
        navigate('/RegisterForm');
    }, 2000);

    return (
        <h1 className="errorMessage">Username already in use</h1>
    );
}

export default BadUsername;