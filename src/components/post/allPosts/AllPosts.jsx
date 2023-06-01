import React from "react";
import { useProfile } from "../../../contexts/ProfileContextProvider";
import { useEffect } from "react";
import PostCard from "./PostCard";
import { useScrollTrigger } from "@mui/material";
import { useState } from "react";

function AllPosts() {
  const { getPosts, posts, getProfiles, profiles } = useProfile();
  useEffect(() => {
    getPosts();
  }, []);
  console.log(posts);
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>All Posts</h1>
      {posts?.results?.map((post) => (
        <div style={{ margin: "2em 0" }}>
          <PostCard post={post} />
        </div>
      ))}
    </div>
  );
}

export default AllPosts;
