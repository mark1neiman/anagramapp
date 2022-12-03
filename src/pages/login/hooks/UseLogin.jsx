import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/authContext";


export const UseLogin = () => {

    const [inputs, setInputs] = useState({
        email: "",
        password: "",
    });
    const [err, setErr] = useState(null);

    const navigate = useNavigate()

    const handleChange = (e) => {
        setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };
    const { login } = useContext(AuthContext);

    const handleLogin = (e) => {
        e.preventDefault();
        try {
            login(inputs);
            let path = `/`;
            navigate(path);
        } catch (err) {
            setErr(err.response.data);
        }
    }
    return {
        err,
        handleChange,
        handleLogin
    }
}

