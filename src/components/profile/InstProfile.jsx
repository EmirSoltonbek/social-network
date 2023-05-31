import React, { useEffect, useState } from "react";
import "./InstProfile.css";
import profileImage from "../../assets/Profile image.png";
import back from "../../assets/Background of Profile Image.jpg";
import { Button } from "react-bootstrap";
import { useProfile } from "../../contexts/ProfileContextProvider";
import { useNavigate, useParams } from "react-router-dom";
import ProfileModal from "./ProfileModal";
import BootstrapModal from "./BootstrapModal";

const InstProfile = () => {
  const {
    getProfileInfo,
    profileMe,
    getPosts,
    myPosts,
    getMyPosts,
    posts,
    deletePost,
    getOnePost,
    onePost,
  } = useProfile();
  const [profile, setProfile] = useState(profileMe);
  const { id } = useParams();
  const [grid, setGrid] = useState(true);
  const [lgShow, setLgShow] = useState(false);

  const navigate = useNavigate();
  useEffect(() => {
    getProfileInfo();
    getPosts();
  }, []);

  useEffect(() => {
    getMyPosts();
  }, [posts]);

  useEffect(() => {
    setProfile(profileMe);
  }, [profileMe]);

  const [posts1, setPost1] = useState(myPosts);

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
              <button
                onClick={() => {
                  navigate(`/add-post`);
                }}
                className="makePost-button"
              >
                Make Post
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
        {profileMe?.posts?.map((post) => (
          <div key={post.id}>
            {grid ? (
              <div className="post">
                <div className="post-image-container">
                  <img
                    src={`http://34.125.13.20/${post.image}`}
                    alt="Post"
                    className="post-image"
                  />
                </div>
                <p className="post-caption">{post.title}</p>
                <Button
                  onClick={() => {
                    deletePost(post.id);
                  }}
                >
                  delete
                </Button>
                <Button
                  onClick={() => {
                    navigate(`/edit-post/${post.id}`);
                  }}
                >
                  edit
                </Button>

                <Button
                  onClick={() => {
                    getOnePost(post.id);
                    setLgShow(true);
                  }}
                >
                  details
                </Button>
                {lgShow ? (
                  <ProfileModal
                    setLgShow={setLgShow}
                    profileMe={profileMe}
                    myPosts={myPosts}
                    lgShow={lgShow}
                    onePost={onePost}
                    getOnePost={getOnePost}
                  />
                ) : null}
              </div>
            ) : (
              <div className="post-big">
                <div className="post-image-container-big">
                  <img
                    src={`${post.image}`}
                    alt="Post"
                    className="post-image-big"
                  />
                </div>
                <p className="post-caption-big">{post.title}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default InstProfile;
