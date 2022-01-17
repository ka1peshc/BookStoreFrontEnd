import React from 'react';
import './AddressForm.css';
import { getUserAddress } from '../../services/APICall'
import TextField from '@mui/material/TextField';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

function AddressForm() {
    const [value, setValue] = React.useState(1);

    const handleChange = (event) => {
        setValue(event.target.value);
    };
    const [addressValueObj, setAddressValueObj ] = React.useState({addressId:null,userId:null,address:"",town:"",state:"",typeId:null});
    const [addressObj, setAddressObj ] = React.useState([])
    // Getting from backend
    React.useEffect(()=>{
        console.log("in address form use Effecgt");
        getUserAddress().then(response => {
            setAddressObj(response.data.data)
        }).catch(err => console.log(err))
    },[])
    // storing result
    addressObj.filter((addressdetail)=>{
        return addressdetail.typeId === value;
    }).map(addressdetail => {
        setAddressValueObj({...addressValueObj,addressId:addressdetail.addressId});
        setAddressValueObj({...addressValueObj,userId:addressdetail.userId});
        setAddressValueObj({...addressValueObj,address:addressdetail.address});
        setAddressValueObj({...addressValueObj,town:addressdetail.town});
        setAddressValueObj({...addressValueObj,state:addressdetail.state});
        setAddressValueObj({...addressValueObj,typeId:addressdetail.typeId});
    })

    return (
        <div className='CustomerDetailContainer'>
            <div className='HeaderText'>
                Customer Details
            </div>
            <div className='AddressForm'>
                <div className='addressGroup1'>
                    <div style={{width:'40%'}}>
                        <label htmlFor='fullname'>Full Name</label>
                        <TextField fullWidth  id="fullname" variant="outlined" />
                    </div>
                    <div style={{width:'40%'}}>
                        <label htmlFor='mobilenumber'>Mobile Number</label>
                        <TextField fullWidth  id="mobilenumber" variant="outlined" />
                    </div>
                </div>
                <div className='addressGroup2'>
                    <label htmlFor='address'>Address</label>
                    <TextareaAutosize
                        id='address'
                        fullWidth
                        defaultValue=""
                        className='addressTxt'
                        minRows={5}
                        defaultValue={addressValueObj.address}
                    />
                </div>
                <div className='addressGroup1'>
                    <div style={{width:'40%'}}>
                        <label htmlFor='cityTown'>City/town</label>
                        <TextField fullWidth  id="cityTown" variant="outlined" defaultValue={addressValueObj.town} />
                    </div>
                    <div style={{width:'40%'}}>
                        <label htmlFor='state'>State</label>
                        <TextField fullWidth  id="state" variant="outlined" defaultValue={addressValueObj.state} />
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
    )
}

export default AddressForm
