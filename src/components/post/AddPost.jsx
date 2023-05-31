import React, { useState } from "react";
import { useProfile } from "../../contexts/ProfileContextProvider";
import { useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { Button } from "react-bootstrap";
import "./AddPost.css";

function AddPost() {
  const { profileMe, makePost } = useProfile();
  const navigate = useNavigate();

  //! input states
  const [title, setTitle] = useState("");
  const [image, setImage] = useState(null);
  const [postText, setPostText] = useState("");
  //! input states

  const handleMakePost = () => {
    const newPost = new FormData();
    newPost.append("title", title);
    newPost.append("body", postText);
    newPost.append("user", profileMe.id);

    if (image) {
      newPost.append("image", image);
    }
    makePost(newPost);
  };
  return (
    <div>
      <Card
        style={{
          maxWidth: "35rem",
          minWidth: "20rem",
          width: "100%",
          margin: "0 auto",
          minWidth: "18rem",
        }}
      >
        <Card.Header>Make new post</Card.Header>
        <ListGroup variant="flush">
          <ListGroup.Item>
            <input
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              type="text"
              placeholder="title"
            />
          </ListGroup.Item>
          <ListGroup.Item>
            <input
              className="imageInput"
              onChange={(e) => {
                setImage(e.target.files[0]);
              }}
              type="file"
              accept="image/*"
              placeholder="post image"
            />
          </ListGroup.Item>
          <ListGroup.Item>
            <input
              onChange={(e) => {
                setPostText(e.target.value);
              }}
              type="text"
              placeholder="post text"
            />
          </ListGroup.Item>
        </ListGroup>
        <Button
          onClick={() => {
            handleMakePost();
            navigate("/inst-profile");
          }}
        >
          {" "}
          Upload new post
        </Button>
      </Card>
    </div>
  );
}

export default AddPost;
