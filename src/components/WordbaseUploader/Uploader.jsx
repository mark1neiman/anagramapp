
import { UseUpload } from "./hooks/UseUpload";


const Uploader = () => {

    const { handleUpload, submitData } = UseUpload();

    return (
        <>
            <div className='uploader'>
                <form onSubmit={submitData} className='uploader-form'>
                    <input name='file' id='file' type='file' onChange={e => handleUpload(e.target.files)} />
                    <button type='submit' onClick={submitData} className='button-upload'>
                        Upload list
                    </button>
                </form>
            </div>
        </>
    )
}

export default Uploader
