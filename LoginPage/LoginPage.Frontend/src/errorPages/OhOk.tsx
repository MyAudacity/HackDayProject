import { Route, Routes, useNavigate } from "react-router-dom";

const OhOk = () => {
    const navigate = useNavigate();
    setTimeout(() => {
        navigate('/');
    }, 2000);

    return (
        <div>
            <h1>Oh, okay then :(</h1>
        </div>
    );
}

export default OhOk;