import React, { useState, useEffect } from 'react'
import BookComponent from './EmployeeComponent'
import './GetAllEmployeesComponent.css'

const GetAllEmployeesComponent = () => {

    const [employees, setEmployees] = useState([])

    

    useEffect(() => {
        //fetch data from backend
    }, [])

  return (
    <div className='employees'>
        {employees.map((employee, index)=>(
            <BookComponent key={index} employee={employee}/>
        ))}
    </div>
  )
}

export default GetAllEmployeesComponent