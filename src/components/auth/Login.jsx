import React, { useState } from "react";
import "../auth/registerForm/RegisterForm.css";
import { useAuth } from "../../contexts/AuthContextProvider";
import Loader from "../Loader";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { handleLogin, loading, error, setError } = useAuth();

  function handleSave() {
    if (!email.trim() || !password.trim()) {
      alert("заполните поля");
    } else {
      let formData = new FormData();
      formData.append("email", email);
      formData.append("password", password);
      handleLogin(formData, email);
    }
  }

  if (loading) {
    return <Loader />;
  }

  return (
    <div>
      <div className="body">
        <div className="main">
          <div className="circle"></div>
          <div className="register-form-container">
            <form action="">
              <h1>Login</h1>
              {error ? <h2>{error}</h2> : null}
              <div className="form-fields">
                <div className="form-field">
                  <input
                    type="text"
                    required
                    pattern="[а-яА-Я]+"
                    title="Имя может содержать только буквы."
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="email"
                  />
                </div>
                <div className="form-field">
                  <input
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="password"
                    required
                  />
                </div>
                {/* <div className="form-field">
                  <input
                    type="password"
                    onChange={(e) => setPasswordConfirm(e.target.value)}
                    placeholder="password confirm"
                    required
                    minlength="8"
                    maxlength="128"
                  />
                </div> */}
                {/* <div className="form-field">
                  <input
                    type="number"
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="phone"
                    required
                  />
                </div> */}
              </div>
              <div className="form-buttons">
                <button onClick={handleSave} className="button">
                  login
                </button>
                <div className="divider">или</div>
                <a href="#" className="button button-google">
                  Google
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
