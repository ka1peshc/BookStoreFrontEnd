import React from 'react';
import { useHistory } from 'react-router-dom';
import { getBookByIdCall, addBookToCart, addBookToWishList,getFeedbackForBookId,addFeedbackForBook } from '../../services/APICall';
import Rating from '@mui/material/Rating';
import BookImage from '../../assets/images/dont1.png';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import '../../pages/Dashboard/Dashboard.css';
import './BookDetail.css';
import ReviewContainer from './ReviewContainer';
function BookDetail() {
    const [textReview, setTextReview] = React.useState("");
    const [value, setValue] = React.useState(0);
    const [ feedbackList, setFeedbackList ] = React.useState([]);
    const [booklist,setBookList] = React.useState({});
    const [sendToCartObj, setSendToCartObj] = React.useState({userId:parseInt(localStorage.getItem('UserId')),bookId:parseInt(localStorage.getItem('bookId')),bookQuantity:1});
    const [sendToWishList, setSendToWishList] = React.useState({bookId:parseInt(localStorage.getItem('bookId')),userId:parseInt(localStorage.getItem('UserId'))});
    const [sendReviewObj, setSendReviewObj] = React.useState({userId:parseInt(localStorage.getItem('UserId')),bookId:parseInt(localStorage.getItem('bookId')),rating:0,review:""});
    let history = useHistory();
    
    //Retrieve book information
    React.useEffect(()=>{
        getBookByIdCall().then((response)=>{
            setBookList(response.data.data[0])
        }).catch(err => {console.log(err)})
    },[]);

    //Retrieve feedback for book
    React.useEffect(()=>{
        getFeedbackForBookId().then((response)=>{
            setFeedbackList(response.data.data)
        }).catch(err=>console.log(err))
    },[sendReviewObj]);
    const feedbacks = feedbackList.map(feedback => <ReviewContainer reviewprops={feedback} key={feedback.feedbackId}/>)

    //add book to cart
    const addToCart = () => {
        console.log(sendToCartObj);
        addBookToCart(sendToCartObj).then((response)=>{
            console.log(response)
            alert(booklist.bookName+" add to cart successful")
            history.push('/mycart');
        }).catch(err => {
            console.log(err);
        });
        
    }

    //add to wish list
    const addToWishList = () => {
        console.log(sendToWishList);
        addBookToWishList(sendToWishList).then((response)=>{
            console.log(response)
            alert(booklist.bookName+" add to wishlist successful");
        }).catch(err => {
            console.log(err);
        });
    }

    //assign text review 
    const takeReviewText = (event) =>{
        setSendReviewObj({...sendReviewObj,review:event.target.value});
    }
    //assign star rating
    const takeRatingStar = (event,newValue) =>{
        setSendReviewObj({...sendReviewObj,rating:newValue});
        setValue({value:newValue});
        console.log(newValue);
    }
    //sending review to back end by user
    const sendBookReview = () => {
        if (sendReviewObj.rating !== 0){

            addFeedbackForBook(sendReviewObj).then((response)=>{
                console.log(response);
                alert(response.message);
            }).catch(err=> console.log(err))
        }
        else{
            alert("Select rating and Enter review")
        }
    }
    
    return (
        <div className = "dbContainer" >
            <Header user='Kalpesh'/>
        <div className='dbDisplayContainer'>
        <p className="paths">
             <button className = "gotohome" onClick={()=>{history.push('/dashboard')}}> Home / </button><span id="pathtobook">{booklist.bookName}</span>
             </p>

        <div className="imagebox">
        <img src={booklist.bookImageURL} alt="Image" className = "booklogo" />
         </div>
        <div className="tagbuttons">
           
        <button id="addtobag" onClick={addToCart} type='button'>ADD TO BAG</button> 
       
       <button id="wishlist" onClick={addToWishList} type='button'>❤ WISHLIST</button> 
       
        </div>
        <div className = "description">
             <div className="detailsofbook">
          <p id="booktitle">{booklist.bookName}</p>
            <p id ="authorbook">by {booklist.bookAuthor}</p>
          <div className="ratingbox">
                <span>{booklist.avgRating}★</span>
            </div>
             <span className="countreviewbook">({booklist.countRating})</span>
             <span className="bookprice">Rs. {booklist.bookDiscountPrice}</span> 
             <span className="originalprice"><s>Rs. {booklist.bookActualPrice}</s></span>
             <hr className="borderline"></hr>

         <div className="descriptionofbookdetails">
        <ul id="caption"><li>Book Detail</li></ul>
         <p id="Bookparagraph">{booklist.bookDetail}</p>
         <hr className="borderline"></hr> 
        </div>

        <div className="feedback">
        <div className="feedback-title">
            <p className="para-for-custfeedback">Customer Feedback</p>
        </div>
        <div className="rating-pad">
        <div className="overallrating">
        <p className="para-for-overallrating"> Overall rating</p>
           <div id="stars">
           
            <Rating
                name="simple-controlled"
                value={value}
                onChange={(event, newValue) => {
                    setSendReviewObj({...sendReviewObj,rating:newValue});
                    setValue(newValue);
            }}
            />
            </div>

        <div className="writereview">
           <input className="input-for-review" type="text" placeholder="Write your review" onChange={takeReviewText}/> 
        <div className="submitbutton" onClick={sendBookReview}>Submit</div>
        </div>
        </div>
        </div>

        <div className='PeopleReviews'>
            {feedbacks}
        </div>
        
        </div>
        </div>
        </div>
        </div>
        <Footer/>
        </div>
    )
}

export default BookDetail
