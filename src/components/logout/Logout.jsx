import { useNavigate } from "react-router-dom";


const Logout = () => {

    const navigate = useNavigate();
    const logout = () => {
        localStorage.clear();
        navigate('/login')
    }

    return (
        <div className="button-allign">
            <button onClick={logout} className='button-logout'>Logout</button>
        </div>
    )
}

export default Logout