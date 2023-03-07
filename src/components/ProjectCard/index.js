import React from "react";
import { Card } from "react-bootstrap";



function ProjectCard(props) {
  return (
    <Card style={{ width: '25rem',margin:"15px"}} className="mb-4">
      <Card.Img variant="top" alt={props.Title} src={props.image} height={"250px"}  />
      <Card.Body>
      <Card.Header>{props.title}</Card.Header>
        <Card.Text>
        <strong>Deployed Project:</strong> {props.deployLink}
        </Card.Text>
        <Card.Text>
        <strong>GitHub Link:</strong> {props.gitHub}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default ProjectCard;
