import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Resume from './components/Resume'
import ProjectOne from './components/ProjectOne'

const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/resume" element={<Resume />}></Route>
        <Route path="/projectone" element={<ProjectOne />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
