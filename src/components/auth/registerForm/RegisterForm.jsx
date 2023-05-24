import React from "react";
import "./RegisterForm.css";

const RegisterForm = () => {
  return (
    <div>
      <div className="body">
          <div className="circle"></div>
          <div className="register-form-container">
            <form action="">
              <h1 className="form-title">/ Регистрация</h1>
              <div className="form-fields">
                <div className="form-field">
                  <input
                    type="text"
                    placeholder="Имя"
                    required
                    pattern="[а-яА-Я]+"
                    title="Имя может содержать только буквы."
                  />
                </div>
                <div className="form-field">
                  <input type="email" placeholder="Почта" required />
                </div>
                <div className="form-field">
                  <input
                    type="password"
                    placeholder="Пароль"
                    required
                    minlength="8"
                    maxlength="128"
                  />
                </div>
              </div>
              <div className="form-buttons">
                <button className="button">Регистрация</button>
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
