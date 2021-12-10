import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './Nav.css'

const Nav = () => {

    const [show, setShow] = useState(false)
    const navigate = useNavigate()

    const transtionNavbar = () => {
        window.scrollY > 100 ? setShow(true) : setShow(false)
    }

    useEffect(() => {
        window.addEventListener('scroll', transtionNavbar)

        return () => window.removeEventListener('scroll', transtionNavbar)
    }, [])
    
    return (
        <nav className={`nav ${show && 'nav__black'}`}>
            <div className="nav__contents">
                <img 
                    onClick={() => navigate('/')}
                    className='nav__logo'
                    src="https://marcas-logos.net/wp-content/uploads/2019/11/Netflix-Logo.png" alt="netflix-logo" 
                />
                <img 
                    onClick={() => navigate('/profile')}
                    className='nav__avatar'
                    src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png" 
                    alt="netflix-avatar" 
                />
            </div>
        </nav>
    )
}

export default Nav