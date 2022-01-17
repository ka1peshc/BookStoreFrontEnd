import React from 'react'
import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"
import '../../components/BookComponent/BookCardView.css'
import location from "../../assets/images/location.png"
import book from "../../assets/images/dont1.png";
import '../../pages/Dashboard/Dashboard.css'
import './MyCart.css'
import AddressForm from '../../components/Address/AddressForm'
import { useHistory } from 'react-router-dom';

function MyCart() {
    
    const [bookCount, setBookCount] = React.useState(1);
    let history = useHistory()

    const IncrementCount = () => {
        setBookCount(bookCount+1)
    }
    let DecrementCount = () => {
        setBookCount(bookCount-1)
    }
    if(bookCount<=0){
        setBookCount(1)
    }

    
    return (
        <div className='dbContainer'>
        <Header user="Kalpesh"/>
        <div className='dbDisplayContainer'>
        <div className='MyCartContainer'>
            <div className='mcGroup1'>
                <h2>My cart(1)</h2>
                <div className='selectOpt'>
                <img src={location} alt='Location mark' className='locationMark'/>
                <select id="cars" name="cars">
                <option value="volvo">Use current location</option>
                </select>
            </div>
                
                
            </div>
            <div className='mcGroup2'>
                <div className='mcBookDetailContainer'>
                    <img src={book} alt="Book1"  className='mwlImageContainer'/>
                    <div className='mcbookDetail'>
                    <p className='BookTitle'>Don't Make Me Think</p>
                    <p className='BookAuthor'>by Steve King</p>
                    <div className='PriceSection'>
                    <b>Rs 1500</b> 
                    <p><strike className='ActualValue'>Rs 2000</strike></p>
                    </div>
                    </div>
                </div>
                
                <div className='IncrementQuantity'>
                    <button className='roundBtn' onClick={DecrementCount} >-</button>
                    <input type='number' className='numTxt' value={bookCount}/>
                    <button className='roundBtn' onClick={IncrementCount}>+</button>
                    <div className='removeBtn'>
                        <button style={{border:'none',background:'transparent',outline:'none',cursor:'pointer'}}>Remove</button>
                    </div>
                </div>
            </div>
            <div className='mcGroup3'>
                <button className='placeOrder' onClick={()=>history.push('/orderplaced')}>PLACE ORDER</button>
            </div>
        </div>
        <div className='MyCartAddress'>
            <AddressForm/>
        </div>
        </div>
        <Footer />
        </div>
    )
}

export default MyCart
