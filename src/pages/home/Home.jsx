import comp from '../../components'
import './home.scss';

const Home = () => {
    return (
        <>

            <div className='home'>
                <div className='home-container'>
                    <div className='container__inside'>
                        <div className='container__inside-button'>
                            <comp.Logout />
                            <comp.Anagramfinder />
                        </div>
                        <comp.Uploader />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home