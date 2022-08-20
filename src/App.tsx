import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import Home from './components/Home'
import Resume from './components/Resume'

const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Home />
          }
        >
        </Route>
        <Route
          path="/resume"
          element={
            <Resume />
          }
        >
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
