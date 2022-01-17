import logo from './logo.svg';
import './App.css';
import RegistrationForm from './components/Registration/RegistrationForm';
import LoginForm from './components/Registration/LoginForm';
import ForgetPassword from './pages/ForgetPassword/ForgetPassword';
import UserRegistration from './pages/UserRegistration/UserRegistration';
import RouterDOM from './router/Router';

function App() {
  return (
    <div className="App">
      {/* <RegistrationForm/> */}
      {/* <ForgetPassword/> */}
      {/* <LoginForm/> */}
      <RouterDOM/>
    </div>
  );
}

export default App;
