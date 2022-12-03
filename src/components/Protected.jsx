import React from 'react'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


const Protected = (props) => {
    const navigate = useNavigate();

    const Cmp = props.Cmp
    useEffect(() => {
        if (!localStorage.setItem("user")) {
            navigate("/")
        }
    }, []);
    return (
        <>
            <Cmp />
        </>
    )
}

export default Protected