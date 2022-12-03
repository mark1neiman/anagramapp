import UseAnagram from './hooks/UseAnagram';


const Anagramfinder = () => {

    const { wordvalue, submitMessage, anagramList, message } = UseAnagram();

    return (
        <>
            <form onSubmit={submitMessage}>

                <input
                    type="text"
                    id="message"
                    name="message"
                    value={message}
                    onChange={wordvalue}
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