import { useRef } from 'react'
import { createUserDb, signInDb } from '../../utils/firebase'
import './Signin.css'

const SignIn = () => {

    const emailRef = useRef(null)
    const passwordRef = useRef(null)

    const register = e => {
        e.preventDefault()
        createUserDb(emailRef.current.value, passwordRef.current.value)
    }

    const signin = e => {
        e.preventDefault()     
        signInDb(emailRef.current.value, passwordRef.current.value) 
    }

    return (
        <form onSubmit={signin} className="signin">
            <h1 className='signin__title'>Sign In</h1>
            <input ref={emailRef} placeholder='Email' type="email" />
            <input ref={passwordRef} placeholder='Password' type="password" />
            <button type='submit'>Sign In</button>
            <div className="signing__span">
                <span>New to Netflix? <b onClick={register} className='signin__bold'>Sign up now.</b></span>
            </div>
        </form>
    )
}

export default SignIn