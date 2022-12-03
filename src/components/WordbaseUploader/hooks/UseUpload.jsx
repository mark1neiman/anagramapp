import { useState } from 'react';
import Axios from 'axios';


export const UseUpload = () => {
    const [filedata, setFiledata] = useState("");

    const handleUpload = (file) => {
        setFiledata(file[0]);
    };

    const submitData = (e) => {

        e.preventDefault();
        const fData = new FormData();
        fData.append('file', filedata);
        Axios.post("https://ecommerce.webaza.eu/public/api/upload", fData)

            .then((res) => {
                console.log(res.data)
            })
    };
    return {
        handleUpload,
        submitData
    };
};