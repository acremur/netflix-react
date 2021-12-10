import { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { getUserDb } from './utils/firebase'
import { selectUser } from './redux/user/userSlice'

import Home from "./pages/Home/Home"
import Start from './pages/Start/Start'
import Profile from './pages/Profile/Profile'

const App = () => {

  const dispatch = useDispatch() 
  const user = useSelector(selectUser)

  useEffect(() => {
    const unsubscibe = getUserDb(dispatch)

    return unsubscibe
  }, [dispatch])
  
  return (
    <div>
      <Router>
        {!user ? (
          <Start />
        ): (
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        )}
      </Router>
    </div>
  )
}

export default App