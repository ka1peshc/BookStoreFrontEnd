import React from 'react'
import './ProfilePage.css'
import '../../components/Address/AddressForm.css';
import TextField from '@mui/material/TextField';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"
import { useHistory } from 'react-router-dom';

function ProfilePage() {
    let history = useHistory();
    const [value, setValue] = React.useState('female');

    const handleChange = (event) => {
        setValue(event.target.value);
    };
    return (
        <div className='dbContainer'>
        <Header user="Kalpesh"/>
        <div className='dbDisplayContainer'>
        <p className="paths">
            <button className = "gotohome" onClick={()=>{history.push('/dashboard')}}> Home / </button><span id="pathtobook">profile</span>
        </p>
        

        <div className='profileContainer'>
            <div className='profileText'>
                <div style={{display:'flex'}}>
                    <h2>Personal Details</h2>
                    <button className='personalEditBtn'>Edit</button>
                </div>
                <button className='profileSave'>Save</button>
            </div>
            <div className='addressGroup2'>
                <label htmlFor='fullname'>Full Name</label>
                <TextField fullWidth  id="fullname" variant="outlined" color="secondary"/>
            </div>
            <div className='addressGroup2'>
                <label htmlFor='email'>Email Id</label>
                <TextField fullWidth  id="email" variant="outlined" color="secondary"/>
            </div>
            <div className='addressGroup2'>
                <label htmlFor='Password'>Password</label>
                <TextField fullWidth  id="Password" variant="outlined" type="password" color="secondary"/>
            </div>
            <div className='addressGroup2'>
                <label htmlFor='mobile'>Mobile Number</label>
                <TextField fullWidth  id="mobile" variant="outlined" color="secondary"/>
            </div>
        </div>

        
        <div className='profileContainer'>
            <div className='profileText'>
                <h2>Address Details</h2>
                <button className='profileSave2'>Add New Address</button>
            </div>
            <div className='AddressForm'>
                <div className='addressGroup2'>
                    <label htmlFor='address'>Address</label>
                    <TextareaAutosize
                        id='address'
                        fullWidth
                        defaultValue=""
                        className='addressTxt'
                        minRows={5}
                    />
                </div>
                <div className='addressGroup1'>
                    <div style={{width:'40%'}}>
                        <label htmlFor='cityTown'>City/town</label>
                        <TextField fullWidth  id="cityTown" variant="outlined" />
                    </div>
                    <div style={{width:'40%'}}>
                        <label htmlFor='state'>State</label>
                        <TextField fullWidth  id="state" variant="outlined" />
                    </div>
                </div>
                <div className='RadioGroup'>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">Type</FormLabel>
                        <RadioGroup
                            row 
                            aria-label="type"
                            name="controlled-radio-buttons-group"
                            value={value}
                            onChange={handleChange}
                        >
                            <FormControlLabel value="1" control={<Radio />} label="Home" />
                            <FormControlLabel value="2" control={<Radio />} label="Work" />
                            <FormControlLabel value="3" control={<Radio />} label="Other" />
                        </RadioGroup>
                        </FormControl>
                </div>
            </div>
            
        </div>
        </div>
        <Footer/>
        </div>
    )
}

export default ProfilePage
