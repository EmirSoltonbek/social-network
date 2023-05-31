import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import "./PostCard.css";

function PostCard({ post }) {
  console.log(post);
  return (
    <Container style={{ display: "flex", justifyContent: "center" }}>
      <Card style={{ width: "55%" }}>
        <Card.Img variant="top" src={post.image} />
        <Card.Body>
          <Card.Text
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <div style={{ display: "flex", gap: "1em" }}>
              <button className="icons">
                <i class="bi bi-suit-heart"></i>
              </button>
              <button className="icons">
                <i class="bi bi-chat"></i>
              </button>
            </div>
            <button className="icons">
              <i class="bi bi-bookmark"></i>
            </button>
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Cras justo odio</ListGroup.Item>
          <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
          <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
        </ListGroup>
        <Card.Body>
          <Card.Link href="#">Card Link</Card.Link>
          <Card.Link href="#">Another Link</Card.Link>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default PostCard;
