import { useState } from 'react';
import Axios from 'axios';

const Anagramfinder = () => {

    const [message, setMessage] = useState('');
    const [listArray, setListArray] = useState([]);

    const submitMessage = (e) => {
        e.preventDefault();
        Axios.get(`https://ecommerce.webaza.eu/public/api/words/${message}`)

            .then((res) => {
                setListArray(res.data)
            })
    };

    const anagramList = listArray.map((anagram, i) =>
        <li key={i}>
            {anagram}
        </li>
    )
    return (
        <>
            <form onSubmit={submitMessage}>

                <input
                    type="text"
                    id="message"
                    name="message"
                    value={message}
                    onChange={e => setMessage(e.target.value.toLowerCase())}
                    placeholder="Type a word..."
                />

                <button onClick={submitMessage} className='button-anagram'>
                    Check List
                </button>

                <div className='container-inside__container'>
                    <div className='container-inside__message'>
                        {anagramList}
                    </div>
                </div>
            </form>

        </>
    )

}

export default Anagramfinder