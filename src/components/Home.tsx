import React from 'react'
import About from './About'
import HeaderBar from './HeaderBar'

const Home = () => {
  return (
    <div style={{
      backgroundImage: "url('../resources/IcelandBlur.jpg')",
      height: '3712px',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover'
    }}>
      <HeaderBar />,
      <About />,
    </div>
  )
}
export default Home
