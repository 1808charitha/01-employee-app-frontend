import React, { useState, useEffect } from 'react'
import BookComponent from './StudenComponent'
import './GetAllStudentComponent.css'
import axios from 'axios'

const GetAllStudentComponent = () => {

    const [student, setStudent] = useState([])

    

    useEffect(() => {
        axios
          .get(`http://localhost:8082/api/v1/student/`)
          .then(response => setStudent(response.data))
          .catch(error => {
            alert(`Status ${error.response.data.status} - ${error.response.data.message}`)
          })
    }, [])

  return (
    <div className='student'>
        {student.map((studen, index)=>(
            <BookComponent key={index} studen={studen}/>
        ))}
    </div>
  )
}

export default GetAllStudentComponent