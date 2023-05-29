import React, { useState } from "react";
import { useProfile } from "../../contexts/ProfileContextProvider";
import { useNavigate, useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { Button } from "react-bootstrap";
import "./AddPost.css";
import { useEffect } from "react";

function EditPost() {
  const { profileMe, onePost, getOnePost, editPost } = useProfile();
  const navigate = useNavigate();
  const { id } = useParams();

  console.log(profileMe, "ProfileMe");
  console.log(onePost, "onePost");

  //!edit post state
  const [editingPost, setEditingPost] = useState(onePost);
  //!edit post state

  useEffect(() => {
    getOnePost(id);
  }, []);
  //   useEffect(() => {
  //     setEditingPost(onePost);
  //   }, [onePost]);
  console.log(editingPost, "editingPost");

  //! input states
  const [title, setTitle] = useState(editingPost?.title);
  const [image, setImage] = useState(null);
  const [postText, setPostText] = useState(editingPost?.body);
  //! input states

  useEffect(() => {
    if (onePost) {
      setTitle(onePost.title);
      setPostText(onePost.body);
    }
  }, [onePost]);

  const handleEditPost = () => {
    const editedPost = new FormData();
    editedPost.append("title", title);
    editedPost.append("body", postText);
    editedPost.append("user", profileMe.id);

    if (image) {
      editedPost.append("image", image);
    }
    editPost(id, editedPost);
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
        <Card.Header>Edit Post</Card.Header>
        <ListGroup variant="flush">
          <ListGroup.Item>
            <input
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              type="text"
              value={title}
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
              value={postText}
            />
          </ListGroup.Item>
        </ListGroup>
        <Button
          onClick={() => {
            handleEditPost();
            navigate("/inst-profile");
          }}
        >
          {" "}
          Edit post
        </Button>
      </Card>
    </div>
  );
}

export default EditPost;
