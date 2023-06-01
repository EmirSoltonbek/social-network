import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

function ProfileCard({ item }) {
  console.log(item);
  return (
    <Card style={{ width: "10rem" }}>
      <Card.Img variant="top" src={item.avatar} />
      <Card.Body>
        <Card.Title style={{ fontSize: "1.1em" }}>
          {item.name} {item.last_name}
        </Card.Title>
        <Card.Text>Some text</Card.Text>
      </Card.Body>
      <Card.Body>{/* <Card.Link href="#">Card Link</Card.Link> */}</Card.Body>
    </Card>
  );
}

export default ProfileCard;
