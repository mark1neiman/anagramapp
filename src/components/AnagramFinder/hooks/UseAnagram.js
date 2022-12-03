import { useState } from 'react';
import Axios from 'axios';


export const UseAnagram = () => {
    const [message, setMessage] = useState('');
    const [listArray, setListArray] = useState([]);

    const submitMessage = (e) => {
        e.preventDefault();
        Axios.get(`https://ecommerce.webaza.eu/public/api/words/${message}`)

            .then((res) => {
                setListArray(res.data)
            })
    };

    const wordvalue = (e) => {
        const newvalue = e.targer.value
        setMessage(newvalue)
    };

    const anagramList = listArray.map((anagram, i) =>
        <li key={i}>
            {anagram}
        </li>
    )
    return (
        submitMessage,
        wordvalue,
        anagramList,
        message
    )
};