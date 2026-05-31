import {Routes, Route} from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import ViewNotes from './pages/ViewNotes'
import About from './pages/About'
import End from './pages/End'
import NoteDetailView from './components/NoteDetailView'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/viewnotes" element={<ViewNotes />} />
        <Route path="/about" element={<About />} />
        <Route path="/privacy" element={<End />} />
        <Route path="/terms" element={<End />} />
        <Route path="/contact" element={<End />} />
        <Route path="/viewnotes/:id" element={<NoteDetailView />} />
      </Routes>
    </>
  );
}

export default App
