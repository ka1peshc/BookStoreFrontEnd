import React from 'react'
import { useHistory } from 'react-router-dom';
import { forgotPasswordCall } from '../../services/APICall';
import book from "../../assets/images/education.png";
import "./ForgetPassword.css"

function ForgetPassword() {
    let history = useHistory();
    const [email, setEmail]=React.useState();
    const takeEmail = (e) => {
        setEmail(e.target.value);
    }
    const resetPassword = () => {
        forgotPasswordCall(email).then((response)=>{
            console.log(response)
            alert('Reset link send to your account');
        }).catch((err)=>{
            console.log(err)
        })
    }
    return (
        <div>
            <header className='fpHeader'>
                <div><img src={book} alt='book image'/></div>
                
                <h2>Bookstore</h2>
            </header>
            <div className='fpMainContainer'>
                <div className='fpHeader2'>
                <h2>Forgot Your Password?</h2>
                </div>
                <div className='fpinnerContainer'>
                    <p className='fpMsg'>Enter your email address and we'll send you a link to reset your password.</p>
                    <label className='fpLabel'>Email</label>
                    <input type='email' className='fpEmail' onChange={takeEmail} required/>
                    <button className='fpSubmitBtn' onClick={resetPassword}>Reset Password</button>
                    <br/>
                </div>
                <div className='fpCreateBtn'>
                    <p className='fpCreateAcc' onClick={()=>{history.push("/")}}>CREATE ACCOUNT</p>
                </div>
            </div>
        </div>
    )
}

export default ForgetPassword
