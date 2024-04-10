import React, { lazy } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AvatarLoc from './components/AvatarLoc'
import Niche from './components/Niche'
import Verify from './components/Verify'
const SignUp = lazy(() => import('./components/Signup'))

const App = () => {
  return (
    <div className='flex'>
      <Router>
        <Routes>
          <Route path='/' element={<SignUp />} />
          <Route path='/profile-image' element={<AvatarLoc />} />
          <Route path='/niche' element={<Niche />} />
          <Route path='/verify-email' element={<Verify />} />
        </Routes>
      </Router>

    </div>
  )
}

export default App
