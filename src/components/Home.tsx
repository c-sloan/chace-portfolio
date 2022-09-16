import React from 'react'
import About from './About'
import HeaderBar from './HeaderBar'
import Projects from './Projects'
import backgroundImage from '../resources/IcelandBlur.jpg'

const Home = () => {
  return (
    <div style={{
      backgroundImage: `url(${backgroundImage})`,
      height: '3712px',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover'
    }}>
      <HeaderBar />,
      <About />,
      <Projects />,
    </div>
  )
}
export default Home
