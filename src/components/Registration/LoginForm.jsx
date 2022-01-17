import React from 'react'
import { signinCall } from '../../services/APICall';
import { useHistory } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import InputAdornment from "@material-ui/core/InputAdornment";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Input from "@material-ui/core/Input";
import "./Registration.css"


const emailRegex = /^[a-zA-Z0-9]+([.#_$+-][a-zA-Z0-9]+)*[@][a-zA-Z0-9]+[.][a-zA-Z]{2,3}([.][a-zA-Z]{2})?$/
const passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/


function LoginForm(props) {
    
    const [errorObj, setErrorObj] = React.useState(
        {emailRedColor:"",
        passRedColor:"",
        emailBorder:"",
        passBorder:""})
    
    const [loginObj, setLoginObj] = React.useState({email:"",password:""})

    const takeEmailValue = (e) => {
        setLoginObj({...loginObj,email:e.target.value})
    }
    const takePasswordValue = (e) => {
        setLoginObj({...loginObj,password:e.target.value})
    }

    const [values, setValues] = React.useState({
        password: "",
        showPassword: false,
        });
        
    const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
    };
    
    const handleMouseDownPassword = (event) => {
    event.preventDefault();
    };
    
    const handlePasswordChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
    setLoginObj({...loginObj,password:event.target.value})
    };
    const takeClick = () => {
        console.log(true)
        props.listenToSignInSignUp(true)
    }
    let history = useHistory();
    const validateInput = () => {
        if (emailRegex.test(loginObj.email)!==true && (passwordRegex.test(loginObj.password))!==true)
        {
            console.log("In if part")
            setErrorObj({emailRedColor:"red",
            passRedColor:"red",
            emailBorder:"1px solid red",
            passBorder:"1px solid red"})
        }
        else if (emailRegex.test(loginObj.email)===true && (passwordRegex.test(loginObj.password))!==true) {
            setErrorObj({emailRedColor:"",
            passRedColor:"red",
            emailBorder:"",
            passBorder:"1px solid red"})
        }
        else if (emailRegex.test(loginObj.email)!==true && (passwordRegex.test(loginObj.password))===true){
            setErrorObj({emailRedColor:"red",
            passRedColor:"",
            emailBorder:"1px solid red",
            passBorder:""})
        }else{
            setErrorObj({emailRedColor:"",
            passRedColor:"",
            emailBorder:"",
            passBorder:""})
            signinCall(loginObj).then((response)=>{
                console.log(response)
                localStorage.setItem("token",response.data.token)
                localStorage.setItem("UserId",response.data.data.userId)
                history.push('/dashboard')
            }).catch((err)=>{
                console.log(err)
            })
        }
    }

    return (
        
        <div className='SignupContainer'>
            <div className='HeadingText'>
                <div className='activetxt'>
                    LOGIN
                    <button className='underscore'></button>
                </div>
                <div className='deactivetxt' onClick={takeClick}>
                    SIGNUP
                </div>
            </div>
            <br/>
            <div className="regForm">
                <div className='labelStart'>
                    <label className='textFieldLabel' style={{color:errorObj.emailRedColor}}><small>Email</small></label>
                    <TextField 
                    style={{border:errorObj.emailBorder}}
                    className='inputfield' 
                    onChange={takeEmailValue}
                    id="outlined-basic" 
                    variant="outlined"/>
                </div>
                <br/>
                <div className='labelStart'>
                    <label className='textFieldLabel' style={{color:errorObj.passRedColor}}><small>Password</small></label>
                    <Input
                        style={{border:errorObj.passBorder}}
                        className='inputfield'
                        onChange={takePasswordValue}
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
                </div>
            </div>
            <label style={{textAlign:"right"}} onClick={() => {history.push("/forgotpassword")}}><small>Forgot Password?</small></label>
            <br/>
            <div className='userRegButton'>
                <button 
                className='lfBtn' 
                style={{backgroundColor:'#A03037',color:'#fff'}} 
                onClick={validateInput}>Login</button>
            </div>
            
                <h4>OR</h4>
            
            <div className='btnContainer' >
                <button className='lfBtn' style={{backgroundColor:'#4266B2'}}>Facebook</button>
                <button className='lfBtn' style={{backgroundColor:'#F5F5F5'}}>Google</button>  
            </div>
           
        </div>
        // <div className='loginContainer'>
        //     <div className='lgHeadingText'>
        //         <div className='activetxt'>
        //             LOGIN
        //             <button className='underscore'></button>
        //         </div>
        //         <div className='deactivetxt' onClick={takeClick}>
        //             SIGNUP
        //         </div>
        //     </div>
        //     <div className='lgEmailContainer'>
        //         <h5>Email</h5>
        //         <input type='email' className='lgEmailInput'/>
        //     </div>
        //     <div className='lgPasswordContainer'>
        //         <h5>Password</h5>
        //         <input type='password' className='lgPasswordInput'/>
        //         <button style={{background:'transparent',border:'none',outline:'none',float:'right'}}>forgot password?</button>
        //     </div>
        //     <input type='submit' className='lgSubmitBtn' value='Login'/>
        //     <h4 style={{float:'center'}}>OR</h4>
        //     <div className='lgBtnContainer'>
        //         <button className='lfBtn' style={{backgroundColor:'#4266B2'}}>Facebook</button>
        //         <button className='lfBtn' style={{backgroundColor:'#F5F5F5'}}>Google</button>
        //     </div>

        // </div >
        
    )
}

export default LoginForm
