import React from 'react';
import { useState } from 'react';
import './anagramfinder.scss'

import Logout from '../logout/Logout';
import Uploader from '../WordbaseUploader/Uploader';

const Anagramfinder = (props) => {

    // Here will be fetched from database array/list of words
    const wordsArray = []

    // Logic of fiding an anagram word
    const sort = (word) => word.toString().split('').sort().join('');

    const anagrams = (word, words) => {
        let token = sort(word);

        return words.filter((w) => sort(w) === token);
    }
    //END Logic of fiding an anagram word 

    const [message, setMessage] = useState(''); //Here i love React useState :)

    // const handleChange = (e) => {
    //     setMessage(e.target.value);
    // console.log(anagrams(event.target.value, wordsArray));
    // const newArray = (anagrams(setMessage, wordsArray));
    // console.log(newArray)
    // };

    // Creating newArray for showing them as anagrams in frontend
    const newArray = (anagrams(message, wordsArray));

    const anagramList = newArray.map((anagram, i) =>
        <li key={i}>
            {anagram}
        </li>
    );
    //END Creating newArray for showing them as examaples in frontend

    // just checking if it is working
    // console.log({ anagramList })

    return (
        <>

            <div className='anagramfinder'>
                <div className='anagramfinder-container'>
                    <div className='container__inside'>
                        <div className='container__inside-button'>
                            <Logout />

                        </div>
                        <form>
                            <input
                                type="text"
                                id="message"
                                name="message"
                                value={message}
                                onChange={e => setMessage(e.target.value)} //got rid of handleChange event function. Instead created straight road to getting value from input
                                placeholder="Type a word..."
                            />
                        </form>
                        <div className='container-inside__container'>
                            <div className='container-inside__message'>
                                {message.trim().length === 0
                                    ? <p>please type a message ...</p>
                                    : anagramList.length === 0 ? <p>Cannot find anything</p> : <>{anagramList}</> //Just some conditional logic stuff
                                }
                            </div>

                        </div>
                        <Uploader />
                    </div>
                </div>
            </div>

        </>
    )

}

export default Anagramfinder