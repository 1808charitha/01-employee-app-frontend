import React from 'react'

const StudenComponent = ({studen}) => {
return (
        <div className="card">
          <div className="text-container">
            <h3>{studen.studentName}</h3>
            <p className="id">({studen.studentID})</p>
            <p className='email'>{studen.studentEmail}</p>
            <p className='age'>Age : {studen.studentAge}</p>
          </div>
        </div>
      );
}

export default StudenComponent