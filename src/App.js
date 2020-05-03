import React from 'react'
import HomePage from './pages/Home-page'
import ProfilePage from './pages/profiles-page'
import ContactPage from './pages/contact-page'
import { Route } from 'react-router-dom'
import Navbar from './components/navbar'

export default function App() {
  return (
    <div>
      <Navbar/>
      <Route exact  path='/' component={HomePage} />
      <Route path='/profile' component={ProfilePage}/>
      <Route path='/contact' component={ContactPage}/>

    </div>
  )
}
