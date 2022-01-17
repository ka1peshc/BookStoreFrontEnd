import React from 'react'
import { removeWishList } from '../../services/APICall'
import './MyWishList.css'
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

function WishComponent(props) {

    const DeleteWishList = () => {
        removeWishList(props.wishlistprops.wishListItemId).then((response)=>{
            console.log(response)
            props.listenToWishlistUpdate(false);
        }).catch((err)=>console.log(err));
        
    }

    return (
        <div className='mwlGroup1' key={props.wishlistprops.wishListItemId}>
            <img src={props.wishlistprops.bookModel.bookImageURL} alt='book1' className='mwlImageContainer' />
            <div className='BookDetail'>
                <p className='BookTitle'>{props.wishlistprops.bookModel.bookName}</p>
                <p className='BookAuthor'>by {props.wishlistprops.bookModel.bookAuthor}</p>
                <div className='PriceSection'>
                    <b>Rs {props.wishlistprops.bookModel.bookDiscountPrice}</b> 
                    <p><strike className='ActualValue'>Rs {props.wishlistprops.bookModel.bookActualPrice}</strike></p>
                </div>
            </div>
 
            <div className='mwlGroup2'>
                <DeleteOutlinedIcon onClick={DeleteWishList}/>
            </div>
        </div>
    )
}

export default WishComponent
