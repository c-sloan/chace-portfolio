import React from 'react'
import About from './About'
import HeaderBar from './HeaderBar'
import Projects from './Projects'
import Cursor from './Cursor'
// import backgroundImage from '../resources/IcelandBlur.jpg'

/* style={{
  backgroundImage: `url(${backgroundImage})`,
  height: '3712px',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover'
}} */

const Home = () => {
  return (
    <div>
      <Cursor />
      <HeaderBar />
      <About />
      <Projects />
    </div>
  )
}
export default Home
