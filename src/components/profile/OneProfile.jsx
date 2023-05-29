import React from "react";
import { useProfile } from "../../contexts/ProfileContextProvider";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import back from "../../assets/Background of Profile Image.jpg";

function OneProfile() {
  const { oneProfile, getOneProfile } = useProfile();
  const { id } = useParams();
  const [grid, setGrid] = useState(true);
  useEffect(() => {
    getOneProfile(id);
  }, []);
  console.log(oneProfile);

  const posts = [
    {
      id: 1,
      image: "post1.jpg",
      caption: "Beautiful sunset",
    },
    {
      id: 2,
      image: "post2.jpg",
      caption: "Delicious food",
    },
    {
      id: 2,
      image: "post2.jpg",
      caption: "Delicious food",
    },
    // Add more post objects as needed
  ];
  return (
    <div className="profile">
      <div className="profile-header">
        <div className="profile-image-container">
          <img
            src={oneProfile.avatar}
            alt="Profile"
            className="profile-image"
          />
        </div>
        <div className="profile-info">
          <div className="profile-username-container">
            <h2 className="profile-username">
              {oneProfile.name}
              {"  "}
              {oneProfile.last_name}
            </h2>
            <span>
              <button className="msg-button">Message</button>
              {/* <button
            onClick={() => {
              navigate(`/profile/edit/${profile.id}`);
            }}
            className="edit-button"
          >
            Edit
          </button> */}
            </span>
          </div>
          <div>
            <p className="profile-bio">bio: {oneProfile.bio}</p>
            <p className="profile-bio">email: {oneProfile.email}</p>
            <p className="profile-bio">
              tongue: {oneProfile.programming_language}
            </p>
            <p className="profile-bio">group: {oneProfile.group}</p>
            <p className="profile-bio">
              live since: {oneProfile.date_of_birth}
            </p>
          </div>
        </div>
      </div>
      <div className="upperPostsContainer">
        <h1>Activity</h1>
        <span>
          <button onClick={() => setGrid(true)}>
            <i class="bi bi-grid-3x3"></i>
          </button>
          <button onClick={() => setGrid(false)}>
            <i style={{ fontSize: "2.7rem" }} class="bi bi-list"></i>
          </button>
        </span>
      </div>
      <div className="profile-content">
        {posts.map((post) => (
          <div>
            {grid ? (
              <div key={post.id} className="post">
                <div className="post-image-container">
                  <img src={back} alt="Post" className="post-image" />
                </div>
                <p className="post-caption">{post.caption}</p>
              </div>
            ) : (
              <div key={post.id} className="post-big">
                <div className="post-image-container-big">
                  <img src={back} alt="Post" className="post-image-big" />
                </div>
                <p className="post-caption-big">{post.caption}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default OneProfile;
