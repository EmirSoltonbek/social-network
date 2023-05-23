import React from "react";
import "./Chat.css";

const Chat = () => {
  return (
    <div className="app">
      <div className="screen join-screen ">
        <div className="form">
          <h2>join chatroom</h2>
          <div className="form-input">
            <label htmlFor="">Username</label>
            <input type="text" id="username" />
          </div>
          <div className="form-input">
            <button id="join-user">Join</button>
          </div>
        </div>
      </div>
      <div className="screen chat-screen active">
        <div className="header">
          <div className="logo">Chatroom</div>
          <button id="exit-chat">Exit</button>
        </div>
        <div className="messages">
          {/* Dummy message */}
          <div className="message my-message">
            <div>
              <div className="name">You</div>
              <div className="text">Hi</div>
            </div>
          </div>
          <div className="update">Abc is joined the conversation</div>
          <div className="message other-message">
            <div>
              <div className="name">Abc</div>
              <div className="text">Hi</div>
            </div>
          </div>
        </div>
        <div className="typebox">
          <input type="text" id="message-input" />
          <button id="send-message">Send</button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
