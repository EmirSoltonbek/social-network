import React, { useState } from "react";
import { useProfile } from "../../contexts/ProfileContextProvider";
import { useEffect } from "react";
import ProfileCard from "./ProfileCard";
import "./Profile.css";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Javascript } from "@mui/icons-material";
import { Button, Pagination } from "react-bootstrap";

function ProfileList() {
  const [language, setLanguage] = useState("all");
  // const [language, setLanguage] = useState("all");
  const { profiles, getProfiles, categoryProfile, pages } = useProfile();
  const [searchParams, setSearchParams] = useSearchParams();

  const [currentPage, setCurrentPage] = useState(1);

  function getPagesCount() {
    const pageCountArr = [];
    for (let i = 1; i <= pages; i++) {
      pageCountArr.push(i);
    }
    return pageCountArr;
  }

  useEffect(() => {
    setSearchParams({ page: currentPage });
  }, [currentPage]);

  const navigate = useNavigate();
  useEffect(() => {
    getProfiles();
    console.log("profiles", profiles);
  }, [searchParams]);
  console.log("pages", pages);
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
        <label>Language:</label>
        <select
          name=""
          id=""
          onChange={(e) =>
            categoryProfile("programming_language", e.target.value)
          }
        >
          <option value="all">All</option>
          <option value="javascript">javascript</option>
          <option value="python">python</option>
        </select>
      </div>
      <div>
        <label>Group:</label>
        <select
          name=""
          id=""
          onChange={(e) => categoryProfile("group", e.target.value)}
        >
          <option value="all">All</option>
          <option value="JS 31">JS31</option>
          <option value="PY 27">PY27</option>
        </select>
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
      <Pagination>
        <Pagination.Prev onClick={() => setCurrentPage(currentPage - 1)} />
        {getPagesCount().map((item) =>
          item === currentPage ? (
            <Pagination.Item
              onClick={() => setCurrentPage(item)}
              key={item}
              active
            >
              {item}
            </Pagination.Item>
          ) : (
            <Pagination.Item onClick={() => setCurrentPage(item)} key={item}>
              {item}
            </Pagination.Item>
          )
        )}
        <Pagination.Next onClick={() => setCurrentPage(currentPage + 1)} />
      </Pagination>
    </>
  );
}

export default ProfileList;
