import React, { useState } from "react";
import "./RegisterForm.css";
import { useAuth } from "../../../contexts/AuthContextProvider";
import Loader from "../../Loader";

const RegisterForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [phone, setPhone] = useState(0);

  const { handleRegister, loading, error, setError } = useAuth();

  function handleSave() {
    if (!email.trim() || !password.trim() || !passwordConfirm.trim()) {
      alert("заполните поля");
    } else {
      let formData = new FormData();
      formData.append("email", email);
      formData.append("password", password);
      formData.append("password_confirm", passwordConfirm);
      formData.append("phone", phone);
      handleRegister(formData);
    }
  }

  if (loading) {
    return <Loader />;
  }

  return (
    <div>
      <div className="body">
          <div className="circle"></div>
          <div className="register-form-container">
            <form action="">
              <h1>Register</h1>
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
                <div className="form-field">
                  <input
                    type="password"
                    onChange={(e) => setPasswordConfirm(e.target.value)}
                    placeholder="password confirm"
                    required
                    minlength="8"
                    maxlength="128"
                  />
                </div>
                <div className="form-field">
                  <input
                    type="number"
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="phone"
                    required
                  />
                </div>
              </div>
              <div className="form-buttons">
                <button onClick={handleSave} className="button">
                  register
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
  );
};

export default RegisterForm;
