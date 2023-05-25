import React from "react";
import "./InstProfile.css";
import profileImage from "../../assets/Profile image.png";
import back from "../../assets/Background of Profile Image.jpg";

const InstProfile = () => {
  const profileData = {
    username: "example_user",
    followers: 1000,
    following: 500,
    posts: 50,
    bio: "Welcome to my profile!",
  };

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
    // Add more post objects as needed
  ];

  return (
    <div className="profile">
      <div className="profile-header">
        <div className="profile-image-container">
          <img src={profileImage} alt="Profile" className="profile-image" />
        </div>
        <div className="profile-info">
          <div className="profile-username-container">
            <h2 className="profile-username">{profileData.username}</h2>
            <button className="message-button">Message</button>
          </div>
          <ul className="profile-stats">
            <li>
              <span className="stat-label">Posts</span>
              <span className="stat-value">{profileData.posts}</span>
            </li>
            <li>
              <span className="stat-label">Followers</span>
              <span className="stat-value">{profileData.followers}</span>
            </li>
            <li>
              <span className="stat-label">Following</span>
              <span className="stat-value">{profileData.following}</span>
            </li>
          </ul>
          <p className="profile-bio">{profileData.bio}</p>
        </div>
      </div>
      <div className="profile-content">
        {posts.map((post) => (
          <div key={post.id} className="post">
            <img src={back} alt="Post" className="post-image" />
            <p className="post-caption">{post.caption}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InstProfile;
