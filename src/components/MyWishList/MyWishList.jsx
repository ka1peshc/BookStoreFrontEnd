import React from 'react'
import './MyWishList.css'
import '../../components/BookDetail/BookDetail.css';
import '../../components/BookComponent/BookCardView.css'
import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"
import WishComponent from '../../components/MyWishList/WishComponent'
import {useHistory} from 'react-router-dom';
import { getWishListByUserId } from '../../services/APICall';

function MyWishList() {
    let history = useHistory();
    const [updateList, setUpdateList] = React.useState(true)
    const [wishList, setWishList] = React.useState([])
    const id = parseInt(localStorage.getItem('UserId'));
    
    //On page load call get api for wishlist by id service 
    React.useEffect(()=>{
        getWishListByUserId(id).then((response)=>{
            setWishList(response.data.data);
        }).catch((err)=>console.log(err))
    },[updateList])

    const listenToWishlistUpdate = (data) => {
        setUpdateList(data);
    }

    const divWishList = wishList.map(note => <WishComponent wishlistprops={note} key={note.wishListItemId} listenToWishlistUpdate={listenToWishlistUpdate}/>)

    return (
        <div className='dbContainer'>
        <Header user="Kalpesh"/>
        
        <div className='dbDisplayContainer'>
            <p className="paths">
            <button className = "gotohome" onClick={()=>{history.push('/dashboard')}}> Home / </button><span id="pathtobook">My Wish List</span>
            </p>
        <div className='myWishListContainer'>
            <div className='mwlBookCount'>
                <h3 className='mwlNumber'>My Wishlist ({wishList.length})</h3>
            </div>
            <div className='mwlBookContainer'>
                {divWishList}
            </div>
        </div>
        </div>
        <Footer/>
        </div>
    )
}

export default MyWishList
