import React from 'react'
import { Box } from '@mui/material'

const Projects = (): JSX.Element => {
  return (
    <div id="projects">
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
    </div>
  )
}

export default Projects
