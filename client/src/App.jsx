import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom'

import { Dashboard} from './pages/Dashboard'
import { AddStudents } from './pages/AddStudents'
import { StudentList } from './pages/StudentList'

import { Layout } from './Layout'


function App() {

  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Dashboard/>} />
          <Route path='/addStudents' element={<AddStudents />} />
          <Route path='/studentList' element={<StudentList />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
