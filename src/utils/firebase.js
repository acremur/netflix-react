import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore/lite'
import { 
    getAuth, 
    signOut,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged
} from "firebase/auth";
import { login, logout } from '../redux/user/userSlice';

const firebaseConfig = {
    apiKey: "AIzaSyCZYCaQwXanrhkgegrhRw4uwAJH5Kq3Ufw",
    authDomain: "netflix-nextjs-8a511.firebaseapp.com",
    projectId: "netflix-nextjs-8a511",
    storageBucket: "netflix-nextjs-8a511.appspot.com",
    messagingSenderId: "91578763265",
    appId: "1:91578763265:web:5d0f96a5bc4710fabfd800"
}

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();

// Used on SignIn page
export const createUserDb = async (email, password) => {
    try {
        const user = await createUserWithEmailAndPassword(auth, email, password)
        console.log(user)
    } catch (error) {
        alert(error.message)
    }
}

// Used on Signin page
export const signInDb = async (email, password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password)
    } catch (error) {
        alert(error.message)
    }
}

// Used on profile page
export const logoutDb = async () => {
    await signOut(auth)
}

// Used on App page. Use login and logout actions from redux
export const getUserDb = async dispatch => {
    onAuthStateChanged(auth, user => {
        try {
            if (user) {
                dispatch(login({
                    uid: user.uid,
                    email: user.email
                }))
            } else {
                dispatch(logout())
            }
        } catch (error) {
            alert(error.message)
        }
    })
} 
 
export default db