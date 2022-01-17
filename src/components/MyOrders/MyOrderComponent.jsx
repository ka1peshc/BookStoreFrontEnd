import React from 'react'
import '../../components/MyWishList/MyWishList.css'
import '../../components/BookComponent/BookCardView.css'

function MyOrderComponent(props) {
    return (
        <>
        <div className='MyOrderBookContainer'>
                <div className='mwlGroup1'>
                    <img src={props.orderlistprops.bookModel.bookImageURL} alt='book1' className='mwlImageContainer' />
                    <div className='BookDetail'>
                    <p className='BookTitle'>{props.orderlistprops.bookModel.bookName}</p>
                    <p className='BookAuthor'>by {props.orderlistprops.bookModel.bookAuthor}</p>
                <div className='PriceSection'>
                    <b>Rs {props.orderlistprops.bookModel.bookActualPrice}</b> 
                    <p><strike className='ActualValue'>Rs {props.orderlistprops.bookModel.bookDiscountPrice}</strike></p>
                </div>
                </div>
                </div>
                <div className='mwlGroup2'>
                <div className='greenDot'></div>
                <h4>
                Order Placed on {props.orderlistprops.orderDate}
                </h4>
                </div>
            </div>
            <br/>
            </>
    )
}

export default MyOrderComponent
