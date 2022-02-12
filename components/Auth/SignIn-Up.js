import { useState, useRef } from "react";
import { Fragment } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Navigation from "../Navigation/Navigation";
import './SignIn-Up.css';

const Auth = () => {
    const history = useHistory();
    const emailInputRef = useRef();
    const passwordInputRef = useRef();
    const [isLogin, setIsLogin] = useState(true);

    const submitHandler = (event) => {
        event.preventDefault();
        const enteredEmail = emailInputRef.current.value;
        const enteredPassword = passwordInputRef.current.value;
        console.log(enteredEmail, enteredPassword);

        let url;
        if (isLogin) {
        url = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBPFxrja-wN2YJAfTaqzNoEpHhXcpn5hLw"
        } else {
        url =
            "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBPFxrja-wN2YJAfTaqzNoEpHhXcpn5hLw";
        }
        fetch(url, {
        method: "POST",
        body: JSON.stringify({
            email: enteredEmail,
            password: enteredPassword,
            returnSecureToken: true,
        }),
        headers: {
            "Content-Type": "application/json",
        },
        })
        .then((res) => {
            if (res.ok) {
            console.log("User Logged in");
            return res.json();
            } else {
            return res.json().then((data) => {
                let errorMessage = "Authentication failed!";
                throw new Error(errorMessage);
            });
            }
        })
        .then((data) => {
            history.replace('/welcome');
            console.log(data);
        })
        .catch((err) => {
            alert(err.message);
        });
    };

    const switchAuthModeHandler = () => {
      setIsLogin((prevState) => !prevState);
    };

    return (
      <Fragment>
        <Navigation />
        <div className="card">
          <h1 className="h3 mb-3 fw-normal">{isLogin ? "Login" : "Sign Up"}</h1>
          <form onSubmit={submitHandler}>
            <div className="form-floating mb-3">
              <input
                ref={emailInputRef}
                type="email"
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
                required
              />
              <label htmlFor="floatingInput">Email address</label>
            </div>
            <div className="form-floating">
              <input
                ref={passwordInputRef}
                type="password"
                className="form-control"
                id="floatingPassword"
                placeholder="Password"
                required
              />
              <label htmlFor="floatingPassword">Password</label>
            </div>
            <div>
              <button className="btn btn-dark">
                {isLogin ? "LOGIN" : "Create Account"}
              </button>
              <br />
              <button
                className="btn btn-dark"
                type="button"
                onClick={switchAuthModeHandler}
              >
                {isLogin ? "Create new account" : "Login with existing account"}
              </button>
            </div>
          </form>
        </div>
      </Fragment>
    );
};

export default Auth;