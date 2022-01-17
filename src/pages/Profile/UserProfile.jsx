import React from 'react'
import '../Dashboard/Dashboard.css'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel'
import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"
import FormControl, { useFormControl } from '@mui/material/FormControl';

function UserProfile() {
    return (
        <div className='dbContainer'>
        <Header user="Kalpesh"/>
        <div className='dbDisplayContainer'>
            
        <div className='PersonalDetailContainer'>
        <div className='rowOne'>
                <div>
                    <strong>Personal Details</strong><button type='button'>Edit</button>
                </div>
                <div>
                    <button style={{background:'#3371B5'}}>SAVE</button>
                </div>

            </div>
        <Box
            sx={{
            width: 500,
            maxWidth: '100%',
            }}
            className='personaldetails'
        >
            <FormControl variant="standard">
                <InputLabel htmlFor="fullName">Full Name</InputLabel>
                <TextField fullWidth id="fullName" defaultValue=""/>
                <br/>
                {/* <InputLabel htmlFor="Email">Email</InputLabel>
                <TextField fullWidth id="Email" defaultValue=""/>
                <br/>
                <InputLabel htmlFor="Passwrod">Passwrod</InputLabel>
                <TextField fullWidth id="Passwrod" defaultValue=""/>
                <br/>
                <InputLabel htmlFor="MobileNumber">Mobile Number</InputLabel>
                <TextField fullWidth id="MobileNumber"defaultValue="" inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}/> */}
                <br/>
            </FormControl>
            
        </Box>

        </div>





        </div>
        <Footer />
        </div>
    )
}

export default UserProfile
