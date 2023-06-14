import React, { useState } from "react";
import { Card, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useProfile } from "../../contexts/ProfileContextProvider";

function NewPassword() {
  const { resetPassword, handleNewPassword, getConfig, profileMe } =
    useProfile();
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const handleResetPassword = (e) => {
    e.preventDefault();
    if (!password.trim() || !passwordConfirm.trim()) {
      alert("fill the inputs");
    } else {
      let formData = new FormData();
      formData.append("password", password);
      formData.append("password_confirm", passwordConfirm);
      formData.append("token", getConfig());
      formData.append("uidb64", profileMe.id);

      handleNewPassword(formData, profileMe.id);
    }
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: "90vh" }}
    >
      <Card
        className="text-center"
        style={{ width: "100%", maxWidth: "25rem" }}
      >
        <Card.Header className="h5 text-white bg-primary">
          Password Reset
        </Card.Header>
        <Card.Body className="px-5">
          <Card.Text className="py-2">
            Enter your email address and we'll send you an email with
            instructions to reset your password.
          </Card.Text>
          <Form>
            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>New Password</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <Form.Label>Confirm password</Form.Label>
              <Form.Control
                type="text"
                placeholder="Confirm password"
                onChange={(e) => setPasswordConfirm(e.target.value)}
              />
            </Form.Group>
            <Button
              variant="primary"
              className="w-100"
              onClick={handleResetPassword}
            >
              Reset password
            </Button>
          </Form>
          <div className="d-flex justify-content-between mt-4">
            <a onClick={() => navigate("/login")} href="">
              Login
            </a>
            <a onClick={() => navigate("/register")} href="">
              Register
            </a>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default NewPassword;
