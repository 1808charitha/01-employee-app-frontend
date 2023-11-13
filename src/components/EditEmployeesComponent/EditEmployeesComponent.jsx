import React, { useState } from 'react';
import './EditEmployeesComponent.css';

const EditEmployeesComponent = () => {
  const [employeeID, setEmployeeID] = useState('')
  const [employeeInfo, setEmployeeInfo] = useState({
    employeeName: '',
    employeeEmail: '',
    dateOfBirth: '',
  });

  const employeeNameHandler = (event) => {
    setEmployeeInfo({
      ...employeeInfo,
      employeeName: event.target.value
    });
  };

  const employeeEmailHandler = (event) => {
    setEmployeeInfo({
      ...employeeInfo,
      employeeEmail: event.target.value
    });
  };

  const employeeIDHandler = (event) => {
    setEmployeeID(event.target.value)
  };

  const dateOfBirthHandler = (event) => {
    setEmployeeInfo({
      ...employeeInfo,
      dateOfBirth: event.target.value
    });
  };

  const employeeIDValidator = () => {
    //Validate data from backend
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    //send data to backend
  };

  const { employeeName, employeeEmail, dateOfBirth } = employeeInfo;

  return (
    <form className="form-container" onSubmit={formSubmitHandler}>
      <h2>Updating Employee</h2>

      <div className="form-group">
        <label>Employee ID</label>
        <input
          type="text"
          placeholder="Give the Employee ID"
          value={employeeID}
          onChange={employeeIDHandler}
          required
        />
      </div>
      <div>
        <button onClick={employeeIDValidator}>Check</button>
      </div>

      <div className="form-group">
        <label>Employee Name</label>
        <input
          type="text"
          placeholder="Enter the employee name"
          value={employeeName}
          onChange={employeeNameHandler}
          required
        />
      </div>

      <div className="form-group">
        <label>Employee Email</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter the employee email"
          value={employeeEmail}
          onChange={employeeEmailHandler}
          required
        />
      </div>

      <div className="form-group">
        <label>Date of Birth</label>
        <input
          type="date"
          value={dateOfBirth}
          onChange={dateOfBirthHandler}
          required
        />
      </div>

      <div>
        <button type="submit">Update</button>
      </div>
    </form>
  );
};

export default EditEmployeesComponent;
