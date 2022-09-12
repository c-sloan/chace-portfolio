import React from 'react'
import { Box, Typography } from '@mui/material'
const About = (): JSX.Element => {
  const introText = "I'm a full stack software engineer currently working on building the next generation user interface for a surgical navigation system"
  return (
    <Box sx={{ justifyContent: 'center', flexDirection: 'column', alignItems: 'flex-start', minHeight: '100vh', padding: '100px' }}>
      <Typography variant='h3' sx={{ color: 'white' }}>
    Hi.
      </Typography>
      <Typography variant='h2' sx={{ color: 'white' }}>
    My name is Chace Brumley.
      </Typography>
      <Typography variant='h4' sx={{ color: 'white' }}>
        {introText}
      </Typography>
    </Box>
  )
}

export default About
