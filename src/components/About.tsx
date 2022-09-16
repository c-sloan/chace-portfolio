import React from 'react'
import { Box, Typography, Grid } from '@mui/material'

const About = (): JSX.Element => {
  const introText = "I'm a full stack software engineer currently working on building the next generation user interface for a surgical navigation system"
  const technologyStack = ['TypeScript', 'Javascript (ES6+)', 'React.js', 'D3.js', 'Node.js', 'Three.js']
  const techIntro = "Technology I've worked with recently:"
  return (
    <Box id="about-me" sx={{ justifyContent: 'center', flexDirection: 'column', alignItems: 'flex-start', minHeight: '100vh', padding: '100px', color: 'white' }}>
      <Typography variant='h3'>
        Hi.
      </Typography>
      <Typography variant='h2'>
        My name is Chace Brumley.
      </Typography>
      <Typography variant='h4'>
        {introText}
      </Typography>
      <Typography variant='h5' sx={{ pt: '5%' }}>
        {techIntro}
      </Typography>
      <Box sx={{ width: '40%' }}>
        <Grid container spacing={{ xs: 2, md: 3 }} >
          {technologyStack.map((tech, index) => (
            <Grid item md={4} key={index}>
              <li>{tech}</li>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  )
}

export default About
