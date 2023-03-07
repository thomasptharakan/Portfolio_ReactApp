import React from "react";
import { Card } from "react-bootstrap";



function ProjectCard(props) {
  return (
    <Card style={{ width: '25rem',margin:"15px" }} className="mb-4">
      <Card.Img variant="top" alt={props.Title} src={props.image} height={"250px"}  />
      <Card.Body>
      <Card.Title>{props.title}</Card.Title>
      <hr></hr>
        <Card.Text>
        <a href={props.deployLink}><strong>Deployed Project</strong></a>
        <hr></hr>
        </Card.Text>
        <Card.Text>
        <a href={props.gitHub}><strong>GitHub Repo</strong></a>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default ProjectCard;
