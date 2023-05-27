import React, { useEffect, useState } from "react";
import "./InstProfile.css";
import profileImage from "../../assets/Profile image.png";
import back from "../../assets/Background of Profile Image.jpg";
import { Button } from "react-bootstrap";
import { useProfile } from "../../contexts/ProfileContextProvider";
import { useNavigate, useParams } from "react-router-dom";

const InstProfile = () => {
  const { getProfileInfo, profileMe } = useProfile();
  const [profile, setProfile] = useState(profileMe);
  const { id } = useParams();

  const navigate = useNavigate();
  useEffect(() => {
    getProfileInfo();
  }, []);

  useEffect(() => {
    setProfile(profileMe);
  }, [profileMe]);

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
          <img src={profile.avatar} alt="Profile" className="profile-image" />
        </div>
        <div className="profile-info">
          <div className="profile-username-container">
            <h2 className="profile-username">
              {profile.name}
              {"  "}
              {profile.last_name}
            </h2>
            <span>
              <button className="msg-button">Message</button>
              <button
                onClick={() => {
                  navigate(`/profile/edit/${profile.id}`);
                }}
                className="edit-button"
              >
                Edit
              </button>
            </span>
          </div>
          <div>
            <p className="profile-bio">bio: {profile.bio}</p>
            <p className="profile-bio">email: {profile.email}</p>
            <p className="profile-bio">
              tongue: {profile.programming_language}
            </p>
            <p className="profile-bio">group: {profile.group}</p>
            <p className="profile-bio">live since: {profile.date_of_birth}</p>
          </div>
        </div>
      </div>
      <div className="profile-content">
        {posts.map((post) => (
          <div key={post.id} className="post">
            <div className="post-image-container">
              <img src={back} alt="Post" className="post-image" />
            </div>
            <p className="post-caption">{post.caption}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InstProfile;
