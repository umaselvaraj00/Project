// import { array } from 'prop-types';
import React from 'react'
import { useState, useEffect} from 'react';
import { useDispatch } from 'react-redux';
import {register} from './userSlice';
 import { useNavigate } from "react-router-dom";

export default function Reg() {
    const initialValues={
        name:'',
        dob:'',
        mobile:'',
        email:'',
    }
    const [values, setValues]=useState(initialValues);
    const  dispatch=useDispatch();


    useEffect(()=>{
    localStorage.setItem('form',JSON.stringify(values));
        },[values]);

        const handleChange=(event)=>{
        const{name,value}=event.target;
        setValues({...values,[name]:value});
   
        }
        const navigate = useNavigate(); 
        const handleSubmit=(event)=>{
                event.preventDefault();
                navigate('/Table');
                console.log(values);
                dispatch(register({
                    name:values.name,
                    email:values.email,
                    dob:values.dob,
                    mobile:values.number,
                    })
                );
    }
            
    
    return (

        <div className='app'>
        <form><div className='reg'><h1>Registration</h1>
        <label>Username:</label>
        <input type="text" name="name" value={values.name} placeholder="Enter your name" onChange={(handleChange) } required/><br></br><br></br>
        <label>DOB:</label>
        <input type="date" name="dob" value={values.dob}  onChange={(handleChange)} required/><br></br><br></br>
        <label>Contact Number:</label>
        <input type="text" name="mobile" value={values.mobile} placeholder="Enter your number" onChange={(handleChange)} required/><br></br><br></br>
        <label>Email id:</label>
        <input type="text" name="email" value={values.email} placeholder="Enter your email" onChange={(handleChange)} required/><br></br><br></br>
        <button onClick={(handleSubmit)}>submit</button>
        </div>
        </form>
        </div>
    )
};
    