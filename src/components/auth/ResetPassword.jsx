import React, { useState } from "react";
import { Card, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useProfile } from "../../contexts/ProfileContextProvider";

function PasswordReset() {
  const { resetPassword } = useProfile();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const handleResetPassword = (e) => {
    e.preventDefault();
    if (!email.trim()) {
      alert("fill the input");
    } else {
      let emailData = new FormData();
      emailData.append("email", email);

      resetPassword(emailData);
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
              <Form.Label>Email input</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                onChange={(e) => setEmail(e.target.value)}
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

export default PasswordReset;
