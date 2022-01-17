import React from 'react'
import './OrderPlaced.css';
import order from '../../assets/images/orderSuccessful.jfif';
import { Table } from 'antd';
import { useHistory } from "react-router-dom";
import { Footer, Header } from 'antd/lib/layout/layout';

function OrderPlaced() {
    let history=useHistory()
    const columns = [
        {
          title: 'Email us',
          dataIndex: 'email',
          key: 'email'
        },
        {
          title: 'Contact us',
          dataIndex: 'contact',
          key: 'contact',
        },
        {
          title: 'Address',
          dataIndex: 'address',
          key: 'address',
        }]
        const data = [
            {
              key: '1',
              email: 'admin@bookstore.com',
              contact: '+91 8163475881',
              address: '42, 14th Main, 15th Cross, Sector 4 ,opp to BDA complex, near Kumarakom restaurant, HSR Layout, Bangalore 560034'
            }]
    return (
        <div>
            <Header/>
            <div className="order">
                <img src={order} class="orderlogo"/>
                <div className="hurray">hurray!!! your order is confirmed </div>
                <div className="hurray">the order id is #123456 save the order id for</div> 
                <div className="hurray">further communication..</div>
                <br/>
                <Table className="table" columns={columns} dataSource={data} />
                <br/><br/>
                <button className="continueShopping" onClick={()=>(history.push('/dashboard'))}>CONTINUE SHOPPING</button> 
            </div>
            <Footer/>
        </div>
    )
}

export default OrderPlaced