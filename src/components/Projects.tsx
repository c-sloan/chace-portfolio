import React from 'react'
import { Box } from '@mui/material'

const Projects = (): JSX.Element => {
  return (
    <Box id="projects" sx={{ justifyContent: 'center', flexDirection: 'column', alignItems: 'flex-start', minHeight: '50vh', padding: '100px', color: 'white' }}>
      <Box
        className="p1"
        sx={{
          width: 300,
          height: 300,
          margin: '20px',
          opacity: [0.9, 0.8, 0.7],
          backgroundColor: 'primary.main',
          '&:hover': {
            backgroundColor: 'primary.dark',
            opacity: [1.0]
          }
        }}
      />
      <Box
        sx={{
          width: 300,
          height: 300,
          margin: '20px',
          opacity: [0.9, 0.8, 0.7],
          backgroundColor: 'primary.main',
          '&:hover': {
            backgroundColor: 'primary.dark',
            opacity: [1.0]
          }
        }}
      />
      <Box
        sx={{
          width: 300,
          height: 300,
          margin: '20px',
          opacity: [0.9, 0.8, 0.7],
          backgroundColor: 'primary.main',
          '&:hover': {
            backgroundColor: 'primary.dark',
            opacity: [1.0]
          }
        }}
      />
    </Box>
  )
}

export default Projects
