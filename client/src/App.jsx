import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom'

import { AddStudent } from './pages/AddStudent'
import { StudentList } from './pages/StudentList'

import { Layout } from './Layout'


function App() {

  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<AddStudent />} />
          <Route path='/studentList' element={<StudentList />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
