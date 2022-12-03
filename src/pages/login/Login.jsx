import { UseLogin } from "./hooks/UseLogin";

const Login = () => {

    const { handleChange, handleLogin } = UseLogin();

    return (

        <div className='home'>
            <div className='home-container'>
                <div className='container__inside'>
                    <div className='container__inside-button'>
                        <form>
                            <input type="text" placeholder="email" name="email" onChange={handleChange} />
                            <input type="password" placeholder="Password" name="password" onChange={handleChange} />
                            <button onClick={handleLogin} className='button-login'>Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Login