import React from 'react'
import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"
import BookView from "../../components/BookComponent/BookCardView"
import { getAllBookCall } from '../../services/APICall';
import './Dashboard.css'

function Dashboard() {
    const [bookList, setBookList] = React.useState([])
    React.useEffect(()=>{
        console.log("In useEffect of dashboard");
        getAllBookCall().then((response)=>{
            console.log(response);
            setBookList(response.data.data)
        }).catch(err => {console.log(err)})
    },[]);
    const bookComponents = bookList.map(book => <BookView bookprops={book} key={book.bookId}/>)

    return (
        <div className='dbContainer'>
        <Header user="Kalpesh"/>
        <div className='dbBookCount'>
            <h2> Books</h2><h5 style={{color:'#E2E2E2'}}>({bookList.length})</h5>
        </div>
        
        <div className='dbDisplayContainerBook'>
            {/* <BookView/> */}
            {bookComponents}
        </div>
        <Footer />
        </div>
    )
}

export default Dashboard
