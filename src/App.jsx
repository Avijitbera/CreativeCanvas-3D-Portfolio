import React from 'react'
import { Navbar } from './components/Navbar'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Projects from './pages/Projects'
const App = () =>{
    return (
        <main className='bg-slate-300/20'>
            <Router>
                <Navbar/>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/about' element={<About/>}/>
                    <Route path='/projects' element={<Projects/>}/>
                    <Route path='/contact' element={<Contact/>}/>
                </Routes>
            </Router>
        </main>
    )
}
export default App