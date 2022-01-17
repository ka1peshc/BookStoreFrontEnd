import React from 'react';
import "./Header.css"
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import book from "../../assets/images/education.png";
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Profilepopper from '../Poper/Profilepopper';
import { useHistory } from 'react-router-dom';

function Header(props) {
    let history = useHistory();
    const sendToMyCart = () =>{
        const userid = typeof localStorage.getItem('userId');
        console.log(userid);
        if (userid !== 'undefined'){
            history.push('/mycart');
        }else{
            history.push('/');
        }
    }

    return (
        <header className='Header'>
            <div className='group1'>
            <div className='bookstoreLogo'>
                <img src={book} alt='book image'/>
                <h2>Bookstore</h2>
            </div>
            <div className='headerSearchBox'>
                <SearchOutlinedIcon color="action"/>
                <input type='text' placeholder='enter book name' className='inputSearch'/>
            </div>
            </div>
            <div className='group2'>
                <div className='profileLogo'>
                {/* <PersonOutlineOutlinedIcon color="action"/> */}
                <Profilepopper/>
                {props.user}
                </div>
                <div className='headerCartLogo'>
                <ShoppingCartOutlinedIcon onClick={sendToMyCart}/>
                cart
                </div>
            </div>
            

            
            
        </header>
    )
}

export default Header
