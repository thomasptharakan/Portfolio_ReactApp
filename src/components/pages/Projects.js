import React from "react";
import projects from '../../projects.json';
import ProjectCard from "../ProjectCard";


import Row from 'react-bootstrap/Row';
import { Container } from "react-bootstrap";



function Projects() {
  return (
    <div>
      <Container fluid="md">
      <h1>Projects Page</h1>
      <hr></hr>
      </Container>
      <Container fluid="md" >
      <Row style={{justifyContent:"center", padding :"10px"}}>
        {projects.map(f => <ProjectCard title={f.Title} image={f.Image} deployLink={f.DeployLink} gitHub={f.GitHub}/>)}
        </Row>
      </Container>
    </div>

  );
}

export default Projects;
