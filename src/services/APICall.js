import axios from 'axios'

let config = {
    headers:{
        Authorization:"Bearer" +" "+ localStorage.getItem("token")
    }
}
// User api
export const signupCall = async (obj) => {
    let response = await axios.post("https://localhost:44336/api/User/register",obj)
    return response
}
export const signinCall = async (obj) => {
    let response = await axios.post("https://localhost:44336/api/User/login",obj)
    return response
}
export const forgotPasswordCall = async (obj) => {
    let response = await axios.post(`https://localhost:44336/api/User/forgotpassword?email=${obj}`)
    return response
}

// Book api
export const getAllBookCall = async () => {
    let response = await axios.get("https://localhost:44336/book/Book/getAllBooks")
    return response
}
export const getBookByIdCall = async () => {
    let response = await axios.get(`https://localhost:44336/book/Book/getOneBook?bookId=${parseInt(localStorage.getItem("bookId"))}`)
    return response
}


//Wish list API
export const getWishListByUserId = async () => {
    let response = await axios.get(`https://localhost:44336/wishList/WishList/displayItems?userId=${parseInt(localStorage.getItem("UserId"))}`)
    return response
}
export const removeWishList = async (obj) => {
    let response = await axios.delete(`https://localhost:44336/wishList/WishList/removeItem?wishListItemId=${obj}`)
}
export const addBookToWishList = async (obj) => {
    let response = await axios.post("https://localhost:44336/wishList/WishList/addItem",obj,config)
    return response
}

//Cart list api
export const addBookToCart = async (obj) => {
    let response = await axios.post("https://localhost:44336/Cart/Cart/addNewItem",obj,config)
    return response
}

//order api
export const getOrderListByUserId = async () => {
    let response = await axios.get(`https://localhost:44336/order/Order/displayOrder?userId=${parseInt(localStorage.getItem("UserId"))}`)
    return response
}

//Address api
export const getUserAddress = async () => {
    let response = await axios.get(`https://localhost:44336/Cart/displayAddress?userId=${parseInt(localStorage.getItem("UserId"))}`)
    return response
}
export const updateUserAddress = async (obj) => {
    let response = await axios.put("https://localhost:44336/Address/updateAddress",obj,config)
    return response
}
export const addUserAddress = async (obj) => {
    let response = await axios.put("https://localhost:44336/Address/addNewAddress",obj,config)
    return response
}

//FeedBack API
export const getFeedbackForBookId = async () => {
    let response = await axios.get(`https://localhost:44336/feedback/Feedback/displayReviews?bookId=${parseInt(localStorage.getItem("bookId"))}`)
    return response
}
export const addFeedbackForBook = async (obj) => {
    let response = await axios.post("https://localhost:44336/feedback/Feedback/addNewReview",obj,config)
    return response
}