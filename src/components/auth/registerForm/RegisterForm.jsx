import React, { useState } from "react";
import "./RegisterForm.css";
import { useAuth } from "../../../contexts/AuthContextProvider";
import Loader from "../../Loader";
import axios from "axios";

const RegisterForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");

  const { handleRegister, loading, error, setError } = useAuth();

  function handleSave() {
    if (!email.trim() || !password.trim() || !passwordConfirm.trim()) {
      alert("заполните поля");
    } else {
      let formData = new FormData();
      formData.append("email", email);
      formData.append("password", password);
      formData.append("password_confirm", passwordConfirm);
      formData.append("name", name);
      formData.append("last_name", lastName);
    
      handleRegister(formData);
    }

    // let data = {
    //   "email": email,
    //   "secret": password,
    //   "username": name,
    //   "first_name": name,
    //   "last_name": lastName,
    // };
  //   axios.post('https://api.chatengine.io/users/', data, {
  //   headers: {
  //     'PRIVATE-KEY': '{{e752d700-e8b7-4458-b1ee-2be833a27a11}}'
  //   }
  // })
    // .then(function(response) {
    //   console.log(JSON.stringify(response.data));
    //   // Дополнительный код, который нужно выполнить после успешной регистрации
    // })
    // .catch(function(error) {
    //   console.log(error);
    //   // Обработка ошибок при регистрации
    // });
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
                  type="text"
                  onChange={(e) => setName(e.target.value)}
                  placeholder="first name"
                  required
                />
              </div>
              <div className="form-field">
                <input
                  type="text"
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="last name"
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
