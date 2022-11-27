import React from 'react'
import { useNavigate } from "react-router-dom";
import './logout.scss'

const Logout = () => {

    const navigate = useNavigate();
    const logout = () => {
        localStorage.clear();
        navigate('/login')
    }

    return (
        <>
            <button onClick={logout} className='button-logout'>Logout</button>
        </>
    )
}

export default Logout