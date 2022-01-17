import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import UserReg from "../pages/UserRegistration/UserRegistration"
import SignUp from "../components/Registration/RegistrationForm"
import ProtectedRoute from "./ProtectedRoute";
import AuthRouter from "./AuthRouter";
import Dashboard from "../pages/Dashboard/Dashboard"
import MyWishList from "../components/MyWishList/MyWishList";
import MyOrders from "../components/MyOrders/MyOrders"
import OrderPlaced from "../pages/OrderPlaced/OrderPlaced";
import BookDetail from "../components/BookDetail/BookDetail";
import MyCart from '../components/MyCart/MyCart';
import UserProfile from "../pages/Profile/UserProfile";
import ForgotPassword from "../pages/ForgetPassword/ForgetPassword"
import ProfilePage from '../pages/ProfilePage/ProfilePage';

export default function RouterDOM() {
  return (
    <Router>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <AuthRouter exact path="/" component={UserReg}/>
          <AuthRouter exact path="/forgotpassword" component={ForgotPassword}/>
          <AuthRouter path = "/dashboard" component = {Dashboard} />
          <AuthRouter path = "/mywishlist" component = {MyWishList} />
          <AuthRouter path = "/myorderlist" component = {MyOrders} />
          <AuthRouter path = "/orderplaced" component = {OrderPlaced} />
          <AuthRouter path = "/bookdetail" component = {BookDetail} />
          <AuthRouter path = "/mycart" component = {MyCart} />
          <AuthRouter path = "/userprofile" component = {UserProfile} />
          <AuthRouter path = "/profile" component = {ProfilePage} />
          {/* <ProtectedRoute path="/dashboard" component={Dashboard} /> */}
        </Switch>
    </Router>
  );
}