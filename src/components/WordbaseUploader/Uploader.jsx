import React from 'react';
import './uploader.scss';
import { useState } from 'react';
import Axios from 'axios';


const Uploader = (updateArr) => {

    const [filedata, setFiledata] = useState("");

    const handleUpload = (file) => {
        setFiledata(file[0]);
    };
    const submitData = (e) => {
        e.preventDefault();
        const fData = new FormData();
        fData.append('file', filedata);
        Axios.post("http://localhost:8000/api/upload-file", fData)
            .then((res) => {
                updateArr(res);
            })
            .catch((e) => {
                console.log("error: " + e)
            });
    };


    return (
        <>
            <div className='uploader'>
                <form onSubmit={submitData} className='uploader-form'>
                    <input name='file' id='file' type='file' onChange={e => handleUpload(e.target.files)} />
                    <button type='submit' onClick={submitData}>
                        Upload list
                    </button>
                </form>
            </div>
        </>
    )
}

export default Uploader