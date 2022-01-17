import React from 'react'
import {useHistory} from 'react-router-dom';
import { getWishListByUserId } from '../../services/APICall';
import book2 from '../../assets/images/dont1.png'
import '../../components/MyWishList/MyWishList.css'
import '../../components/BookComponent/BookCardView.css'
import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"
import MyOrderComponent from "../../components/MyOrders/MyOrderComponent"
import { getOrderListByUserId } from '../../services/APICall';
function MyOrders() {
    let history = useHistory();
    const [orderList, setOrderList] = React.useState([])
    const id = parseInt(localStorage.getItem('UserId'));
    React.useEffect(()=>{
        getOrderListByUserId(id).then((response)=>{
            setOrderList(response.data.data);
        }).catch((err)=>console.log(err))
    },[])

    const divOrderList = orderList.map(order => <MyOrderComponent orderlistprops={order} key={order.orderId}/>)
    return (
        <div className='dbContainer'>
        <Header user="Kalpesh"/>
        <div className='dbDisplayContainer'>
        <p className="paths">
            <button className = "gotohome" onClick={()=>{history.push('/dashboard')}}> Home / </button><span id="pathtobook">Order History</span>
            </p>
        <div className='MyorderOuterContainer'>
            {divOrderList}
        </div>
        </div>
        <Footer/>
        </div>
    )
}

export default MyOrders
