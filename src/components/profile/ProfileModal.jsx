import React from "react";
import "./ProfileModal.css";
import postImage from "../../assets/Image 01.jpg";

function ProfileModal({ setModal, onePost, profileMe }) {
  return (
    <div className="profileModalContainer">
      <div className="profileInnerContainer">
        <div className="profileInnerContaier_image">
          <img src={onePost.image} alt="" width="100%" />
        </div>
        <div className="profileInnerContaier_text">
          <div
            style={{ display: "flex" }}
            className="profileInnerContainer_text_imgnick"
          >
            <div className="avatarImage1 ">
              <img
                src={profileMe?.avatar}
                alt=""
                width="100%"
                style={{ borderRadius: "50%" }}
              />
            </div>
            <div>nick_name</div>
          </div>
          <div className="profileInnerContainer_text_body">
            <div style={{ display: "flex" }}>
              <div className="avatarImage">
                <img
                  src={profileMe?.avatar}
                  alt=""
                  width="100%"
                  style={{ borderRadius: "50%" }}
                />
              </div>
              <div>
                <p>nick_name</p>
                {onePost.body}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="profileModalCloseBtn">
        <button onClick={() => setModal(false)}>x</button>
      </div>
    </div>
  );
}

export default ProfileModal;
