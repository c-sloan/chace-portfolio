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

const HeaderBar = (): JSX.Element => {
  return (
    <Fragment>
      <AppBar position="sticky" sx={{ opacity: 0.4, backgroundColor: 'white' }}>
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
              <Button
                disableElevation
                disableRipple
                sx={{
                  color: 'black',
                  my: 2,
                  '&.MuiButtonBase-root:hover': {
                    bgcolor: 'transparent'
                  }
                }}
                component={Link}
                to={'/resume'}
                target={'_blank'}
              >
                Resume
              </Button>
              <Button
                disableElevation
                disableRipple
                href="#about-me"
                sx={{
                  ml: 1,
                  color: 'black',
                  '&.MuiButtonBase-root:hover': {
                    bgcolor: 'transparent'
                  }
                }}
              >
                About
              </Button>
              <Button
                disableElevation
                disableRipple
                href="#projects"
                sx={{
                  color: 'black',
                  ml: 1,
                  '&.MuiButtonBase-root:hover': {
                    bgcolor: 'transparent'
                  }
                }}
              >
                Projects
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Fragment>
  )
}
export default HeaderBar
