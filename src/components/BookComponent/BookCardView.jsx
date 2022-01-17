import React from 'react'
import "./BookCardView.css"
import book from "../../assets/images/dont1.png";
import { useHistory } from 'react-router-dom';

function BookCardView(props) {
    let history = useHistory();
    
    const passBookDetail = () => {
        localStorage.setItem("bookId",props.bookprops.bookId);
        history.push('/bookdetail');
    }
    return (
        <div className='bookContainer' onClick={passBookDetail}>
            <div className='imageContainer'>
                <img src={props.bookprops.bookImageURL} alt="Dont make me think" className='bookImage'/>
            </div>
            <div className='BookDetail'>
                <p className='BookTitle'>{props.bookprops.bookName}</p>
                <p className='BookAuthor'>by {props.bookprops.bookAuthor}</p>
                <div className='Rating'>
                    <p className='RatingAvg'>{props.bookprops.avgRating} ★</p> ({props.bookprops.countRating})
                </div>
                <div className='PriceSection'>
                    <b>Rs {props.bookprops.bookDiscountPrice}</b>&ensp; 
                    <p><strike className='ActualValue'>Rs {props.bookprops.bookActualPrice}</strike></p>
                </div>
            </div>
        </div>
    )
}

export default BookCardView
