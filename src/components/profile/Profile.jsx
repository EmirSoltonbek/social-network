import React, { useEffect, useState } from "react";
import background from "../../assets/Background of Profile Image.jpg";
import profileImage from "../../assets/Profile image.png";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import "./Profile.css";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import post from "../../assets/Image 01.jpg";
import GridOnIcon from "@mui/icons-material/GridOn";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import ProfileModal from "./ProfileModal";

function Profile() {
  const [grid, setGrid] = useState(true);
  const [modal, setModal] = useState(false);

  return (
    <div style={{ maxWidth: "720px", width: "100%", margin: "0 auto" }}>
      <div
        className="imgContainer"
        style={{ maxWidth: "720px", width: "100%", position: "relative" }}
      >
        <img src={background} alt="" width="100%" height="80%" />
        <img
          src={profileImage}
          alt=""
          style={{
            position: "absolute",
            transform: "translate(-50%, -50%)",
            left: "50%",
            bottom: "-40%",
            zIndex: "2",
            width: "25%",
          }}
        />
      </div>
      <div className="profileBody">
        <div style={{ textAlign: "center" }}>
          <h2 style={{ fontWeight: "600", color: "#353535" }}>Ana Souza</h2>
          <span
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "#A8A8A8",
              fontSize: "14px",
              gap: "0.3em",
            }}
          >
            <p>
              <LocationOnIcon />
            </p>
            <p>Sao Paulo,</p> <p>Brazil</p>
          </span>
          <p>
            A true lover of animals, photography, travel, restaurants and clubs!
          </p>
        </div>
        <button
          style={{
            width: "30%",
            padding: "0.2em",
            backgroundColor: "white",
            border: "2px solid lightBlue",
            borderRadius: "3px",
            justifySelf: "center",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "1em",
            cursor: "pointer",
            color: "lightblue",
            fontWeight: "300",
            fontSize: "0.9em",
            gap: "0.5em",
          }}
        >
          <span>
            <ChatBubbleOutlineIcon style={{ color: "lightblue" }} />
          </span>
          Massage
        </button>
      </div>
      <div>
        <div className="upperPostsContainer">
          <h1>Activity</h1>
          <span>
            <button onClick={() => setGrid(!grid)}>
              <GridOnIcon />
            </button>
            <button onClick={() => setGrid(!grid)}>
              <FormatListBulletedIcon />
            </button>
          </span>
        </div>
        {grid ? (
          <div className="postsContainer3">
            <div
              className="eactPosts"
              onClick={() => {
                setModal(!true);
              }}
            >
              <img src={post} alt="" width="100%" />
            </div>
            <div className="eactPosts">
              <img src={post} alt="" width="100%" />
            </div>
            <div className="eactPosts">
              <img src={post} alt="" width="100%" />
            </div>
          </div>
        ) : (
          <div className="postsContainer1">
            <div className="eactPosts1">
              <img src={post} alt="" width="100%" />
            </div>
            <div className="eactPosts1">
              <img src={post} alt="" width="100%" />
            </div>
            <div className="eactPosts1">
              <img src={post} alt="" width="100%" />
            </div>
          </div>
        )}
        {modal ? <ProfileModal /> : null}
      </div>
    </div>
  );
}

export default Profile;
