import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./BootstrapModal.css";
import { useProfile } from "../../contexts/ProfileContextProvider";
import { useNavigate } from "react-router";

function ProfileModal({
  lgShow,
  setLgShow,
  myPosts,
  profileMe,
  onePost,
  getOnePost,
}) {
  console.log(onePost);
  const { commentPost } = useProfile();
  const [modalInput, setModalInput] = useState(false);
  const [commentState, setCommentState] = useState("");
  const handleCommentPost = () => {
    commentPost({ body: commentState, post: onePost.id });
    getOnePost(onePost.id);
    setCommentState("");
  };
  const navigate = useNavigate();
  return (
    <>
      <Button>Large modal</Button>
      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            {onePost.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div class="container">
            <div class="card">
              <div class="row">
                <div class="col-md-6">
                  <div class="card-img-bottom">
                    {" "}
                    <img src={onePost.image} alt="" />{" "}
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="card-block ">
                    <div className="card-title">
                      <span>
                        <img
                          src={profileMe.avatar}
                          alt=""
                          width="50px"
                          style={{ borderRadius: "50%" }}
                        />
                      </span>
                      <h3>{onePost.body}</h3>
                    </div>
                    <div className="my-modal">
                      {onePost?.post_comments?.map((elem) => (
                        <div
                          style={{
                            display: "flex",
                            gap: "0.5em",
                            alignContent: "center",
                          }}
                        >
                          <img
                            src={`http://34.125.13.20/${elem.avatar}`}
                            alt=""
                            width="25px"
                            height="25px"
                            style={{ borderRadius: "50%" }}
                          />
                          <div
                            onClick={() => {
                              navigate(
                                `/profile-list/one-profile/${elem.user}`
                              );
                            }}
                            style={{ cursor: "pointer" }}
                          >
                            {elem.name}:
                          </div>
                          <p class="card-text">{elem?.body}</p>
                        </div>
                      ))}
                    </div>
                    {/* <Button
                      href="#"
                      className="btn btn-primary"
                      style={{ margin: "10px" }}
                    >
                      like
                    </Button>
                    <Button
                      href="#"
                      className="btn btn-primary"
                      style={{ margin: "10px" }}
                      onClick={() => setModalInput(!modalInput)}
                    >
                      comment
                    </Button> */}
                    {modalInput ? (
                      <div>
                        <input
                          type="text"
                          onChange={(e) => {
                            setCommentState(e.target.value);
                          }}
                          value={commentState}
                        />
                        <Button onClick={handleCommentPost}>
                          leave a comment
                        </Button>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ProfileModal;
