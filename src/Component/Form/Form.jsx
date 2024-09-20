import React, { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap'
import View from '../View/View';
import helper from '../Helper/Helper';

const Form = () => {

    const [conForm, setConForm] = useState(
        {
            id : '',
            fname: '',
            lname: '',
            email: '',
            phone: '',
            dob: '',
            exp: '',
            add: '',
        }
    );

    const [submitData, setSubmitData] =  useState(helper());

    const handleInputChange = (e) => {
        console.log(e.target.value);
     
        const name = e.target.name;
        const value = e. target.value;

        setConForm({ ...conForm, [name]: value })
    }

    const handleEdit = (id) => {

        let EditId = submitData.find((item) => {
            return item.id === id
        });
        
        setConForm(EditId);         
    }

    const  handleDelet = (id) => {

        let data = [...submitData];

        let deleteData = submitData.filter((d) => {
            return d.id !== id;
        });
        console.log(data);
        
        setSubmitData(deleteData);

        localStorage.setItem('storage', JSON.stringify(storage));
    }

    const handleSubmit = (e) => {

        e.preventDefault();

        console.log("form : ", conForm);

        if (conForm.id) {

            const updatStorage = submitData.map((data) => {

                if(data.id == conForm.id){

                    return conForm;
                }
                else{
                    return data;
                }

            });

            setSubmitData(updatStorage);

        } else {

            conForm.id = Math.floor(Math.random() * 10000)
    
            setSubmitData([...submitData, conForm]);
        }
        
        
        setConForm(
            {
                id : '',
                fname: '',
                lname: '',
                email: '',
                phone: '',
                dob: '',
                exp: '',
                add: '',
            }
        );
    }

    useEffect(()=>{

        localStorage.setItem('storage', JSON.stringify(submitData))

    },[submitData])

  return (
    <div>
        <div className='em-form'>
            <Container>
            <h1 className='text-center fw-bold'>EMPLOYEE FORM</h1>
                <form className='row mt-4' onSubmit={handleSubmit}>
                    <input type="number" value={conForm.id}  hidden/>
                    <div className="col-12 mt-3">
                        <label className='mb-3 fw-bold'>First-Name : </label>
                        <input type="text" name='fname' className="form-control" value={conForm.fname} onChange={handleInputChange} placeholder='Enter Your F-Name' required/>
                    </div>
                    <div className="col-12 mt-3">
                        <label className='mb-3 fw-bold'>Last-Name : </label>
                        <input type="text" name='lname' className="form-control" value={conForm.lname} onChange={handleInputChange} placeholder='Enter Your L-Name' required/>
                    </div>
                    <div className="col-12 mt-3">
                        <label className='mb-3 fw-bold'>Email : </label>
                        <input type="email" name='email' className="form-control" value={conForm.email} onChange={handleInputChange} placeholder='Enter Your Email' required/>
                    </div>
                    <div className="col-12 mt-3">
                        <label className='mb-3 fw-bold'>Phone : </label>
                        <input type="tel" name='phone' className="form-control" value={conForm.phone} onChange={handleInputChange} placeholder='Enter Your Phone Number' required/>
                    </div>
                    <div className="col-12 mt-3">
                        <label className='mb-3 fw-bold'>DOB : </label>
                        <input type="date" name='dob' className="form-control" value={conForm.dob} onChange={handleInputChange} required/>
                    </div>
                    <div className="col-12 mt-3">
                        <label className='mb-3 fw-bold'>Experience : </label>
                        <input type="text" name='exp' className="form-control" value={conForm.exp} onChange={handleInputChange} placeholder='Enter Your Experience' required/>
                    </div>
                    <div className="col-12 mt-3">
                        <label className='mb-3 fw-bold'>Address : </label>
                        <textarea type="text" name='add'  rows="3" cols="50" className="form-control" value={conForm.add} onChange={handleInputChange} placeholder='Enter Your Address' required></textarea>  
                    </div>
                    <div className="col-12 mt-4">
                        <button type="submit" className="btn text-white ps-4 pe-4 pt-3 pb-3 w-100 fw-semibold" style={{backgroundColor: '#1A4870'}}>SUBMIT</button>
                    </div>
                </form>
            </Container>
        </div>
        <div>
            <View submitData={submitData} handleEdit={handleEdit} handleDelet={handleDelet}/>
        </div>
    </div>
  )
}

export default Form
