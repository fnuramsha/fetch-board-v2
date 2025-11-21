import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export function Post(props) {
  const { post } = props;
  const { title, description } = post;

  return (
    <Card>
      <Card.Img
        variant="top"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcb-mQWqr35vnUWoC9h4z9Vg-OC8_MHK79OA&s"
      />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}
