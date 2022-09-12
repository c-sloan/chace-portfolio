import React from 'react'
import HeaderBar from './HeaderBar'
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

    </div>
  )
}
export default Home
