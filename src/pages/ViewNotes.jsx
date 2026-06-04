import React from 'react'
import EmptyNotebook from '../components/EmptyNotebook'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Notebook from '../components/Notebook'
import { useState } from 'react'
import { Helmet } from 'react-helmet-async'

const ViewNotes = () => {
const [containsDataArray, setContainsDataArray] = useState(JSON.parse(localStorage.getItem("noteData")) || [])

//fn to process deletion
const processDeletion = (id) =>{
  const arrayAfterDeletion = containsDataArray.filter(elem => elem.id != id)
  localStorage.setItem("noteData", JSON.stringify(arrayAfterDeletion))
  setContainsDataArray(arrayAfterDeletion)
}

  return (
    <div>
      <Helmet>
        <title>View Notes</title>
      </Helmet>
      <Navbar/>
      {containsDataArray.length === 0 ? <EmptyNotebook/> : <Notebook dataArray={containsDataArray} deleteFunction={processDeletion}/>}
      <Footer/>
    </div>
  )
}

export default ViewNotes