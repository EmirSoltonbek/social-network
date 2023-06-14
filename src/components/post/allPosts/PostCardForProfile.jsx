import { Button, Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import "./PostCard.css";
import { useProfile } from "../../../contexts/ProfileContextProvider";
import { useState } from "react";
import { useNavigate } from "react-router";

function PostCardForProfile({ post, setPostsState }) {
  const { commentPost, getOnePost, onePost, posts, getPosts, likePost } =
    useProfile();
  const navigate = useNavigate();
  const [modalInput, setModalInput] = useState(false);
  const [commentState, setCommentState] = useState("");
  const handleCommentPost = () => {
    commentPost({ body: commentState, post: post.id });
    setCommentState("");
  };

  const renderTimestamp = (timestamp) => {
    let prefix = "";
    const timeDiff = Math.round(
      (new Date().getTime() - new Date(timestamp).getTime()) / 60000
    );
    if (timeDiff < 1) {
      // less than one minute ago
      prefix = "just now...";
    } else if (timeDiff < 60 && timeDiff > 1) {
      // less than sixty minutes ago
      prefix = `${timeDiff} minutes ago`;
    } else if (timeDiff < 24 * 60 && timeDiff > 60) {
      // less than 24 hours ago
      prefix = `${Math.round(timeDiff / 60)} hours ago`;
    } else if (timeDiff < 31 * 24 * 60 && timeDiff > 24 * 60) {
      // less than 7 days ago
      prefix = `${Math.round(timeDiff / (60 * 24))} days ago`;
    } else {
      prefix = `${new Date(timestamp)}`;
    }
    return prefix;
  };

  return (
    <Container style={{ display: "flex", justifyContent: "center" }}>
      <Card style={{ width: "55%" }}>
        <Card.Title
          style={{
            cursor: "pointer",
            margin: "0.2em",
            display: "flex",
            alignItems: "center",
          }}
          onClick={() => {
            navigate(`/profile-list/one-profile/${post.user}`);
          }}
        >
          <img
            src={`http://34.125.13.20/${post.avatar}`}
            alt=""
            width="40px"
            height="40px"
            style={{ borderRadius: "50%" }}
          />
          <small>{post.name}</small>
        </Card.Title>
        <Card.Img variant="top" src={`http://34.125.13.20/${post.image}`} />
        <Card.Body>
          <Card.Text
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div style={{ display: "flex", gap: "1em", alignItems: "cetner" }}>
              <button
                className="icons"
                onClick={() => {
                  likePost(post.id);
                  // getPosts();
                }}
              >
                {!post.liked_by_user ? (
                  <i class="bi bi-suit-heart"></i>
                ) : (
                  <i style={{ color: "red" }} class="bi bi-suit-heart-fill"></i>
                )}
              </button>

              <button
                className="icons"
                onClick={() => setModalInput(!modalInput)}
              >
                <i class="bi bi-chat"></i>
              </button>
            </div>
            <button className="icons">
              <i class="bi bi-bookmark"></i>
            </button>{" "}
          </Card.Text>
        </Card.Body>

        {/* <ListGroup className="list-group-flush">
          <ListGroup.Item>Cras justo odio</ListGroup.Item>
          <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
          <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
        </ListGroup> */}
        <Card.Body style={{ display: "grid" }}>
          <p>likes: {post.likes}</p>
          {/* <Card.Link href="#">Card Link</Card.Link>
          <Card.Link href="#">Another Link</Card.Link> */}
          <div className="my-modal">
            {post?.post_comments?.map((elem) => (
              <div style={{ display: "flex", gap: "0.5em" }}>
                <p>{elem?.user}</p>
                <p class="card-text">{elem?.body}</p>
              </div>
            ))}
          </div>
          {modalInput ? (
            <div
              style={{ display: "flex", gap: "0.3em", alignItems: "center" }}
            >
              <input
                type="text"
                onChange={(e) => {
                  setCommentState(e.target.value);
                }}
                value={commentState}
              />
              <Button
                style={{
                  border: "none",
                  background: "white",
                }}
                onClick={handleCommentPost}
                className="sendMessegeBtn"
              >
                <i style={{ color: "lightBlue" }} class="bi bi-send"></i>
              </Button>
            </div>
          ) : (
            ""
          )}
          <small style={{ opacity: "0.7", justifySelf: "flex-end" }}>
            {renderTimestamp(post.created_at)}
          </small>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default PostCardForProfile;
