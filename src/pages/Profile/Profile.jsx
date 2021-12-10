import { useSelector } from 'react-redux'

import { selectUser } from '../../redux/user/userSlice'
import { logoutDb } from '../../utils/firebase'

import Nav from '../../components/Nav/Nav'
import './Profile.css'

const Profile = () => {

    const user = useSelector(selectUser)
    
    return (
        <div className='profile'>
            <Nav />
            <div className="profile__body">
                <h1>Edit Profile</h1>
                <div className="profile__info">
                    <div className="profile__infoLeft">
                        <img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png" alt="profile-icon" />
                    </div>
                    <div className="profile__infoRight">
                        <div className="profile__details">
                            <h2>{user.email}</h2>
                            <h3>Plans (Current Plan: premium)</h3>

                            <div className="profile__planWrapper">
                                <h3>Renewal date: 04/03/2021</h3>
                                <div className="profile__plan">
                                    <div className="profile__planInfo">
                                        <h4>Netflix Standard</h4>
                                        <h5>1080p</h5>
                                    </div>
                                    <button className='profile__subscribed'>Subscribe</button>
                                </div>
                                <div className="profile__plan">
                                    <div className="profile__planInfo">
                                        <h4>Netflix Standard</h4>
                                        <h5>1080p</h5>
                                    </div>
                                    <button className='profile__subscribed'>Subscribe</button>
                                </div>
                                <div className="profile__plan">
                                    <div className="profile__planInfo">
                                        <h4>Netflix Standard</h4>
                                        <h5>1080p</h5>
                                    </div>
                                    <button className='profile__unsubscribed'>Current Package</button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <button className='profile__button' onClick={logoutDb}>Sign Out</button>
            </div>
        </div>
    )
}

export default Profile