import { useNavigate } from "react-router-dom";

const BadPassword = () => {
    const navigate = useNavigate();
    setTimeout(() => {
        navigate('/RegisterForm');
    }, 2000);

    return (
        <h1 className="errorMessage">Passwords do not match</h1>
    );
}

export default BadPassword;