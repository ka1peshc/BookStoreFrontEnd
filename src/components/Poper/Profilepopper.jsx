import React from 'react'
import { useHistory } from 'react-router-dom';
import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';
import './Profilepopper.css'
import { Button } from 'antd';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import order from '../../assets/images/MyCartPopper.jfif';
import wishList from '../../assets/images/WishList.jfif';

function Profilepopper() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClick = (event) => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
      };
    
      const open = Boolean(anchorEl);
      const id = open ? 'simple-popper' : undefined;
    let history = useHistory();
    return (
        <div>     
          <PersonOutlineOutlinedIcon color="action" onClick={handleClick}/>
        {/* <img src={img2} alt="" class="logo2" onClick={handleClick} /> */}
        <Popper id={id} open={open} anchorEl={anchorEl}>
         <div className="popup">
             <div className="popupA">
                <div className="pop1">
                <b>Welcome</b>
            </div>
            <div className="pop2">
                To access account and manage orders
            </div >
            <Button className="pop3" style={{width:120,borderBlockColor:'maroon',color:'maroon',outlineColor:'maroon'}} >Login/Signup</Button>
            <div className="pop4">
              ---------------------------------------------- 
            </div>
            <div className="pop5" onClick={()=>history.push('/myorderlist')}>
              <i><img src={order} alt="Myorder" /></i>  My Orders
            </div>
            <div className="pop6">
              <i><img src={wishList} alt="Myorder" onClick={()=>history.push('/mywishlist')}/></i>  Wishlist
            </div>
            </div>
         </div>
        </Popper>
      </div>
    )
}

export default Profilepopper