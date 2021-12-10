import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Signin from '../Signin/Signin'
import './Start.css'

const Start = () => {

    const [signin, setSignin] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        navigate('/')
    }, [navigate])
    
    return (
        <div className="login">
            <div className="login__background">
                <img 
                    className='login__logo'
                    src="https://marcas-logos.net/wp-content/uploads/2019/11/Netflix-Logo.png" 
                    alt="login-background" 
                />
                {!signin && <button 
                    className="login__button"
                    onClick={() => setSignin(true)} 
                >
                    Sign In</button>}
                <div className="login__gradient" />
            </div>

            <div className="login__body">
                {signin ? (
                    <Signin />
                ) : (
                    <>
                        <h1>Unlimited films, TV programmes and more.</h1>
                        <h2>Watch anywhere. Cancel at any time.</h2>
                        <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
                        <div className="login__input">
                            <form onSubmit={() => setSignin(true)} >
                                <input 
                                    type="email" 
                                    placeholder='Email Address'
                                />
                                <button type='submit' className="login__getstarted">GET STARTED</button>
                            </form>
                        </div>
                    </>
                )}  
            </div>
        </div>
    )
}

export default Start