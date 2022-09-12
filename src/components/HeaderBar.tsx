import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Container,
  Button
} from '@mui/material'

const pages: { [key: string]: string } = { About: 'About', Experience: 'Experience', Resume: 'Resume', Project: 'Project' }

const HeaderBar = (): JSX.Element => {
  return (
    <Fragment>
      <AppBar position="static" sx={{ opacity: 0.4, backgroundColor: 'white' }}>
        <Container maxWidth="xl">
          <Toolbar>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Typography
              sx={{
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'black',
                width: '100px',
                display: 'block',
                margin: 'auto auto auto 0',
                float: 'left'
              }}
            >
              Chace Brumley
            </Typography>
            <Box sx={{ display: 'inherit' }}>
            {Object.keys(pages).map((key, index) => {
              return (
                <Button
                  key={index}
                  sx={{ my: 2, color: 'black' }}
                  component={Link}
                  to={`/${pages[key].toLowerCase()}`}
                  // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
                  target= {pages[key] === ('Resume' || 'Project') ? '_blank' : ''}
                >
                  {pages[key]}
                </Button>
              )
            })}
            </Box>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Fragment>
  )
}
export default HeaderBar
