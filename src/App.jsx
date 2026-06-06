import {Routes, Route} from 'react-router-dom'
import './App.css'
import { useState } from 'react'
import Home from './pages/Home'
import ViewNotes from './pages/ViewNotes'
import About from './pages/About'
import End from './pages/End'
import NoteDetailView from './pages/NoteDetailView'
import SecurityPopup from './components/SecurityPopup'

function App() {
  const [hasChecked, setHasChecked] = useState(false)

  return (
    <>
      {!hasChecked && <SecurityPopup setHasCheckedFn={setHasChecked}/>}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/viewnotes" element={<ViewNotes />} />
        <Route path="/about" element={<About />} />
        <Route path="/viewnotes/:id" element={<NoteDetailView />} />
        <Route path="/end" element={<End />} />
      </Routes>
    </>
  );
}

export default App
