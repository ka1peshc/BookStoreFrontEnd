import React from 'react'
import RegistrationForm from '../../components/Registration/RegistrationForm'
import LoginForm from '../../components/Registration/LoginForm'
import logo from "../../assets/images/singuplogo.png"
import "./UserRegistration.css"
function UserRegistration() {
    const[switchLoginContainer, setSwitchLoginContainer] = React.useState(false)
    const listenToSignInSignUp = (data)=> {
        console.log(data)
        if (data === true){
            setSwitchLoginContainer(true)
        }
        else{
            setSwitchLoginContainer(false)
        }
    }

    return (
        <div className='urMainContainer'>
            <div className='urBookstoreLogo'>
                <img src={logo} alt="logo" className='urLogoimg'/>
                <h4>ONLINE BOOK SHOPPING</h4>
            </div>
            <div className='urRegContainer'>
                <div className='urTemp'>
                {/* <RegistrationForm/> */}
                {/* <LoginForm/> */}
                { switchLoginContainer ? <RegistrationForm listenToSignInSignUp={listenToSignInSignUp}/> : <LoginForm listenToSignInSignUp={listenToSignInSignUp}/>}
                </div>
                
            </div>
        </div>
    )
}

export default UserRegistration
