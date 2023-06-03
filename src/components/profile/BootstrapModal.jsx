import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./BootstrapModal.css";
import { useProfile } from "../../contexts/ProfileContextProvider";

function BootstrapModal({ lgShow, setLgShow, onePost, oneProfile }) {
  const { commentPost, getOnePost, likePost } = useProfile();
  const [modalInput, setModalInput] = useState(false);
  const [commentState, setCommentState] = useState("");
  const handleCommentPost = () => {
    commentPost({ body: commentState, post: onePost.id });
    getOnePost(onePost.id);
    setCommentState("");
  };
  const handleLike = (id) => {
    likePost(id);
    getOnePost(onePost.id);
  };
  console.log(onePost);
  return (
    <>
      {/* <Button>Large modal</Button> */}
      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton onClick={() => setLgShow(false)}>
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
                    <img src={onePost.image} alt="" />{" "}
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="card-block ">
                    <div className="card-title">
                      <span>
                        <img
                          src={oneProfile.avatar}
                          alt=""
                          width="50px"
                          style={{ borderRadius: "50%" }}
                        />
                      </span>
                      <h3>{onePost.body}</h3>
                    </div>
                    <div className="my-modal">
                      <div>
                        {onePost?.post_comments?.map((elem, index) => (
                          <div
                            key={index}
                            style={{ display: "flex", gap: "0.5em" }}
                          >
                            <p>{elem.user}:</p>
                            <p class="card-text">{elem.body}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div style={{ display: "flex" }}>
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <Button
                          href="#"
                          className="btn btn-primary"
                          style={{ margin: "10px" }}
                          onClick={() => {
                            likePost(onePost.id);
                            getOnePost(onePost.id);
                          }}
                        >
                          like
                        </Button>
                        <p>{onePost.likes}</p>
                      </div>
                      <Button
                        href="#"
                        className="btn btn-primary"
                        style={{ margin: "10px" }}
                        onClick={() => setModalInput(!modalInput)}
                      >
                        comment
                      </Button>
                    </div>
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

export default BootstrapModal;
