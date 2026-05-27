import {Routes, Route} from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import ViewNotes from './pages/ViewNotes'
import About from './pages/About'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element= {<Home/>}/>
        <Route path='/viewnotes' element= {<ViewNotes/>}/>
        <Route path='/about' element= {<About/>}/>
      </Routes>
    </>
  )
}

export default App
