import React from "react";
import { useProfile } from "../../contexts/ProfileContextProvider";
import { useEffect } from "react";
import ProfileCard from "./ProfileCard";
import "./Profile.css";
import { useNavigate } from "react-router-dom";

function ProfileList() {
  const { profiles, getProfiles } = useProfile();

  const navigate = useNavigate();
  useEffect(() => {
    getProfiles();
  }, []);
  console.log(profiles);
  return (
    <>
      <h1>All Users List</h1>
      <div className="profile-list-container">
        {profiles?.results?.map((item) => (
          <div
            style={{ cursor: "pointer" }}
            onClick={() => navigate(`one-profile/${item.id}`)}
          >
            <ProfileCard key={item.id} item={item} />
          </div>
        ))}
      </div>
    </>
  );
}

export default ProfileList;
