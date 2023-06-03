import React, { useState } from "react";
import { useProfile } from "../../contexts/ProfileContextProvider";
import { useEffect } from "react";
import ProfileCard from "./ProfileCard";
import "./Profile.css";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Javascript } from "@mui/icons-material";
import { Button } from "react-bootstrap";

function ProfileList() {
  const [language, setLanguage] = useState("all");
  // const [language, setLanguage] = useState("all");
  const { profiles, getProfiles, categoryProfile } = useProfile();
  const [searchParams, setSearchParams] = useSearchParams();

  const navigate = useNavigate();
  useEffect(() => {
    getProfiles();
  }, [searchParams]);
  console.log(profiles);
  return (
    <>
      <h1>All Users List</h1>
      <div className="search_wrap">
        <input
          type="text"
          onChange={(e) => {
            categoryProfile("search", e.target.value);
          }}
        />
      </div>
      <div className="language_category_wrap">
        <Button
          onClick={() => {
            categoryProfile("programming_language", "all");
          }}
        >
          all
        </Button>
        <Button
          onClick={() => {
            categoryProfile("programming_language", "javascript");
          }}
        >
          js
        </Button>
        <Button
          onClick={() => {
            categoryProfile("programming_language", "python");
          }}
        >
          python
        </Button>
      </div>
      {/* <div className="language_category_wrap">
        <button
          onClick={() => {
            setLanguage("all");
          }}
        >
          {" "}
          all
        </button>
        <button
          onClick={() => {
            setLanguage("javascript");
          }}
        >
          {" "}
          js
        </button>
      </div>
      <div className="profile-list-container">
        {profiles?.results?.map((item) => {
          if (item.programming_language === language || language === "all") {
            return (
              <div
                style={{ cursor: "pointer" }}
                onClick={() => navigate(`one-profile/${item.id}`)}
              >
                <ProfileCard key={item.id} item={item} />
              </div>
            );
          } else {
            return null;
          }
        })}

      </div> */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "1em",
          justifyContent: "space-around",
        }}
      >
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
