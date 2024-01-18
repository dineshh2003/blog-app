import '../login/login.css';
import { Navigate, useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();
  function loginHandler(event) {
    navigate('./Home')
  }

  return (
    <div className="login">
        <span className="loginTitle">Login</span>
            <form className="loginForm">
                <label>Email</label>
                <input type="text" className="loginInput" placeholder="Enter your Email.." />
                <label>Password</label>
                <input type="text" className="loginInput" placeholder="Enter your password.." />
                <button className="loginButton" onClick={loginHandler}> Login</button>            
            </form>
            <button className="loginRegisterButton">Register</button>
    </div>
  )
}
