import React from 'react'
import { Container } from 'react-bootstrap'

const View = ({ submitData, handleEdit, handleDelet }) => {
  return (
        <div>
            <table className='mt-5 table table-striped table-bordered table-light mb-5'>
                <thead>
                    <tr>
                        <th colSpan={10} className='text-center fs-1' style={{backgroundColor: '#fff'}}>EMPLOYEE DATA</th>
                    </tr>
                    <tr style={{textAlign: 'center', height: '60px', verticalAlign: 'middle'}}>
                        <th>No.</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Address</th>
                        <th>DOB</th>
                        <th>Experience</th>
                        <th>Address</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        submitData.map((rec, index)=>{
                            return(
                                <tr style={{textAlign: 'center', height: '70px', verticalAlign: 'middle'}}>
                                    <td>{index + 1}</td>
                                    <td>{rec.fname}</td>
                                    <td>{rec.lname}</td>
                                    <td>{rec.email}</td>
                                    <td>{rec.phone}</td>
                                    <td>{rec.add}</td>
                                    <td>{rec.dob}</td>
                                    <td>{rec.exp}</td>
                                    <td>{rec.add}</td>
                                    <td><button className='btn me-2' style={{backgroundColor: '#1A4870'}} onClick={()=> handleEdit(rec.id)}><i className="bi bi-pen-fill" style={{color: 'white'}}></i></button><button className='btn' style={{backgroundColor: '#1A4870'}} onClick={()=> handleDelet(rec.id)}><i className="bi bi-archive-fill" style={{color: 'white'}}></i></button></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
  )
}

export default View
