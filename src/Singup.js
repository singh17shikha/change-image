import React from 'react'
import TextField from '@mui/material/TextField';
import './singup.css'

const Singup = () => {
    return (
        <div className='singup-container'>
            <h1>Create your account</h1>
            <div className='singup-form'>
                <TextField id="filled-basic"
                    label="Name"
                    variant='outlined'
                />
                <TextField id="filled-basic"
                    label="Phone"
                    variant='outlined' />
                <p style={{textAlign:'right', color:'rgb(29, 155, 240)',cursor:'pointer'}}>Use email instead</p>
                <h6>Date of Birth</h6>
                <p>This will not be shown publicly. Confirm your own age, even if this account is for a business, a pet, or something else.</p>

                <select >
                <option>Jan</option>
                <option>Feb</option>
                <option>Mar</option>
                <option>Apr</option> 
                </select>
            </div>
        </div>
    )
}

export default Singup;
