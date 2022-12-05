import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext";

const Login = () => {
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

    return (

        <div className='home'>
            <div className='home-container'>
                <div className='container__inside'>
                    <div className='container__inside-button'>
                        <form>
                            <input type="text" placeholder="email" name="email" onChange={handleChange} />
                            <input type="password" placeholder="Password" name="password" onChange={handleChange} />
                            <button onClick={handleLogin} className='button-login'>Login</button>
                            {err && err}
                        </form>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Login