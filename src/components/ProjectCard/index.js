import React from "react";
import { Card } from "react-bootstrap";



function ProjectCard(props) {
  return (
    <Card style={{ width: '25rem', margin: "15px" }} border="light" bg='light' text='dark' className="mb-2">
      <Card.Title>{props.title}</Card.Title>
      <Card.Body>
        <Card.Img variant="top" alt={props.Title} src={props.image} height={"250px"} style={{ padding: "15px " }} />
      </Card.Body>
      <Card.Footer >
        <a href={props.deployLink}>Live URL</a>
        <hr></hr>
        <a href={props.gitHub}>GitHub</a>
      </Card.Footer>

    </Card>
  );
}

export default ProjectCard;
