import React from 'react'
import { signupCall } from '../../services/APICall';
import TextField from '@mui/material/TextField';
import IconButton from "@material-ui/core/IconButton";
import InputLabel from "@material-ui/core/InputLabel";
import Visibility from "@material-ui/icons/Visibility";
import InputAdornment from "@material-ui/core/InputAdornment";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Input from "@material-ui/core/Input";
import "./Registration.css"
import { border } from '@mui/system';
import { useHistory } from 'react-router-dom';

const nameRegex=/^[A-Z]{1}[a-z]{2,}$/
const emailSignUpRegex=/^[a-zA-Z0-9]+[._+-]{0,1}[a-zA-Z0-9]@[a-zA-Z0-9]{1,10}.[a-zA-Z]{2,10}[.][a-zA-Z]*$/
const psSignUpRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
const numberRegex=/^[0-9]{10}$/

function RegistrationForm(props) {
    const [values, setValues] = React.useState({
    password: "",
    showPassword: false,
    });
    const [signUpObj, setSignUpObj] = React.useState({userFullName:"",userEmail:"",userPassword:"",userPhoneNo:null})
    const [nameErr, setNameErr] = React.useState("")
    const [nameErrBorder, setNameErrBorder] = React.useState("")
    const [emailErr, setEmailErr] = React.useState("")
    const [emailErrBorder, setEmailErrBorder] = React.useState("")
    const [passwordErr, setPasswordErr] = React.useState("")
    const [passwordErrBorder, setPasswordErrBorder] = React.useState("")
    const [numberErr, setNumberErr] = React.useState("")
    const [numberErrBorder, setNumberErrBorder] = React.useState("")
    
    const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
    };
    
    const handleMouseDownPassword = (event) => {
    event.preventDefault();
    };
    
    const handlePasswordChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
    setSignUpObj({...signUpObj,userPassword:event.target.value});
    };

    const takeclick = () => {
        props.listenToSignInSignUp(false)
    }

    //take user Input functions
    const takeFullName = (e) => {
        setSignUpObj({...signUpObj,userFullName:e.target.value})
    }
    const takeemail = (e) => {
        setSignUpObj({...signUpObj,userEmail:e.target.value})
    }
    
    const takemobileNo = (e) => {
        setSignUpObj({...signUpObj,userPhoneNo:parseFloat(e.target.value)})
    }

    let history = useHistory();
    const signUpValidation = () => {
        if(nameRegex.test(signUpObj.userFullName)){
            setNameErr("")
            setNameErrBorder("")
        }else{
            setNameErrBorder("1px solid red")
            setNameErr("Enter Full Name")
        }

        if(emailSignUpRegex.test(signUpObj.userEmail)){
            setEmailErrBorder("")
            setEmailErr("")
        }else{
            setEmailErrBorder("1px solid red")
            setEmailErr("Enter Email")
        }

        if(psSignUpRegex.test(signUpObj.userPassword)){
            setPasswordErrBorder("")
            setPasswordErr("")
        }else{
            setPasswordErrBorder("1px solid red")
            setPasswordErr("Enter Password")
        }
        
        if(numberRegex.test(signUpObj.userPhoneNo)){
            setNumberErrBorder("")
            setNumberErr("")
        }else{
            setNumberErrBorder("1px solid red")
            setNumberErr("Enter Mobile Number")
        }
        if (emailSignUpRegex.test(signUpObj.userEmail)===true && nameRegex.test(signUpObj.userFullName)===true
            && psSignUpRegex.test(signUpObj.userPassword)=== true && numberRegex.test(signUpObj.userPhoneNo)=== true){
            signupCall(signUpObj)
            .then((response)=>{console.log(response);
                    props.listenToSignInSignUp(false);})
            .catch((err)=>console.log(err));
        }
        else {
            alert("Some thing went wrong");
        }
       

    }

    return (
        <div className='SignupContainer'>
            <div className='HeadingText'>
                <div className='deactivetxt' onClick={takeclick}>
                    LOGIN
                </div>
                <div className='activetxt'>
                    SIGNUP
                    <button className='underscore'></button>
                </div>
            </div>
            <br/>
            <div className="regForm">
                <div className='labelStart'>
                    <label className='textFieldLabel'><small>Full Name</small></label>
                    <TextField className='inputfield' id="outlined-basic" variant="outlined" onChange={takeFullName} style={{border:nameErrBorder}}/>
                    <label><small style={{color:'red'}}>{nameErr}</small></label>
                </div>
                <div className='labelStart'>
                    <label className='textFieldLabel'><small>Email</small></label>
                    <TextField className='inputfield' id="outlined-basic" variant="outlined" onChange={takeemail} style={{border:emailErrBorder}}/>
                    <label><small style={{color:'red'}}>{emailErr}</small></label>
                </div>
                
                <div className='labelStart'>
                    <label className='textFieldLabel'><small>Password</small></label>
                    <Input
                        className='inputfield'
                        style={{border:passwordErrBorder}}
                        type={values.showPassword ? "text" : "password"}
                        onChange={handlePasswordChange("password")}
                        value={values.password}
                        endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            >
                            {values.showPassword ? <Visibility /> : <VisibilityOff />}
                            </IconButton>
                        </InputAdornment>
                        }
                    />
                    <label><small style={{color:'red'}}>{passwordErr}</small></label>
                </div>
                <div className='labelStart'>
                    <label className='textFieldLabel'><small>Mobile Number</small></label>
                    <TextField className='inputfield' id="outlined-basic" variant="outlined" onChange={takemobileNo} style={{border:numberErrBorder}}/>
                    <small style={{color:'red'}}>{numberErr}</small>
                </div>
            </div>
            <br/>
            <div className='userRegButton' onClick={signUpValidation}>
                <p>Signup</p>
            </div>
        </div>
    )
}

export default RegistrationForm
